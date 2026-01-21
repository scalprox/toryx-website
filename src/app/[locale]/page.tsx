import {useTranslations} from "next-intl";
import CommandBlock from "@/components/CommandBlock";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BeforeAfter from "@/components/BeforeAfter";

export default function Home() {
    const t = useTranslations('HomePage')
    return (
        <main className="flex flex-col gap-34 min-h-screen items-center justify-center p-4 pt-50">
            <section className="">
                <div className="flex flex-col mx-auto text-balance w-full max-w-200 gap-4">
                    <h1 className="text-4xl text-center md:text-5xl">{t('heroTitle')}</h1>
                    <p className="text-sm text-foreground-dark text-center font-medium md:text-base">{t("heroSub")}</p>
                    <CommandBlock textContent="npm i @toryx/core" />
                </div>
            </section>
            <section className="p-1 bg-dark-radial">
                <ProblemSection/>
            </section>
            <section className="p-1">
                <SolutionSection/>
            </section>
            <section className="p-1">
                <BeforeAfter/>
            </section>
        </main>
    );
}
