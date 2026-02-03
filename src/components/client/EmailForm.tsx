"use client"

import React, {type FormEvent, useState} from 'react';
import AppTextInput from "~/components/AppInput";
import {IoMailOutline} from "react-icons/io5";
import PrimaryButton from "~/components/AppButton";
import {useTranslations} from "next-intl";
import {HttpError, safeFetch} from "@toryx/core";
import {CgSpinner} from "react-icons/cg";
import {FaCheckCircle} from "react-icons/fa";
import {IoCloseCircle} from "react-icons/io5";


const EmailForm = () => {
    const t = useTranslations('base')
    const [queryState, setQueryState] = useState<null | "loading" | "success" | "error">(null)
    const [email, setEmail] = useState("");
    const [error, setError] = useState<null | string>(null);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setQueryState("loading");
        const result = await safeFetch<{ success: boolean, message: string }>(fetch("/api/register-email", {
            method: "POST",
            body: JSON.stringify({email})
        }))

        if (result.ok) {
            setQueryState("success");
            setError(null)
        } else {
                setQueryState("error");
            if (result.error instanceof HttpError && typeof result.error.body === "object" && result.error.body && "message" in result.error.body && typeof result.error.body.message === "string") {
                setError(result.error.body.message)
            }
        }

        setTimeout(() => {
            setQueryState(null)
            setEmail("")
        }, 2000);
    }

    const getIcon = () => {
        if (queryState === null) return <IoMailOutline size={20} className="z-10 text-neutral-400" />
        if (queryState === "loading") return <CgSpinner size={20} className="z-10 animate-spin text-neutral-400" />
        if (queryState === "success") return <FaCheckCircle size={20} className="z-10 text-green-500" />
        if (queryState === "error") return <IoCloseCircle size={20} className="z-10 text-red-500" />
    }

    return (
        <form onSubmit={handleSubmit} className="gap-2 flex flex-col  w-full lg:flex-row lg:items-center">
            <AppTextInput loading={queryState !== null}
                type="email"
                labelVisible={false}
                icon={getIcon}
                label="Your email"
                id="email"
                onChange={handleEmailChange}
                value={email} />
            {error && <i className="text-red-400 text-sm -translate-y-1/3 pl-2">{error}</i>}
            <PrimaryButton disabled={queryState !== null} textContent={t("submit")} onClick={() => {
            }} type="submit" />
        </form>
    );
};

export default EmailForm;