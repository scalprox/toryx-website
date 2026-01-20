import "../globals.css";
import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {NextIntlClientProvider, hasLocale, Locale} from "next-intl";
import {routing} from "@/i18n/routing";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(
    props: Omit<LayoutProps<'/[locale]'>, 'children'>
): Promise<Metadata> {
    const {locale} = await props.params;

    const t = await getTranslations({
        locale: locale as Locale,
        namespace: 'Metadata'
    });
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                fr: `${baseUrl}/fr`,
                en: `${baseUrl}/en`
            }
        },
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            locale: locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('twitterTitle'),
            description: t('twitterDescription'),
        },
    };
}

export default async function LocaleLayout({children, params}: LayoutProps<'/[locale]'>) {
    {
        const {locale} = await params;
        if (!hasLocale(routing.locales, locale)) {
            notFound();
        }
        setRequestLocale(locale);

        return (
            <html lang={locale}>
            <body
                className={`${interSans.variable} antialiased`}
            >
            <NextIntlClientProvider>
                {children}
            </NextIntlClientProvider>
            </body>
            </html>
        );
    }
}
