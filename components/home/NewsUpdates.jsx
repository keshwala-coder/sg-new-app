import Link from "next/link";
import {
  Megaphone,
  FileText,
  Mic,
  ChevronRight,
//   Facebook,
  Mail,
  Printer,
  X,
} from "lucide-react";

const sections = [
  {
    title: "Announcements",
    icon: Megaphone,
    date: "29 December 2025",
    heading: "Maintenance of eServices on 1 January",
    description:
      "There'll be maintenance of eServices on 1 January.",
    href: "/announcements",
  },
  {
    title: "Press releases",
    icon: FileText,
    date: "18 December 2025",
    heading:
      "Extension of Part-time Re-employment Grant to December 2027",
    description: "",
    href: "/press-releases",
  },
  {
    title: "Speeches",
    icon: Mic,
    date: "14 December 2025",
    heading:
      "Opening Remarks at International Migrants Day 2025",
    description: "",
    href: "/speeches",
  },
];

export default function NewsUpdates() {
  return (
    <section className="bg-[#f1f8fc]">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">

        {/* Top divider */}
        <div className="border-t border-[#cbd8df]" />

        {/* =====================================
            NEWS COLUMNS
        ====================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            py-10
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-10
            lg:py-12
          "
        >
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article key={section.title} className="flex flex-col">
                {/* Heading */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    border-b-2
                    border-[#006da8]
                    pb-3
                  "
                >
                  <Icon
                    className="h-7 w-7 shrink-0 text-[#ff9418]"
                    strokeWidth={1.8}
                  />

                  <h2
                    className="
                      text-2xl
                      font-light
                      text-[#444444]
                      sm:text-xl
                    "
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Date */}
                <p
                  className="
                    mt-6
                    text-xs 
                    text-gray-500
                    leading-5
                  "
                >
                  {section.date}
                </p>

                {/* Title */}
                <Link
                  href={section.href}
                  className="
                    mt-2
                    block
                    text-sm
                    font-semibold
                    transition-colors
                    hover:text-[#004f7c]
                    hover:underline
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#006da8]
                    text-[#005e90] 
                    mb-2
                    leading-snug
                  "
                >
                  {section.heading}
                </Link>

                {/* Description */}
                {section.description && (
                  <p
                    className="
                      mt-2
                      text-xs
                      leading-7
                      text-[#45647b]
                    "
                  >
                    {section.description}
                  </p>
                )}

                {/* View all */}
                <Link
                  href={section.href}
                  className="
                    mt-5
                    inline-flex
                    w-fit
                    items-center
                    gap-1
                    text-[16px]
                    font-bold
                    text-[#006da8]
                    transition-colors
                    hover:text-[#004f7c]
                    hover:underline
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#006da8]
                  "
                >
                  <span>View All</span>

                  <ChevronRight
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </Link>
              </article>
            );
          })}
        </div>

        {/* =====================================
            SHARE BAR
        ====================================== */}
        <div className="border-t border-[#d3dfe5] pt-7">
          <div
            className="
              flex
              flex-col
              items-start
              justify-end
              gap-4
              sm:flex-row
              sm:items-center
            "
          >
            <span className="text-[15px] text-[#45647b]">
              Share this page
            </span>

            <div className="flex items-center gap-2">
              {/* Facebook */}
              {/* <button
                type="button"
                aria-label="Share on Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-[#52677a]
                  transition
                  hover:text-[#006da8]
                "
              >
                <Facebook
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </button> */}

              {/* X */}
              <button
                type="button"
                aria-label="Share on X"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-[#52677a]
                  transition
                  hover:text-[#006da8]
                "
              >
                <X
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </button>

              {/* Email */}
              <button
                type="button"
                aria-label="Share by email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-[#52677a]
                  transition
                  hover:text-[#006da8]
                "
              >
                <Mail
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </button>

              {/* Divider */}
              <span className="mx-2 h-6 w-px bg-[#c7d2d9]" />

              {/* Print */}
              <button
                type="button"
                aria-label="Print this page"
                // onClick={() => window.print()}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-[#52677a]
                  transition
                  hover:text-[#006da8]
                "
              >
                <Printer
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}