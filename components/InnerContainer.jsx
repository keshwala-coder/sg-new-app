"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import Form from "./Form";
import { useEffect, useState } from "react";
import { createCookies } from "@/app/action";
import { setCookie } from "cookies-next";
import { fetcher } from "@/app/fetcher";
import useSWR from "swr";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { userPassport, userState } from "@/recoil/atoms/states";
import { userPassportStateSelector } from "@/recoil/selectors/selectors";
import SideView from "./SideView";
import Login from "./Login";
import LeftLogin from "./LeftLogin";
import { fetchItemDetails } from "@/lib/api/fetchReq";
import apiUrl from "@/lib/api/apiUrl";

export default function InnerContainer() {
  const [message, setMessage] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [passportNumber, SetPassportNumber] = useState('');
  const [data, setData] = useState({});
  const setUsers = useSetRecoilState(userState);
  const setUserPass = useSetRecoilState(userPassport);
  let router = useRouter();
  const passportRecoilValue = useRecoilValue(userPassportStateSelector);

  const onSubmitForm = async (
    familyNameControls,
    nationalityControls,
    passportNumbers,
    dobs,
    genders,
    startDates
  ) => {
    //SetPassportNumber(passportNumbers);
    
    let fetchData = await fetchItemDetails(passportRecoilValue);
    setShouldFetch(true);

    if (fetchData.user) {
      const result = fetchData.user;
      if (
        result.familyName.toUpperCase() === familyNameControls.toUpperCase() &&
        result.passportNationality === nationalityControls &&
        result.passportNumber === passportNumbers &&
        result.dob === dobs &&
        result.gender === genders &&
        result.visaStartDate === startDates
      ) {
        setUsers(fetchData.user);
        const cookieJson = fetchData.user;
        setCookie("cookieKey", JSON.stringify(fetchData.user), {maxAge: 60*10 });
        setCookie("pKey", JSON.stringify(result.passportNumber), {maxAge: 60*10 });
        router.push("/workentitlement/visaVerificationEnquiry.aspx/historyId");
      } else {
        setMessage("The details you have entered do not match a current visa issued by INZ. Please check the information provided.");
      }
    } else {
      setMessage("Record not found or The details you have entered do not match a current visa issued by INZ. Please check the information provided.");
    }
  };

  const login2 = {
    login: "login",
    firstLogin: "firstLogin",
  };
  return (
    <div className={styles.innercontainer}>
      <SideView />
      <Login />
      <LeftLogin />
      <div className={styles.content}>
        <h1>Visa Verification Enquiry</h1>

        <p></p>

        <div>
          <span>Enter the details of the visa to be verified.</span>
          <a
            id="innerContainer_mainContent_HelpLink1"
            href="https://www.immigration.govt.nz/formshelp/visaview/vvs-search-tips"
            style={{ position: "absolute", marginLeft: "220px" }}
          >
            Can't find your visa?
          </a>
        </div>
        <br />
        <div>
          Please enter these details exactly as they appear in the visa holder's
          current passport.
        </div>

        <p>&nbsp;</p>

        <Form onSubmitForm={onSubmitForm} noMatchData={message} loadingState={shouldFetch} />
      </div>
    </div>
  );
}
