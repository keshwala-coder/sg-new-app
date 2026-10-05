'use client';

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { RecoilRoot } from 'recoil';

const RecoilRootWrapper = ({ children }) => (
    <RecoilRoot>{children}</RecoilRoot>
);

export default RecoilRootWrapper;
