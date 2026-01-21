import React from 'react';
import {useTranslations} from "next-intl";
import CodeBlock from "@/components/CodeBlock";
import {beforeToryx, afterToryx} from "@/data/codeExample";

const BeforeAfter = () => {
    const t = useTranslations('HomePage.beforeAfter')

    return (
        <div className="flex flex-col mx-auto text-balance">
            <h2 className="text-center text-3xl mb-2">{t("title")}</h2>
            <p className="text-center text-foreground-dark mb-10">{t("desc")}</p>
            <div className="flex gap-6">
                <div className="p-6 bg-red-950/30 rounded-xl w-full">
                    <div className="mb-4">
                        <h3 className="text-2xl">Traditional Try-Catch</h3>
                        <p className="text-foreground-dark">Nested, unclear, error-prone</p>
                    </div>
                    <CodeBlock code={beforeToryx} />
                </div>
                <div className="border-toryx-gradient p-6 bg-blue-900/50 shadow-hovered rounded-xl  w-full">
                    <div className="mb-4">
                        <h3 className="text-2xl">With Toryx</h3>
                        <p className="text-foreground-dark">Clean, explicit, type-safe</p>
                    </div>
                    <CodeBlock code={afterToryx} />
                </div>
            </div>
        </div>
    );
};

export default BeforeAfter;