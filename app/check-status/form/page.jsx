"use client";

import { useRef, useState } from "react";
import FormDetail from "@/components/FormDetail";
import { fetchCheckStatusDetails, fetchItemDetails } from "@/lib/api/fetchReq";
// import { userPassport } from "@/Recoil/atoms/states";
// import { userPassportStateSelector } from "@/Recoil/selectors/selectors";
import moment from "moment";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import authAxios from "@/lib/api/request";

// type UserData = {
//   id: string;
//   fullName: string;
//   nationality: string;
//   status: string;
//   passType: string;
//   occupation: string;
//   passportNumber: string;
//   dob: string;
//   employer: string;
//   dateOfApplication: string;
//   dateOfExpiry: string;
//   pdfLink?: string;
// };


export default function FormPage() {
  const [userPass, setUserPass] = useState("");
  const [dob, setDob] = useState("");
  const [pdfLink, setPdfLink] = useState("#");

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const onSubmitForm = async (e) => {
    e.preventDefault();
    // const passportNumberRef = passportNumber.current.value;
    let dobs = moment(dob).format("DD/MM/YYYY");
    if (!userPass || !dobs) {
       setError("Please enter your passport number and date of birth.");
       return;
     }

     try {
        setLoading(true);
        // let fetchData = await fetchItemDetails(userPass, dobs);
        // let fetchData = await fetchCheckStatusDetails(userPass, dobs);
         const fetchData = await authAxios().post("/checkstatus", {
      passportNumber: userPass,
      dob: dobs,
    });

        setUserData(fetchData.data.user);
     }catch(error){
        setError("No record found. Please check your details and try again")
     }finally {
        setLoading(false)
     }
}

const handleClear = () => {
    setUserData(null);
    setUserPass("");
    setDob("")
  };


  return (
    <>
        <div className="flex-grow">
            {userData ? 
            <div className="mt-8">
              <FormDetail userData={userData} onClear={handleClear} />
            </div>
            : 
            <div className="min-h-screen bg-[#f3f9fc] font-sans pb-20 pt-10">
                <div className="container mx-auto max-w-2xl px-4">
                    <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
                         
                        <div className="bg-[#005e90] p-6  text-center text-white sm:px-6 sm:py-6">
            {/* Shield icon */}
            <div className="mb-4 flex justify-center">
                <ShieldIcon />
            </div>
            <h1 className="text-2xl font-bold uppercase tracking-tight sm:text-2xl">
                CHECK VISA STATUS
            </h1>
            <p className="mt-1 sm:text-sm text-blue-100 text-sm">
                Ministry of Manpower Verification Portal
            </p>
            </div>

            {/* Form */}
            <form
            onSubmit={onSubmitForm}
            className="px-6 py-10 sm:px-10 sm:py-12"
            >
            {/* Passport */}
            <div>
                <label
                htmlFor="passport"
                className="mb-1.5 block text-sm font-bold text-[#5b6b7c]"
                >
                PASSPORT / FIN NUMBER
                </label>

                <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <UserIcon />
                </div>

                <input
                    id="passport"
                    name="PassportNumberControl"
                    type="text"
                    // ref={passportNumber}
                    // value={passportRecoilValue}
                    onChange={(e) => setUserPass(e.target.value)}
                    placeholder="Enter Passport Number"
                    className="h-[52px] w-full rounded-md border border-[#cbd3dc] bg-white pl-[50px] pr-4 text-lg text-gray-800 outline-none transition placeholder:text-[#667085] focus:border-[#086494] focus:ring-1 focus:ring-[#086494]"
                />
                </div>
            </div>

            {/* Date of Birth */}
            <div className="mt-9">
                <label
                htmlFor="dob"
                className="mb-1.5 block text-sm font-bold text-[#5b6b7c]"
                >
                DATE OF BIRTH
                </label>

                <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-4 z-10 flex items-center">
                    <CalendarIcon />
                </div>

                <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="h-[52px] w-full rounded-md border border-[#cbd3dc] bg-white px-[50px] text-lg text-gray-800 outline-none transition focus:border-[#086494] focus:ring-1 focus:ring-[#086494]"
                />
                </div>
            </div>

            {/* Verify button */}
            <button
                type="submit"
                className="mt-8 flex h-[55px] w-full items-center justify-center gap-3 rounded-md bg-[#ff9418] text-base font-bold text-black shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition hover:bg-[#f58b10] focus:outline-none focus:ring-2 focus:ring-[#ff9418] focus:ring-offset-2 active:scale-[0.99] sm:text-lg"
            >
                
                {loading ? <> <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-spin"
  >
    <path d="M21 12a9 9 0 1 1-2.64-6.36" />
    <path d="M21 3v6h-6" />
  </svg> VERIFYING... </> : <><SearchIcon />  VERIFY RECORD </>}
            </button>

            {error && (
                <div className="mt-5 rounded-md border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-400">
                  {error}
                </div>
              )}
            </form>
                    </div>
                </div>
            </div>
            }
            

            {/* {userData && (
                
            <div className="mt-8">
              <FormDetail userData={userData} />
            </div>
          )} */}
        </div>
        {/* 
        <div className="min-h-screen bg-[#f3f8fb] px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto w-full max-w-[800px] overflow-hidden rounded-md bg-white shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
            {/* Header 
            <div className="bg-[#086494] px-5 py-8 text-center text-white sm:px-8 sm:py-9">
            {/* Shield icon 
            <div className="mb-4 flex justify-center">
                <ShieldIcon />
            </div>

            <h1 className="text-2xl font-bold sm:text-2xl">
                CHECK VISA STATUS
            </h1>

            <p className="mt-1 sm:text-sm text-blue-100 text-sm">
                Ministry of Manpower Verification Portal
            </p>
            </div>

            {/* Form 
            <form
            onSubmit={handleSubmit}
            className="px-6 py-10 sm:px-10 sm:py-12"
            >
            {/* Passport 
            <div>
                <label
                htmlFor="passport"
                className="mb-1.5 block text-sm font-bold text-[#5b6b7c]"
                >
                PASSPORT / FIN NUMBER
                </label>

                <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                    <UserIcon />
                </div>

                <input
                    id="passport"
                    name="passport"
                    type="text"
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    placeholder="Enter Passport Number"
                    className="h-[62px] w-full rounded-md border border-[#cbd3dc] bg-white pl-[50px] pr-4 text-lg text-gray-800 outline-none transition placeholder:text-[#667085] focus:border-[#086494] focus:ring-1 focus:ring-[#086494]"
                />
                </div>
            </div>

            {/* Date of Birth 
            <div className="mt-9">
                <label
                htmlFor="dob"
                className="mb-1.5 block text-sm font-bold text-[#5b6b7c]"
                >
                DATE OF BIRTH
                </label>

                <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-4 z-10 flex items-center">
                    <CalendarIcon />
                </div>

                <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="h-[62px] w-full rounded-md border border-[#cbd3dc] bg-white px-[50px] text-lg text-gray-800 outline-none transition focus:border-[#086494] focus:ring-1 focus:ring-[#086494]"
                />
                </div>
            </div>

            {/* Verify button 
            <button
                type="submit"
                className="mt-8 flex h-[65px] w-full items-center justify-center gap-3 rounded-md bg-[#ff9418] text-base font-bold text-black shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition hover:bg-[#f58b10] focus:outline-none focus:ring-2 focus:ring-[#ff9418] focus:ring-offset-2 active:scale-[0.99] sm:text-lg"
            >
                <SearchIcon />
                VERIFY RECORD
            </button>
            </form>
        </div>
        </div> */}
    </>
  );
}

/* ---------------- Icons ---------------- */

function ShieldIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      aria-hidden="true"
    >
      <path d="M12 3l7 3v5.5c0 4.8-3 8-7 9.5-4-1.5-7-4.7-7-9.5V6l7-3z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#9aa7b8]"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.4-4.1 2.5-6.3 6.5-6.3s6.1 2.2 6.5 6.3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#9aa7b8]"
      aria-hidden="true"
    >
      <rect x="3" y="4.5" width="18" height="17" rx="2" />
      <path d="M16 2.5v4M8 2.5v4M3 9h18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="10.8" cy="10.8" r="7" />
      <path d="m16 16 5 5" />
    </svg>
  );
}
