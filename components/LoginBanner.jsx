import Link from 'next/link';
import style from './styles.module.css';

export default function LoginBanner() {
  return (
    <div className={`${style.lcBannerMessage} info mt-[1rem] `}>
      <div className={`${style.innerLc} mx-5 md:mx-auto md:w-10/12 `}>
        <span className={`${style.lcBackIcon}`}></span>
        <Link
          id="realme-return-link"
          href="#"
          title="Go back to the Ministry of Business, Innovation and Employment"
          tabIndex="20"
          className={`linkStopDoubleClick ${style.lcReturnLink} ${style.a} `}
          data-realmebaseurl="https://www.realme.govt.nz"
        >
          Go back to the Ministry of Business, Innovation and Employment
        </Link>
      </div>
    </div>
  );
}
