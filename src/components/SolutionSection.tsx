import React from 'react';
import {useTranslations} from "next-intl";
import { FaCheckCircle } from "react-icons/fa";

const SolutionSection = () => {
    const t = useTranslations('HomePage.solution')

    return (
        <div className="flex flex-col mx-auto gap-6">
            <div>
                <div className="py-2 px-6 -rotate-4 bg-primary-dark w-fit rounded-3xl m-auto">
                    <span className="text-2xl font-barlow">The solution</span>
                </div>
                <h2 className="text-center text-3xl mb-2">{t("title")}</h2>
                <p className="text-center text-foreground-dark">{t("desc")}</p>
            </div>
            <ul className="flex flex-col gap-7">
               <SolutionItem index={1}/>
               <SolutionItem index={2}/>
               <SolutionItem index={3}/>
            </ul>
        </div>
    );
};

const SolutionItem = ({index}: {index:number}) => {
    const t = useTranslations('HomePage.solution')

    return (
        <li className="solution-card flex-col md:flex-row md:even:flex-row-reverse gap-6 rounded-4xl">
            <div className="flex-1 gap-2 flex flex-col">
                <h3 className="text-4xl">{t(`${index}.title`)}</h3>
                <p className="text-foreground-dark">{t(`${index}.desc`)}</p>
            </div>
            <ul className="flex-1 flex items-center justify-center">
                <div className="flex flex-col gap-4">
                    <HintItem textContent={t(`${index}.hint1`)} />
                    <HintItem textContent={t(`${index}.hint2`)} />
                    <HintItem textContent={t(`${index}.hint3`)} />
                </div>
            </ul>
        </li>
    )
}

const HintItem = ({textContent}: {textContent: string}) => {
    return (
        <li className="flex items-center gap-2 bg-background-extra-light p-2 rounded-xl shadow-m">
            <FaCheckCircle className="text-green-400" size={20}/>
            {textContent}
        </li>
    )
}

export default SolutionSection;