"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { atom, selector, useSetRecoilState } from "recoil";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createCookies } from "@/app/action";
import { getCookie, setCookie } from "cookies-next";
import { fetcher } from "@/app/fetcher";
import useSWR from "swr";
import { userPassport } from "@/recoil/atoms/states";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function Form({ onSubmitForm, noMatchData, loadingState }) {
  const [error, setError] = useState({
    fName: "",
    passportNum: "",
    nationality: "",
    dob: "",
    gender: "",
    startDate: ""
  });

  //const [passportNumbers, SetPassportNumbers] = useState("");
  const [dnone, setDnone] = useState(`${styles.dnone}`);
  const [dob, setDob] = useState("");
  const [startDate, setStartDate] = useState("")

  const familyNameControl = useRef();
  const nationalityControl = useRef();
  const passportNumber = useRef();
  const gender = useRef();
  const datepick = useRef();
  const visadatepick = useRef()
  const setUserPass = useSetRecoilState(userPassport);
  let router = useRouter();

  const handleDateClick = () => {
    datepick.current.setFocus();
  };
  const handleVisaDateClick = () => {
    visadatepick.current.setFocus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const familyNameControls = familyNameControl.current.value;
    const nationalityControls = nationalityControl.current.value;
    const passportNumberRef = passportNumber.current.value;
    const genders = gender.current.value;

    familyNameControls === ""
      ? setError((preState) => ({ ...preState, fName: "Family Name Needed" }))
      : setError((preState) => ({ ...preState, fName: "" }));
    nationalityControls === ""
      ? setError((preState) => ({
        ...preState,
        nationality: "Nationality Needed",
      }))
      : setError((preState) => ({ ...preState, nationality: "" }));
    passportNumberRef === ""
      ? setError((preState) => ({
        ...preState,
        passportNum: "Passport Number Needed",
      }))
      : setError((preState) => ({ ...preState, passportNum: "" }));
    dob === ""
      ? setError((preState) => ({ ...preState, dob: "Date of Birth Needed" }))
      : setError((preState) => ({ ...preState, dob: "" }));
    genders === ""
      ? setError((preState) => ({ ...preState, gender: "Gender Needed" }))
      : setError((preState) => ({ ...preState, gender: "" }));
    startDate === ""
      ? setError((preState) => ({
        ...preState,
        startDate: "Start Date Needed",
      }))
      : setError((preState) => ({ ...preState, startDate: "" }));

   // setUserPass(passportNumberRef);
    let dobs = moment(dob).format("DD/MM/YYYY");
    let startDates = moment(startDate).format("DD/MM/YY");

    onSubmitForm(
      familyNameControls,
      nationalityControls,
      passportNumberRef,
      dobs,
      genders,
      startDates
    );
//    setUserPass(passportNumberRef);
  };

  return (
    <>
      {error.fName ||
        error.passportNum ||
        error.dob ||
        error.nationality ||
        error.gender ||
        error.startDate || noMatchData ? (
        <div className={styles.error}>
          <ul>
            {error.fName ? <li>{error.fName}</li> : <></>}
            {error.passportNum ? <li>{error.passportNum}</li> : <></>}
            {error.nationality ? <li>{error.nationality}</li> : <></>}
            {error.dob ? <li>{error.dob}</li> : <></>}
            {error.gender ? <li>{error.gender}</li> : <></>}
            {error.startDate ? <li>{error.startDate}</li> : <></>}
            {noMatchData ? <li>{noMatchData}</li> : <></>}
          </ul>
        </div>
      ) : (
        <></>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset className={styles.form}>
          <legend>Visa Verification Enquiry</legend>
          <div className={styles.div}>
            <label htmlFor="innerContainer_mainContent_FamilyNameControl">
              Family Name<span>*</span>
            </label>
            <input
              className={loadingState ? `${styles.animatedBackground}` : ""}
              name="FamilyNameControl"
              type="text"
              maxLength="50"
              id="FamilyNameControl"
              tabIndex="1"
              ref={familyNameControl}
            />
          </div>

          <div className={`${styles.hasButton} ${styles.div}`}>
            <label htmlFor="innerContainer_mainContent_NationalityControl">
              Passport Nationality<span>*</span>
            </label>
            <select
              className={loadingState ? `${styles.animatedBackground}` : ""}
              name="ctl00$ctl00$innerContainer$mainContent$NationalityControl"
              id="innerContainer_mainContent_NationalityControl"
              tabIndex="2"
              ref={nationalityControl}
            >
              <option value=""></option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua & Barbuda">Antigua &amp; Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia & Herzegovina">
                Bosnia &amp; Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Democratic Republic of Congo">Democratic Republic of Congo</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equitorial Guinea">Equitorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="European Commissio">European Commission</option>
              <option value="Faeroe Islands">Faeroe Islands</option>
              <option value="Federated States of Micronesi">Federated States of Micronesia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Great Britain">Great Britain</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea - Bissau">Guinea - Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Ivory Coast">Ivory Coast</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kosovo - Republic of">Kosovo - Republic of</option>
              <option value="Kosovo - UN Mission in">Kosovo - UN Mission in</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Korea">North Korea</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn Islands">Pitcairn Islands</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Serbia &amp; Montenegro">Serbia &amp; Montenegro</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Korea">South Korea</option>
              <option value="South Pacific commission">South Pacific commission</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Soviet Union">Soviet Union</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="St Kitts - Nevis">St Kitts - Nevis</option>
              <option value="St Lucia">St Lucia</option>
              <option value="St Vincent and the Grenadines">St Vincent and the Grenadines</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor Leste">Timor Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkemenistan">Turkemenistan</option>
              <option value="Turkey">Turkey</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Nations">United Nations</option>
              <option value="United States of America">United States of America</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City">Vatican City</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Yugoslavia">Yugoslavia</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>

          <div className={styles.div}>
            <label htmlFor="innerContainer_mainContent_PassportNumberControl">
              Passport Number<span>*</span>
            </label>
            <input
              name="PassportNumberControl"
              type="text"
              maxLength="15"
              id="innerContainer_mainContent_PassportNumberControl"
              tabIndex="3"
              className={loadingState ? `${styles.medium} ${styles.animatedBackground}` : `${styles.medium}`}
              ref={passportNumber}
              onChange={(e) => setUserPass(e.target.value)}  //SetPassportNumber(e.target.value)}
            />
          </div>

          <div className={`${styles.dob} ${styles.div}`}>
            <label htmlFor="innerContainer_mainContent_DateOfBirthControl">
              Date of Birth <br /> dd/mm/yyyy<span>*</span>
            </label>
            <div className={styles.datepicker}>
              <DatePicker dateFormat="dd/MM/yyyy" onChange={(date) => setDob(date)} selected={dob} wrapperClassName={styles.datePickerwrapper} className={loadingState ? `${styles.medium} ${styles.animatedBackground}` : `${styles.medium}`} ref={datepick} />
            </div>

            <Link href="#">
              <Image
                src="/images/icon-calendar.gif"
                id="innerContainer_mainContent_DatePickerControl1"
                alt="Select a date. "
                width={16}
                height={15}
                onClick={handleDateClick}
              />
            </Link>
          </div>

          <div className={`${styles.div}`}>
            <label htmlFor="innerContainer_mainContent_GenderControl">
              Gender<span>*</span>
            </label>
            <select
              name="ctl00$ctl00$innerContainer$mainContent$GenderControl"
              id="innerContainer_mainContent_GenderControl"
              tabIndex="5"
//              className={styles.small}
              className={loadingState ? `${styles.small} ${styles.animatedBackground}` : `${styles.small}`}
              ref={gender}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className={`${styles.dob} ${styles.div}`}>
            <label htmlFor="innerContainer_mainContent_VisaStartDateControl">
              Visa Start Date
              <br /> dd/mm/yy<span>*</span>
            </label>
            
            <div className={styles.datepicker}>
              <DatePicker preventOpenOnFocus="false" dateFormat="dd/MM/yy" onChange={(date) => setStartDate(date)} selected={startDate} wrapperClassName={styles.datePickerwrapper} className={ loadingState ? `${styles.medium} ${styles.animatedBackground}` : `${styles.medium}`} ref={visadatepick} />
            </div>

            <Link href="#">
              <Image
                src="/images/icon-calendar.gif"
                id="innerContainer_mainContent_DatePickerControl2"
                alt="Select a date. "
                width={16}
                height={15}
                onClick={handleVisaDateClick}
              />
            </Link>
          </div>

          <div className={`${styles.visaconsent} ${styles.div}`}>
            <input
              id="innerContainer_mainContent_chkVisaConsent"
              type="checkbox"
              name="ctl00$ctl00$innerContainer$mainContent$chkVisaConsent"
              tabIndex="8"
            />
            <label htmlFor="innerContainer_mainContent_chkVisaConsent">
              The visa holder has consented to this check.
            </label>
          </div>
        </fieldset>
        <div className={`${styles.buttons} ${styles.div}`}>
          <div>
            <span className={styles.btnCorner1}></span>
            <input
              type="submit"
              name="ctl00$ctl00$innerContainer$mainContent$CheckButton"
              value="Check Visa"
              id="innerContainer_mainContent_CheckButton"
              tabIndex="11"
            />
            <span className={styles.btnCorner2}></span>
            <div id="progressBar"></div>
          </div>
        </div>
      </form>
    </>
  );
}
