import {NextResponse} from "next/server";
import emailValidator from "email-validator";
import {HttpError, safeFetch} from "@toryx/core";
import {getTranslations} from "next-intl/server";
import {cookies} from "next/headers";

interface SupabaseResponse {
    code: string
    details: string | null
    hint: string | null
    message: string
}

export async function POST(req: Request) {
    const cookieStore = await cookies()
    const lang = cookieStore.get("NEXT_LOCALE")
    const t = await getTranslations({locale: lang?.value || "en", namespace: "base"})
    const body = await req.json();
    const publicurl = process.env.SUPABASE_URL;
    const publickey = process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY

    if (!publickey || !publicurl) throw new Error(
        t("email.unknownError")
    )

    if (!emailValidator.validate(body.email)) return NextResponse.json({
        success: false,
        message: t("email.invalid")
    }, {status: 400})

    const res = await safeFetch<SupabaseResponse>(fetch(
        publicurl + "/rest/v1/newsletter",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": publickey,
                "Authorization": `Bearer ${publickey}`,
                "Prefer": "return=representation"
            },
            body: JSON.stringify({
                email: body.email,
            }),
        })
    );

    if (res.ok) {
        return NextResponse.json({success: true, message: t("email.success")})
    } else {
        if (res.error instanceof HttpError && res.error.statusCode === 409) {
            // duplicated unique key
            return NextResponse.json({success: true, message: t("email.duplicated")})
        }

        return NextResponse.json({success: false, message: t("email.unknownError")})
    }
}
