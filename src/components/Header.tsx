import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

const Header = () => {
    const t = useTranslations('base')

    return (
        <header className="fixed w-full z-10 flex justify-center top-2">
            <nav className="border border-gray-700/60 bg-background-light/70 backdrop-blur-sm rounded-4xl p-2 flex items-center justify-between w-full max-w-[800px]">
                <div>
                    <Link href={"/"} className="space-x-2 flex items-center" aria-label={t("homeLink")}>
                        <Image className="rounded-full" src={"/web-app-manifest-192x192.png"} alt="Toryx" width={50} height={50} />
                        <span className="font-barlow text-2xl">Toryx</span>
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    <Link className="bg-white rounded-full p-0.5 opacity-75 hover:opacity-100 transition-opacity" aria-label={t("npmLink")} href={"https://www.npmjs.com/package/@toryx/core"} target="_blank">
                        <Image className="rounded-full" src={"/icons/npm.svg"} alt="npm" width={30} height={30} />
                    </Link>
                    <Link className="bg-white rounded-full p-0.5 opacity-75 hover:opacity-100 transition-opacity" aria-label={t("gitHubLink")} href={"https://github.com/scalprox/toryx"} target="_blank">
                        <Image className="rounded-full" src={"/icons/github.svg"} alt="npm" width={30} height={30} />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;