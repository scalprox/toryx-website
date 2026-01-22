import React from 'react';
import {useTranslations} from "next-intl";
import CodeBlock from "@/components/CodeBlock";
import {beforeToryx, afterToryx} from "@/data/codeExample";
import { IoCloseCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";


const BeforeAfterSection = () => {
    const t = useTranslations('HomePage.beforeAfter')

    return (
        <div className="flex flex-col mx-auto text-balance">
            <h2 className="text-center text-3xl mb-2">{t("title")}</h2>
            <p className="text-center text-foreground-dark mb-10">{t("desc")}</p>
            <div className="flex flex-col gap-6 relative xl:flex-row">
                <div className="saturate-50">
                    <div className="mb-4 p-4 bg-background-extra-light rounded-xl shadow-m">
                        <h3 className="text-2xl">{t("before.title")}</h3>
                        <p className="text-foreground-dark">{t("before.desc")}</p>
                    </div>
                    <CodeBlock code={beforeToryx} />
                    <div className="flex items-center justify-center gap-2 mt-2 text-gray-400 text-sm font-medium">
                        <IoCloseCircle className="text-gray-600" size={25}/>
                        <span>{t("before.arg1")}</span>
                        •
                        <span>{t("before.arg2")}</span>
                    </div>
                </div>
                <div className="flex p-2 bg-primary-dark shadow-hovered border-1 border-primary rounded-full justify-center items-center self-center xl:hidden">
                    <FaArrowDown className="text-primary" size={30}/>
                </div>
                <div className="xl:sticky top-50 h-fit">
                    <div className="mb-4 p-4 bg-primary-dark shadow-hovered rounded-xl">
                        <h3 className="text-2xl">{t("after.title")}</h3>
                        <p className="text-foreground-dark">{t("after.desc")}</p>
                    </div>
                    <CodeBlock classname="border-toryx-gradient shadow-hovered rounded-md" code={afterToryx} />
                    <div className="flex items-center justify-center gap-2 mt-2 text-primary text-sm font-medium">
                        <FaCheckCircle className="text-primary" size={20}/>
                        <span>{t("after.arg1")}</span>
                        •
                        <span>{t("after.arg1")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSection;