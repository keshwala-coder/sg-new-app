"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckStatus() {
  const [selected, setSelected] = useState("status");
  const router = useRouter();

  return (
    <div className=" bg-[#f7f9fa] font-sans pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6 px-4 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl text-[#333] font-normal">
            Check a Work Pass
          </h1>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto max-w-4xl px-4 mt-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1080px] rounded-md border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="mb-8 text-xl font-bold text-black sm:text-2xl">
            I want to check:
          </h2>

          {/* Options */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7">
            {/* Pass Status */}
            <button
              type="button"
              onClick={() => setSelected("status")}
              className={`flex min-h-[102px] items-center rounded-md border-2 px-4 py-2 text-left transition sm:px-6 sm:py-2 ${
                selected === "status"
                  ? "border-[#ff8c00] bg-[#fffcf5]"
                  : "border-gray-300 bg-white hover:border-[#ffb347]"
              }`}
            >
              <div
                className={`mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${
                  selected === "status"
                    ? "border-[#ff8c00] text-[#ff8c00]"
                    : "border-gray-400 text-gray-500"
                }`}
              >
                <UserIcon />
              </div>

              <span className="text-base font-bold text-gray-900 sm:text-lg">
                Pass status
              </span>
            </button>

            {/* Salary */}
            <button
              type="button"
              onClick={() => setSelected("salary")}
              className={`flex min-h-[112px] items-center rounded-md border-2 px-4 py-2 text-left transition sm:px-6 sm:py-2 ${
                selected === "salary"
                  ? "border-[#ff8c00] bg-[#fffcf5]"
                  : "border-gray-300 bg-white hover:border-[#ffb347]"
              }`}
            >
              <div
                className={`mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${
                  selected === "salary"
                    ? "border-[#ff8c00] text-[#ff8c00]"
                    : "border-gray-400 text-gray-500"
                }`}
              >
                <DollarIcon />
              </div>

              <div>
                <span className="block text-base font-bold text-gray-900 sm:text-lg">
                  Salary
                </span>

                <span className="mt-0.5 block text-sm leading-5 text-gray-500 sm:text-base">
                  (Only for Work Permit holders within In-Principle
                  Approvals)
                </span>
              </div>
            </button>
          </div>

          {/* Terms */}
          <p className="mt-10 text-sm sm:text-sm text-gray-600">
            By continuing, you agree to be bound by the{" "}
            <a
              href="#"
              className="text-[#005e90] hover:underline"
            >
              Terms and Conditions
            </a>{" "}
            of this eService.
          </p>

          {/* Start */}
          <button
            type="button"
            onClick={() => router.push("/check-status/form")}
            className="mt-7 rounded-[3px] bg-[#ffc107] px-6 py-2 text-base font-bold text-black shadow-sm transition  hover:bg-[#ffb300] focus:outline-none focus:ring-2 focus:ring-[#ffbd00] focus:ring-offset-2"
          >
            Start
          </button>
        </div>
      </section>
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="3.5" />
      <path d="M5.5 20c.4-4 2.5-6 6.5-6s6.1 2 6.5 6" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v20" />
      <path d="M17 6.5c-.8-1-2.2-1.5-4-1.5h-1.2C9.7 5 8 6.5 8 8.5S9.7 12 11.8 12h.4c2.1 0 3.8 1.5 3.8 3.5S14.3 19 12.2 19H11c-1.8 0-3.2-.5-4-1.5" />
    </svg>
  );
}
