import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";

const ProblemSection = () => {
    const t = useTranslations('HomePage')
    return (
        <div className="flex flex-col mx-auto text-balance gap-4">
            <h2 className="text-center text-3xl mb-2">{t("problems.title")}</h2>
            <ul className="flex flex-wrap justify-center gap-4 xs:[&>li]:max-w-[350px] sm:[&>li]:w-[48%] md:[&>li]:w-[36%] xl:[&>li]:w-[24%]">
                <li className="card">
                    <div>
                        <h3>{t("problems.1.title")}</h3>
                        <p>{t("problems.1.desc")}</p>
                    </div>
                    <div className="image-container">
                        <Image src={"/images/inconsistent-error.png"} width={400} height={200} alt=""/>
                    </div>
                </li>
                <li className="card">
                    <div>
                        <h3>{t("problems.2.title")}</h3>
                        <p>{t("problems.2.desc")}</p>
                    </div>
                    <div className="image-container">
                        <Image src={"/images/trycatch-mess.png"} width={400} height={200} alt=""/>
                    </div>
                </li>
                <li className="card">
                    <div>
                        <h3>{t("problems.3.title")}</h3>
                        <p>{t("problems.3.desc")}</p>
                    </div>
                    <div className="image-container">
                        <Image src={"/images/bad-logs.png"} width={400} height={200} alt=""/>
                    </div>
                </li>
                <li className="card">
                    <div>
                        <h3>{t("problems.4.title")}</h3>
                        <p>{t("problems.4.desc")}</p>
                    </div>
                    <div className="image-container">
                        <Image src={"/images/types-safety.png"} width={400} height={200} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProblemSection;