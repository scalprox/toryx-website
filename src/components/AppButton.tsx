import React from 'react';

interface ButtonProps {
    textContent: string;
    onClick: () => void;
    type:HTMLButtonElement["type"];
    disabled?: boolean;
}
const PrimaryButton = (btn:ButtonProps) => {
    return (
        <button disabled={btn.disabled} className="bg-toryx-gradient border-1 border-primary-dark enabled:hover:border-primary font-medium enabled:hover:shadow-hovered px-4 py-1 rounded-lg transition-all disabled:opacity-50 disabled:cursor-default!" onClick={btn.onClick}>
            {btn.textContent}
        </button>
    );
};

export default PrimaryButton;