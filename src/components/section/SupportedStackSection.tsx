import React from 'react';
import {useTranslations} from "next-intl";
import CodeBlock from "@/components/CodeBlock";
import {express} from "@/data/codeExample";
import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { LuFileType } from "react-icons/lu";


const SupportedStackSection = () => {
    const t = useTranslations('HomePage.supportedStack')

    return (
        <div className="p-4 flex flex-col mx-auto">
            <div>
                <h2 className="text-center text-3xl mb-2">{t("title")}</h2>
                <p className="text-center text-foreground-dark mb-10">{t("desc")}</p>
            </div>
            <div className="flex gap-6 mb-10">
                <div className="flex flex-col gap-6 flex-1 solution-card rounded-4xl max-w-[500px]">
                    <div className="flex items-center gap-2">
                        <Image src={"/icons/express.svg"} alt="Toryx ExpressJs" className="rounded-xl border-2 border-foreground" width={50} height={50} />
                        <h3 className="text-3xl">{t("tools.express.title")}</h3>
                    </div>
                    <p className="text-foreground-dark">{t("tools.express.desc")}</p>
                    <ul className="flex flex-wrap gap-6 xs:gap-10 lg:flex-col lg:gap-4 mt-4 justify-center items-stretch max-w-fit mx-auto">
                        <li className="flex bg-background-extra-light p-2 rounded-xl shadow-m items-center gap-2 font-medium"> <BsFillLightningChargeFill color="var(--toryx-blue)" size={20}/> {t("tools.express.arg1")}</li>
                        <li className="flex bg-background-extra-light p-2 rounded-xl shadow-m items-center gap-2 font-medium"> <LuFileType color="var(--background-extra-light)" fill="var(--toryx-blue)" size={20}/> {t("tools.express.arg2")}</li>
                        <li className="flex bg-background-extra-light p-2 rounded-xl shadow-m items-center gap-2 font-medium"> <IoShieldCheckmarkSharp color="var(--toryx-blue)" size={20}/> {t("tools.express.arg3")}</li>
                    </ul>
                </div>
                <CodeBlock code={express} classname="flex-1 max-w-fit hidden lg:block"/>
            </div>
            <div className="flex">
                <div className="flex-1 grid-cols-2 gap-12 items-center grid">
                    <Image className="mx-auto" src={"/icons/next.svg"} alt="Toryx NextJS" width={50} height={50}/>
                    <Image className="mx-auto" src={"/icons/nestjs.svg"} alt="Toryx NestJS" width={50} height={50}/>
                    <Image className="mx-auto" src={"/icons/fastify.svg"} alt="Toryx Fastify" width={50} height={50}/>
                    <Image className="mx-auto" src={"/icons/react.svg"} alt="Toryx React" width={50} height={50}/>
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl mb-2">Coming soon</h3>
                    <p>Want to be notified when your framework is supported?</p>
                    <form className="notify-form">
                        <input type="email" placeholder="your@email.com" required />
                        <button type="submit">Notify Me</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SupportedStackSection;