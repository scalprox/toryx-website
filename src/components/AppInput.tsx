import React from 'react';
import type {IconType} from "react-icons";


interface Props {
    label: string
    labelVisible?: boolean
    placeholder?: string
    id: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    icon?: IconType
    type?: HTMLInputElement["type"]
    loading?: boolean
}

const AppTextInput = (input: Props) => {
    return (
        <>
            <label className={`block text-neutral-200 text-sm font-medium ${input.labelVisible === false && "hidden"}`}
                htmlFor={input.id}>{input.label}</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {input.icon && <input.icon />}
                </div>
                <input className={`w-full bg-neutral-900 border font-cascadia text-xs font-light border-neutral-800 rounded-lg px-4 ${input.icon && "pl-12"} ${input.loading && "brightness-70"} z-0 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors transition-all`}
                    id={input.id}
                    type={input.type || "text"}
                    value={input.value}
                    onChange={input.onChange}
                    placeholder={input.placeholder}
                    disabled={input.loading === true} />
            </div>
        </>
    );
};

export default AppTextInput;