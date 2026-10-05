"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Handshake,
  CircleAlert,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const tabs = [
  {
    id: "new",
    label: "What's new",
  },
  {
    id: "popular",
    label: "Popular eServices",
  },
];

const highlights = [
  {
    title: "Platform Workers Act",
    href: "/platform-workers-act",
    icon: Handshake,
  },
  {
    title: "Updated List of Occupational Diseases",
    href: "/occupational-diseases",
    icon: CircleAlert,
  },
];

const usefulLinks = [
  {
    title: "Employment Act Part IV self-assessment tool",
    href: "/employment-act-self-assessment",
  },
  {
    title: "Who should I contact if I have salary disputes?",
    href: "/salary-disputes",
  },
  {
    title: "Complementarity Assessment Framework (COMPASS)",
    href: "/compass",
  },
];

const featuredCards = [
  {
    title: "MOM Committee of Supply 2025",
    description:
      "Partnering Businesses and Workers to Seize Opportunities",
    image: "/images/highlights/committee-supply.png",
    href: "/committee-of-supply",
  },
  {
    title: "Beware of scammers",
    description:
      "pretending to be government officials",
    image: "/images/highlights/scammers.png",
    href: "/scam-awareness",
  },
  {
    title: "Video surveillance system for",
    description: "construction sector",
    image: "/images/highlights/video-surveillance.png",
    href: "/video-surveillance",
  },
];

export default function Highlights() {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <section className="bg-[#f1f8fc] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-6 lg:px-8">
        {/* =========================================
            SECTION HEADING
        ========================================== */}
        <div className="border-b border-[#b9dced] pb-3">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center">
              <span className="text-[27px] text-[#b49fc0]">
                🔗
              </span>
            </div>

            <h2 className="text-2xl font-normal leading-none text-[#444] sm:text-[30px] lg:text-[32px]">
              Highlights
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 text-[14px] leading-6 text-[#285577] sm:text-[15px]">
          Find out about recent highlights and eServices you might find useful.
        </p>

        {/* =========================================
            TABS
        ========================================== */}
        <div
          className="
            mt-7
            flex
            w-full
            overflow-x-auto
            border-b
            border-[#d8e7ee]
          "
          role="tablist"
          aria-label="Highlights"
        >
          {tabs.map((tab) => {
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  min-h-[43px]
                  min-w-[130px]
                  whitespace-nowrap
                  px-6
                  text-[14px]
                  font-bold
                  transition-colors
                  sm:min-w-[145px]
                  ${
                    active
                      ? "bg-[#326d91] text-white"
                      : "bg-[#eef7fb] text-[#005b8e] hover:bg-[#e2f0f7]"
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* =========================================
            TAB CONTENT
        ========================================== */}
        {activeTab === "new" ? (
          <div className="mt-6">
            {/* =====================================
                TOP HIGHLIGHTS
            ====================================== */}
            <div
              className="
               grid 
               grid-cols-1
                items-stretch
                gap-5
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {/* Highlight cards */}
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="
                      group
                      flex
                      h-full
                      min-h-[240px]
                      flex-col
                      items-center
                      justify-center
                      border
                      border-[#d8e8ef]
                      bg-[#f1f9fd]
                      px-6
                      py-8
                      text-center
                      transition
                      hover:border-[#9fc9dd]
                      hover:bg-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#006b9e]
                    "
                  >
                    <Icon
                      className="
                        mb-7
                        h-11
                        w-11
                        text-[#ff9418]
                        transition-transform
                        group-hover:scale-110
                      "
                      strokeWidth={1.7}
                    />

                    <h3
                      className="
                        text-[15px]
                        font-medium
                        text-[#005b8e]
                        sm:text-[16px]
                      "
                    >
                      {item.title}
                    </h3>
                  </Link>
                );
              })}

              {/* =================================
                  USEFUL LINKS
              ================================== */}
              <div
                className="
                //   min-h-[220px]
                //   rounded-[3px]
                //   border
                //   border-[#d8d8d8]
                //   bg-white
                //   px-5
                //      py-5
                //   shadow-[0_2px_5px_rgba(0,0,0,0.08)]
                flex
      h-full
      min-h-[240px]
      flex-col
      rounded-[3px]
      border
      border-[#d8d8d8]
      bg-white
      px-6
      py-6
      shadow-[0_2px_5px_rgba(0,0,0,0.08)]
                "
              >
                <h3
                  className="
                    border-b
                    border-[#7d8790]
                    pb-2
                    text-[15px]
                    font-bold
                    text-[#1e2d38]
                  "
                >
                  Useful links
                </h3>

                <div className="mt-3">
                  {usefulLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="
                        group
                        flex
                        gap-2
                        py-2
                        text-[13px]
                        leading-5
                        text-[#005b8e]
                        hover:underline
                        font-bold
                      "
                    >
                      <span
                        className="
                          mt-[1px]
                          shrink-0
                          text-[#637b89]
                        "
                      >
                        →
                      </span>

                      <span>{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* =====================================
                FEATURED IMAGE CARDS
            ====================================== */}
            {/* <div
              className="
                mt-12
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                grid-cols-1
                gap-5
                lg:grid-cols-[1fr_1fr_315px]
                overflow-hidden
                min-h-[210px]
              "
            >
              {featuredCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="
                    group
                    relative
                    block
                    aspect-[1.75/1]
                    min-h-[210px]
                    overflow-hidden
                    bg-[#dbe7ed]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#006b9e]
                    focus:ring-offset-2
                  "
                >
                  {/* Image 
                  <Image
                    src={card.image}
                    alt={`${card.title} - ${card.description}`}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Gradient 
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/85
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* Content 
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-5
                      sm:p-6
                    "
                  >
                    <h3
                      className="
                        text-[17px]
                        font-bold
                        leading-6
                        text-white
                        drop-shadow-sm
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[13px]
                        font-medium
                        leading-5
                        text-white
                      "
                    >
                      {card.description}
                    </p>

                    {/* <div
                      className="
                        mt-3
                        flex
                        items-center
                        gap-1
                        text-xs
                        font-semibold
                        text-white
                        opacity-0
                        transition-opacity
                        group-hover:opacity-100
                      "
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div> 
                  </div>
                </Link>
              ))}
            </div> */}

            <div
  className="
    mt-12
    grid
    grid-cols-1
    gap-6
    sm:grid-cols-2
    lg:grid-cols-3
  "
>
  {featuredCards.map((card) => (
    <Link
      key={card.title}
      href={card.href}
      className="
        group
        relative
        block
        aspect-[16/10]
        w-full
        overflow-hidden
        bg-[#dbe7ed]
        focus:outline-none
        focus:ring-2
        focus:ring-[#006b9e]
        focus:ring-offset-2
      "
    >
      <Image
        src={card.image}
        alt={`${card.title} - ${card.description}`}
        fill
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          33vw
        "
        className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/20
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-5
          sm:p-6
        "
      >
        <h3
          className="
            text-[17px]
            font-bold
            leading-6
            text-white
          "
        >
          {card.title}
        </h3>

        <p
          className="
            mt-1
            text-[13px]
            font-medium
            leading-5
            text-white
          "
        >
          {card.description}
        </p>
      </div>
    </Link>
  ))}
</div>
          </div>
        ) : (
          /* =========================================
             POPULAR ESERVICES
          ========================================== */
          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {[
              "Work pass applications",
              "Work pass renewal",
              "Employment Pass services",
              "CPF and salary-related services",
              "Workplace safety services",
              "Employment Act services",
            ].map((service) => (
              <Link
                key={service}
                href="#"
                className="
                  flex
                  min-h-[100px]
                  items-center
                  justify-between
                  border
                  border-[#d8e8ef]
                  bg-white
                  px-5
                  text-[15px]
                  font-medium
                  text-[#005b8e]
                  transition
                  hover:border-[#9fc9dd]
                  hover:shadow-sm
                "
              >
                <span>{service}</span>

                <ExternalLink className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}