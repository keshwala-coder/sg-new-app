"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  LogIn,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Container from "./ui/Container";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Check Status",
    href: "/check-status",
  },
  {
    label: "Work Passes",
    href: "/work-passes",
  },
  {
    label: "Employment Practices",
    href: "/employment-practices",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export default function MainHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const showExtraLinks = pathname === "/check-status" || pathname.startsWith("/check-status/");

  // Prevent background page from scrolling when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menu when Escape is pressed
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    if (mobileOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="bg-white">
        <Container className="max-w-[1300px]" >
          <div className="flex min-h-[50px] items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="Ministry of Manpower home"
            >
              <Image
                src="/images/mom-logo.svg"
                alt="Ministry of Manpower"
                width={165}
                height={70}
                priority
                className=""
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex font-semibold text-[#444]">
              <Link
                href="/about-us"
                className="text-[15px] text-[#444] transition-colors hover:text-[#006da8] hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                About us
              </Link>

              {showExtraLinks ?
              <>
               <Link
                href="/work-passes"
                className="text-[15px] text-[#444] transition-colors hover:text-[#006da8] hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                Work passes
              </Link>

               <Link
                href="/employment-practices"
                className="text-[15px] text-[#444] transition-colors hover:text-[#006da8] hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                Employment practices
              </Link>
              </>
              : 
              <Link
                href="/check-status"
                className="text-[15px] text-[#444] transition-colors hover:text-[#006da8] hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                Check Status
              </Link>  }

              <Link
                href="https://www.mom.gov.sg/eservices/services/mymom-portal"
                className="flex min-h-[42px] items-center gap-2 rounded-full bg-[#f0f4f7] text-[#005e90] hover:bg-[#005e90] hover:text-white px-5 text-[15px] font-semibold transition-colors"
              >
                <LogIn
                  className="h-[20px] w-[20px]"
                  strokeWidth={2}
                />

                <span>myMOM Portal</span>
              </Link>

              <button
                type="button"
                aria-label="Search"
                className="flex h-11 w-11 items-center justify-center rounded-full text-[#006da8] transition-colors hover:bg-[#f2f5f7]"
              >
                <Search
                  className="h-7 w-7"
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-md text-[#006da8] transition hover:bg-[#f1f5f7] md:hidden"
            >
              <Menu
                className="h-7 w-7"
                strokeWidth={2}
              />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="
              absolute inset-0
              bg-black/40
              backdrop-blur-[4px]
            "
          />

          {/* Drawer */}
          <aside
            className="
              absolute
              right-0
              top-0
              flex
              h-dvh
              w-full
              max-w-[498px]
              flex-col
              bg-white
              shadow-2xl
              animate-[slideIn_250ms_ease-out]
              sm:w-[50%]
            "
            aria-label="Mobile navigation"
          >
            {/* Drawer Header */}
            <div className="flex h-[87px] shrink-0 items-center justify-between border-b border-[#222222] px-6">
              <h2 className="text-[25px] font-bold text-[#006da8]">
                Menu
              </h2>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  text-[#111111]
                  transition
                  hover:bg-gray-100
                "
              >
                <X
                  className="h-7 w-7"
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    min-h-[72px]
                    items-center
                    justify-between
                    border-b
                    border-[#333333]
                    px-6
                    text-[18px]
                    font-medium
                    text-[#333333]
                    transition
                    hover:bg-[#f5f8fa]
                  "
                >
                  <span>{item.label}</span>

                  <ChevronRight
                    className="h-5 w-5 shrink-0"
                    strokeWidth={2}
                  />
                </Link>
              ))}

              {/* Login */}
              <div className="px-6 pt-10">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    min-h-[66px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[10px]
                    bg-[#006da8]
                    px-5
                    text-[18px]
                    font-bold
                    text-white
                    shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                    transition
                    hover:bg-[#005b8e]
                    active:scale-[0.99]
                  "
                >
                  <LogIn
                    className="h-6 w-6"
                    strokeWidth={2}
                  />

                  <span>Login to myMOM Portal</span>
                </Link>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}