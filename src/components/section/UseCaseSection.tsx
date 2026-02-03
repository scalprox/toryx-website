import React from 'react';
import {useTranslations} from "next-intl";

const UseCaseSection = () => {
    const t = useTranslations('HomePage.useCase')

    return (
        <div>
            <h2 className="text-center text-3xl mb-2">{t("title")}</h2>
            <p className="text-center text-foreground-dark">{t("desc")}</p>
        </div>
    );
};

const UseCaseCard = ()=>{
    return (
        <div>
            <div></div>
            <h3></h3>
            <p></p>
            <ul></ul>
        </div>
    )
}

export default UseCaseSection;