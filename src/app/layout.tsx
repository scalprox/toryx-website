import {ReactNode} from 'react';
import {toryxInit} from "@toryx/core";

type Props = {
    children: ReactNode;
};

toryxInit();

export default function RootLayout({children}: Props) {
    return children;
}