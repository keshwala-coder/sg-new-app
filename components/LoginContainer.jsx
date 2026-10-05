"use client";

import Link from "next/link";
import style from "./styles.module.css";
import { useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userNameState } from "@/recoil/atoms/states";
import { fetchUserLoginDetails } from "@/lib/api/fetchReq";
import { userNameStateSelector } from "@/recoil/selectors/selectors";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function LoginContainer() {
  const userNameControl = useRef();
  const passwordControl = useRef();
  const [shouldFetch, setShouldFetch] = useState(false);
  let router = useRouter();
  const [message, setMessage] = useState("");
  const [errorMisMatch, setErrorMisMatch] = useState("hidden");
  const [error, setError] = useState({
    uName: "",
    passwordError: "",
  });
  const setUserName = useSetRecoilState(userNameState);
  const setUserNameValue = useRecoilValue(userNameStateSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userNameControls = userNameControl.current.value;
    const passwordControls = passwordControl.current.value;

    //setUserName(userNameControls);
    if (userNameControls !== "" && passwordControls !== "") {
      onSubmitForm(userNameControls, passwordControls) 
    } 

    userNameControls === ""
      ? setError((preState) => ({
          ...preState,
          uName: "Please enter your Username",
        }))
      : setError((preState) => ({ ...preState, uName: "" }));
    passwordControls === ""
      ? setError((preState) => ({
          ...preState,
          passwordError: "Please enter your password",
        }))
      : setError((preState) => ({ ...preState, passwordError: "" }));
  };

  const onSubmitForm = async (userNameControls, passwordControls) => {
    const fetchData = await fetchUserLoginDetails(
      `/register/${userNameControls}`
    );
    setShouldFetch(true);

    if (fetchData.registerUser) {
      const result = fetchData.registerUser;

      if (
        result.userName === userNameControls &&
        result.password === passwordControls
      ) {
        setUserName(result);
        setCookie("cookieUserName", JSON.stringify(result.fName), {
          maxAge: 60 * 10,
        });
        router.push("/workentitlement/visaVerificationEnquiry.aspx");
      } else {
        setErrorMisMatch("block");
        setShouldFetch(false);
      }
    } else {
      setErrorMisMatch("block");
      setShouldFetch(false);
    }
  };

  return (
    <>
      <div className={`bg-[#fcf3f3] ${errorMisMatch} text-[0.938rem] `}>
        <div
          className={`inner mx-5 md:mx-auto md:w-10/12 pt-[1.8125rem] pb-10 md:pr-14`}
        >
          <span
            className={`${style.bannerMessageIcon}`}
          ></span>
          <p className="leading-normal text-red-600 font-bold ml-8 mb-2">
            <span className="banner-message-title ">
              Your login attempt was unsuccessful.
            </span>
          </p>
          <p className="leading-normal">
            Please check your username or password.
            <br />
            If you are unable to log in, you can follow the "Forgot Username" or
            "Forgot Password" link below.
          </p>
        </div>
      </div>
      <div className={style.lcMain}>
        <div className="lcPage bg-white">
          <div className="lcInner mx-5 md:mx-auto md:w-10/12 pt-[1.8125rem] pb-10 md:pr-14">
            <div className="lcSplit flex">
              <div className="lcMobileSplit w-full md:w-6/12 md:pr-[3.875rem]">
                <h2 className="text-[#ff2c00] font-light text-4xl leading-tight mb-6">
                  Log in with
                  <b className="font-extrabold"> RealMe</b>
                </h2>
                <p className="details font-normal text-[0.938rem] my-6 md:hidden block">
                  To access this service you need a RealMe login.
                </p>
                <p className="details font-normal text-[0.938rem] my-6 hidden md:block">
                  You've been redirected here so you can log in with RealMe
                </p>
                <ul className="radio-list text-[0.938rem] block md:hidden">
                  <li className="mx-2 my-4">
                    <input
                      type="radio"
                      name="select-split-panel"
                      id="select-left"
                    />
                    <label htmlFor="select-left" className="pl-6 text=[0.938rem]">
                      I have an existing RealMe login
                    </label>
                  </li>
                  <li className="mx-2 my-4">
                    <input
                      type="radio"
                      name="select-split-panel"
                      id="select-right"
                    />
                    <label htmlFor="select-right" className="pl-6">
                      I need to create a login
                    </label>
                  </li>
                </ul>
                <div className="lcFormMain">
                  <form className={style.lcForm} onSubmit={handleSubmit}>
                    <div className={style.lcEntry}>
                      <div className={style.lcEntryItem}>
                        <input
                          type="text"
                          id="signInName"
                          name="Username"
                          placeholder=" "
                          ref={userNameControl}
                          className={`font-['inherit'] ${style.lcControl} ${style.lcInput}`}
                        />
                        <label htmlFor="signInName">Username</label>
                        <div
                          className="error itemLevel"
                          aria-hidden="true"
                          role="alert"
                        >
                          <p className="text-[0.938rem] text-[#c70000]">{error.uName}</p>
                        </div>
                      </div>
                      <div className={`${style.lcEntryItem} mt-4`}>
                        <div className="password-label"></div>

                        <input
                          type="password"
                          id="password"
                          name="Password"
                          placeholder=" "
                          ref={passwordControl}
                          className={`${style.lcControl} ${style.lcInput}`}
                        />
                        <label htmlFor="password">Password</label>
                        <div className="error itemLevel" aria-hidden="true">
                          <p role="alert" className="text-[0.938rem] text-[#c70000]">{error.passwordError}</p>
                        </div>
                        <div
                          id="capsLockMessage"
                          className="error"
                          style={{ display: "none" }}
                        >
                          Your caps lock key is on
                        </div>
                      </div>
                      <div
                        className={shouldFetch ? `${style.working} block` : 'hidden'}
                        // style={{ display: "none" }}
                      ></div>

                      <div className="buttons">
                        <button
                          id="next"
                          type="submit"
                          form="localAccountForm"
                          onClick={handleSubmit}
                          className={`${style.lcBtn} ${style.lcPrimary} ${style.lcBtnIcon}`}
                        >
                          <section>
                            <img
                              src="https://config.realme.govt.nz/b2c-ui/images/icons/RealMe_Face_Symbol_White.png"
                              alt="RealMe"
                              className={style.lcImgIcon}
                            />
                            <span>Log in</span>
                          </section>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="forgotUsernamePassword" className={`${style.forgotUNP} font-normal mt-6 text-[0.938rem]`}>
                  <button
                    className={`${style.accountButton} firstButton claims-provider-selection `}
                    id="LocalAccountForgotUsernameExchange"
                    
                  >
                    Forgot Username
                  </button>
                  <span> or </span>
                  <button
                    className={`${style.accountButton} claims-provider-selection`}
                    id="LocalAccountForgotPasswordExchange"
                   
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>
              <div className="splitPageRight md:w-6/12 hidden md:block md:pl-20 border-l-[1px] border-[#d1d1d1]">
                <div>
                  <div className="wrapper">
                    <h2 className="hideInMobile text-[#ff2c00] font-light text-4xl leading-tight mb-6">
                      Create a <b className="font-extrabold">RealMe </b>
                      login
                    </h2>
                    <p className="details my-6 hideInMobile font-normal text-[0.938rem]">
                      To access this service you need a RealMe login.
                    </p>
                    <p className=" font-normal text-[0.938rem]">
                      You'll be able to access a range of services with a single
                      username and password. RealMe is designed to protect your
                      privacy and security.
                    </p>
                  </div>
                  <div className="createButtonHolder">
                    <Link
                      id="createAccount"
                      href="/register"
                      className={`${style.lcBtn} ${style.lcPrimary} ${style.lcBtnIcon}`}
                    >
                      <img
                        src="https://config.realme.govt.nz/b2c-ui/images/icons/Right_Arrow_Icon_RealMe.png"
                        alt="Right Arrow"
                        className={style.lcImgIcon}
                      />
                      <span>Create a RealMe login</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
