import React from 'react';

interface ButtonProps {
    textContent: string;
    onClick: () => void;
    type:HTMLButtonElement["type"];
}
const PrimaryButton = (btn:ButtonProps) => {
    return (
        <button className="bg-toryx-gradient border-1 border-primary-dark hover:border-primary font-medium hover:shadow-hovered px-4 py-1 rounded-lg transition-all" onClick={btn.onClick}>
            {btn.textContent}
        </button>
    );
};

export default PrimaryButton;