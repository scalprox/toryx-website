"use client"

import React from 'react';
import {FaCopy as CopyHover} from "react-icons/fa6";

interface Props {
    textContent: string;
}

const CommandBlock = ({textContent}: Props) => {
    const onCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className="flex mx-auto items-center gap-8 p-3 bg-background-light border-gradient border-toryx-gradient rounded-md shadow-neutral hover:shadow-hovered transition-all">
            <pre className="flex items-center gap-2 font-cascadia">
                <span className="font-normal select-none opacity-30">$</span>
                <code>
                    {textContent}
                </code>
            </pre>
            <button onClick={() => onCopy(textContent)} className="relative w-[18px] h-[18px]">
                    <span>
                        <CopyHover size={18} className="opacity-50 hover:opacity-100 transition-opacity" />
                    </span>
            </button>
        </div>
    );
};

export default CommandBlock;