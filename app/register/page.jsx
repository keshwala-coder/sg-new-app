import LoginBanner from "@/components/LoginBanner";
import LoginHeader from "@/components/LoginHeader";
import RegisterContainer from "@/components/RegisterContainer";

export const metadata = {
    title: "RealMe - create a login",
    icons: {
        icon: ['/favicon.png?v=1']
      },
  };

export default function Register() {
    return (
        <>
        <LoginHeader />
        <LoginBanner />
        <RegisterContainer />
        </>
    )
}