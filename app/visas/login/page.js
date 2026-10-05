import { Inter } from "next/font/google";
import LoginFooter from "@/components/LoginFooter"
import LoginHeader from "@/components/LoginHeader"
import LoginContainer from "@/components/LoginContainer";
import LoginBanner from "@/components/LoginBanner";
import ico from '../../../public/favicon.png';

export const metadata = {
    title: "RealMe - Login",
    icons: {
        icon: ['/favicon.png?v=1']
      },
  };

export default function Login() {
    return(
        <>
        <LoginHeader />
        <LoginBanner />
        <LoginContainer />
        <div className="bg-[#d64309] min-h-12">
            <LoginFooter />
        </div>
        </>
    )
}