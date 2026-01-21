"use client"

import React from 'react';
import ShikiHighlighter from "react-shiki";

const CodeBlock = ({code}: { code: string }) => {
    return (
        <ShikiHighlighter language="tsx" theme={"ayu-dark"} className="max-h-150 overflow-auto">
            {code.trim()}
        </ShikiHighlighter>
    );
};

export default CodeBlock;