import Link from "next/link";
import style from "./styles.module.css"
import { Inter } from "next/font/google";

export default function LoginFooter() {
  return (
    <footer className={`${style.footerLogin} py-5 md:py-14`}>
      <div className={`${style.footerInnerL} mx-5 md:mx-auto md:w-10/12`}>
        <nav className={`${style.footerNavL} flex flex-col md:flex-row md:flex-nowrap`}>
          <Link className={`${style.a} md:mr-12`} href="#">Help & contact us</Link>
          <Link className={`${style.a} md:mr-12`} href="#">Terms of use</Link>
          <Link className={`${style.a} md:mr-12`} href="#">Privacy</Link>
          <Link className={`${style.a} md:mr-12`} href="#">About this site</Link>
          <div id="langform" className="language-selector md:flex md:grow md:justify-end">
            <ul className="flex">
              <li>
                <Link
                  id="langEnglish"
                  className={`${style.a} inline-block mr-4`} href="#"
                >
                  <strong>English</strong>
                </Link>
              </li>
              <li>
                <Link
                  id="langChinese"
                  href="#"
                  className={`${style.a} inline-block mr-4`}
                >
                  中文
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
        <div className={style.copyright}>
          <span className="">© New Zealand Government.</span>
        </div>
      </div>
    </footer>
  );
}
