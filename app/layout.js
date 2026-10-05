import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Immigration New Zealand",
  description: "Immigration New Zealand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
