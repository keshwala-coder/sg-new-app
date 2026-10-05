"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { getPNumCookies } from "@/app/action";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie, getCookies, hasCookie } from "cookies-next";
import { fetcher } from "@/app/fetcher";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import moment from "moment";
import SideView from "./SideView";
import Login from "./Login";
import LeftLogin from "./LeftLogin";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userStateSelector } from "@/recoil/selectors/selectors";
import { userState } from "@/recoil/atoms/states";
import { fetchItemDetails } from "@/lib/api/fetchReq";

export default function InnerContainerDetails() {
  const [userData, setUserData] = useState({
    dateF: "",
    firstName: "",
    familyName: "",
    dob: "",
    gender: "",
    visaType: "",
    visaStartDate: "",
    firstEntryBefore: "",
    passportNationality: "",
    passportNumber: "",
    clientNumber: "",
    visaExpiryDate: "",
    numberOfEntries: "",
    expiryDate: "",
    pdfLink: "",
    enquiryDate: "",
    validAsAt: "",
  });
  const [dateF, setDateF] = useState("");
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [visaType, setVisaType] = useState("");
  const [visaStartDate, setVisaStartDate] = useState("");
  const [firstEntryBefore, setFirstEntryBefore] = useState("");
  const [passportNationality, setPassportNationality] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [visaExpiryDate, setVisaExpiryDate] = useState("");
  const [numberOfEntries, setNumberOfEntries] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [pdfLink, setPdfLink] = useState("#");
  const [enquiryDate, setEnquiryDate] = useState("");
  const [validAsAt, setValidAsAt] = useState("");
  const [visaCondition, setVisaCondition] = useState("");
  const [reEntryDate, setReEntryDate] = useState("");
  const userRecoilValue = useRecoilValue(userStateSelector);
  const [data, setData] = useState();
  const [shouldFetch, setShouldFetch] = useState(false);
  const [designationInCity, setDesignationInCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salary, setSalary] = useState("")
  let router = useRouter();
  const setUsers = useSetRecoilState(userState);

  let datenow = moment(new Date()).format("DD/MM/YYYY");
  let workVisaCond =
    `Financial support evidence not required..May not be placed in a triangular employment arrangement with a controlling third party..Must be paid at or above $ ${salary === "" || salary === null ? 29.66 : salary} .Must provide evidence of remuneration if requested..Return/onward ticket not required..Stay subject to grant of entry permission..The holder may only work as ${designationInCity} for ${companyName}. The holder of this visa must comply with any instruction from a Medical Officer of Health which relates to a notifiable or quarantinable disease..The holder of this visa must comply with any order made under section 11 of the COVID-19 Public Health Response Act 2020..The holder of this visa must comply with any order made under section 70 of the Health Act 1956 and listed in schedule 2 of the COVID-19 Public He..`;
  let visitorVisaCond = `On each entry into New Zealand you can stay up to 6 months at a time..Stay subject to grant of entry permission..The holder of this visa must comply with any instruction from a Medical Officer of Health which relates to a notifiable or quarantinable disease..The holder of this visa must comply with any order made under section 11 of the COVID-19 Public Health Response Act 2020. The holder of this visa must comply with any order made under section 70 of the Health Act 1956 and listed in schedule 2 of the COVID-19 Public Health Response Act 2020..The holder shall not study for more than 3 months in every 12 month period in NZ. .The holder shall not undertake employment in NZ..The last date you may travel and re-enter New Zealand is ${reEntryDate}..The start date of this visa is ${dateF}`;

  const fetchData = async (passportCookieValue) => {
    let fetchDatas = await fetchItemDetails(passportCookieValue);
    setUsers(fetchDatas.user);
    let result =
      Object.keys(userRecoilValue).length === 0
        ? fetchDatas.user
        : userRecoilValue;
    var date1 = moment(result.visaStartDate, "DD-MM-YYYY").format(
      "Do MMMM YYYY"
    );
    let reEntryExpDate = moment(result.visaExpiryDate, "DD-MM-YYYY").format(
      "Do MMMM YYYY"
    );
    let resultGender = result.gender.substring(0, 1);
    //let resultGender= resultGenders.substring(0, 1);
    setDateF(date1);
    setReEntryDate(reEntryExpDate);

    if (result.visaType === "Work") {
      setVisaCondition(workVisaCond);
    } else {
      setVisaCondition(visitorVisaCond);
    }

    setFirstName(result.firstName);
    setFamilyName(result.familyName);
    setDob(result.dob);
    setGender(resultGender);
    setVisaType(result.visaType);
    setVisaStartDate(result.visaStartDate);
    setFirstEntryBefore(result.firstEntryBefore);
    setPassportNationality(result.passportNationality);
    setPassportNumber(result.passportNumber);
    setClientNumber(result.clientNumber);
    setVisaExpiryDate(result.visaExpiryDate);
    setNumberOfEntries(result.numberOfEntries);
    setExpiryDate(result.expiryDate);
    setPdfLink(result.pdfLink);
    setEnquiryDate(datenow);
    setValidAsAt(datenow);
    setDesignationInCity(result.designationInCity);
    setCompanyName(result.companyName);
    setSalary(result.salary);

    return fetchDatas;
  };

  const lenValue = Object.keys(userRecoilValue).length

  useEffect(() => {
    //setData(userRecoilValue);
    const cookie = getCookie("cookieKey");
    const pCookie = getCookie("pKey");

    let hasCookieExp = hasCookie("cookieKey");
    let hasPCookieExp = hasCookie("pKey");
    let ObjectLength = Object.keys(userRecoilValue).length;

    if (!hasCookieExp) {
      deleteCookie("cookieKey");
      router.push("/workentitlement/visaVerificationEnquiry.aspx");
    } else {
      const passportCookieValue = JSON.parse(pCookie);
      
      fetchData(passportCookieValue);
      lenValue===0 ? setShouldFetch(true) : setShouldFetch(false);
      //const result = fetchData(passportCookieValue)
      //console.log(result)
      /* let result = JSON.parse(cookie);
      var date1 = moment(result.visaStartDate, "DD-MM-YYYY").format(
        "Do MMMM YYYY"
      );
      let reEntryExpDate = moment(result.visaExpiryDate, "DD-MM-YYYY").format(
        "Do MMMM YYYY"
      )
      setDateF(date1);
      setReEntryDate(reEntryExpDate);
      //}

      //if (result && hasCookieExp===true ){

      // let result = data.user;
      let resultGender = result.gender.substring(0, 1);
      if (result.visaType === "Work") {
        setVisaCondition(workVisaCond);
      } else {
        setVisaCondition(visitorVisaCond);
      }

      setFirstName(result.firstName);
      setFamilyName(result.familyName);
      setDob(result.dob);
      setGender(resultGender);
      setVisaType(result.visaType);
      setVisaStartDate(result.visaStartDate);
      setFirstEntryBefore(result.firstEntryBefore);
      setPassportNationality(result.passportNationality);
      setPassportNumber(result.passportNumber);
      setClientNumber(result.clientNumber);
      setVisaExpiryDate(result.visaExpiryDate);
      setNumberOfEntries(result.numberOfEntries);
      setExpiryDate(result.expiryDate);
      setPdfLink(result.pdfLink);
      setEnquiryDate(datenow);
      setValidAsAt(datenow); */
    }
  }, [dateF, reEntryDate]);

  return (
    <div className={styles.innercontainer}>
      <SideView />
      <Login />
      <LeftLogin />
      {/*<div className={styles.mainNav}>
        <ul>
          <li>
            <Link href="">VisaView</Link>

            <ul>
              <li></li>
              <li>
                <Link href="">Register Organisation</Link>
              </li>
              <li>
                <Link href="">Verify Visa Record</Link>
              </li>
              <li>
                <Link href="">My Visa Verification Service Account</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <div>
          <span id="innerContainer_loginLabel" className={styles.fauxLabel}>
            Logged in as:
          </span>
          <span id="innerContainer_CurrentRepresentativeName">
            Manish Kumar
          </span>
          <Link id="innerContainer_logoutLinkControl" href="https://www.immigration.govt.nz/about-us/our-online-systems/visaview">
            logout
          </Link>
        </div>
      </div>
      <div
        id="innerContainer_LoggedInDiv2"
        className={`${styles.login} ${styles.firstLogin}`}
      >
        <div>
          <span className={styles.fauxLabel}>Acting for:</span>
          <span
            id="innerContainer_CurrentEmployer"
            className={styles.firstLoginFont}
          >
            Visa Verification Service
          </span>
        </div>
      </div> */}
      <div className={styles.content}>
        <h1>Visa Verification Result</h1>
        <h2>Result</h2>

        <p>
          The visa has been verified successfully using the details you
          provided. See below for the full conditions of the visa.
        </p>
        <p>
          Visa Verification Service checks are valid for the date stated on the
          enquiry result. Visa information may change.
        </p>
        <p>
          All dates given are in New Zealand time. Where a person is not yet in
          New Zealand, any visa they hold may be subject to the grant of entry
          permission.
        </p>
        <h2>Visa Details</h2>

        <div className={styles.form}>
          <div
            id="innerContainer_mainContent_leftColumn"
            className={`${styles.column} ${styles.div}`}
          >
            <div>
              <span className={styles.fauxLabel}>Family, First Name</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>
                {familyName}, {firstName}
              </span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Date of Birth</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{dob}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Gender</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{gender}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Passport Nationality</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{passportNationality}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Passport Number</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{passportNumber} </span>
            </div>
            <div>
              <span className={styles.fauxLabel}>INZ Client Number</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{clientNumber}</span>
            </div>
          </div>
          <div
            id="innerContainer_mainContent_rightColumn"
            className={`${styles.column} ${styles.div}`}
          >
            <div>
              <span className={styles.fauxLabel}>Visa Type</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{visaType}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Visa Start Date</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{visaStartDate}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>First Entry Before</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{firstEntryBefore}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Number of Entries</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{numberOfEntries}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Expiry Date Travel</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{visaExpiryDate}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Visa Expiry</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{expiryDate}</span>
            </div>
          </div>
          <div id="innerContainer_mainContent_bottomRow" className={styles.div}>
            <div>
              <span className={styles.fauxLabel}>Visa Conditions</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForVC}` : ""}>{visaCondition}</span>
            </div>
            <div>
              <span className={styles.fauxLabel}>Enquiry Date</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{enquiryDate}</span>
            </div>
            <div className={`clear-both`}>
              <span className={styles.fauxLabel}>Valid as at</span>
              <span className={shouldFetch ? `${styles.animatedBackground} ${styles.animatedBackgroundForD}` : ""}>{validAsAt}</span>
            </div>
          </div>
        </div>
        <div>
          <span>
            <strong>Warning: </strong> if you download this visa information,
            you must ensure that you treat the personal information it contains
            in accordance with the Privacy Act 2020, including with respect to
            storage, access, disclosure to third parties, retention and
            disposal.
          </span>
          <div
            id="innerContainer_mainContent_divDownloadHistory"
            className={styles.buttons}
          >
            <div>
              <span className={styles.btnCorner1}></span>
              <Link
                name="ctl00$ctl00$innerContainer$mainContent$btnDownloadHistory"
                id="innerContainer_mainContent_btnDownloadHistory"
                tabIndex="9"
                target="_blank"
                download="visa"
                href={pdfLink !== null ? pdfLink : "#"}
              >
                Download Result{" "}
              </Link>
              <span className={styles.btnCorner2}></span>
            </div>
          </div>
          <p>
            <a
              id="innerContainer_mainContent_HelpLink1"
              href="https://www.immigration.govt.nz/formshelp/visaview/understanding-the-answer"
            >
              Questions about this result?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
