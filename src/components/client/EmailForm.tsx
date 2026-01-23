"use client"

import React, {useState} from 'react';
import AppTextInput from "@/components/AppInput";
import { IoMailOutline } from "react-icons/io5";
import PrimaryButton from "@/components/AppButton";
import {useTranslations} from "next-intl";

const EmailForm = () => {
    const t = useTranslations('base')
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (
        <form className="gap-2 flex flex-col  w-full lg:flex-row lg:items-center">
            <AppTextInput type="email" labelVisible={false} icon={IoMailOutline} label="Your email" id="email" onChange={handleEmailChange} value={email} />
            <PrimaryButton textContent={t("submit")} onClick={()=>{}} type="submit"/>
        </form>
    );
};

export default EmailForm;