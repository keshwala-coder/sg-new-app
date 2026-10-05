import style from './styles.module.css';
import realnz from '../public/images/realme-header-logo-dark.png'
import Image from 'next/image';
import agencyImg from '../public/images/nzLogin.png';
export default function LoginHeader() {
    return(
        <header className="bg-black">
            <div className={`mx-auto md:mx-auto w-11/12 md:w-10/12 ${style.loginHeaderMain} h-16 md:h-28 `}>
                <Image alt="rlNz" src={realnz} className={`${style.realImglogo} w-36 sm:w-48 md:w-72 mr-4`} />
                <div className={`${style.agencyLogo} h-9 md:h-16`}>
                    <Image alt="agencyLogo" src={agencyImg} className={`${style.agencyLogoImg} w-24 sm:w-40 max-w-24 md:max-w-36`} />
                </div>
            </div>
        </header>
    )
}