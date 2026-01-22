"use client"

import React from 'react';
import ShikiHighlighter from "react-shiki";

const CodeBlock = ({code, classname}: { code: string, classname?:string }) => {
    return (
        <ShikiHighlighter language="tsx" theme={"kanagawa-wave"} className={` ${classname}`}>
            {code.trim()}
        </ShikiHighlighter>
    );
};

export default CodeBlock;