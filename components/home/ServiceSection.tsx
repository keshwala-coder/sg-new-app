import Link from "next/link";
import {
  Search,
  UserRound,
  Handshake,
  HardHat,
  TrendingUp,
  Settings,
  Calculator,
  FileText,
  Newspaper,
  Gavel,
} from "lucide-react";

const services = [
  {
    title: "Work passes",
    description:
      "Hiring foreign manpower, work passes, eligibility, applications, renewals.",
    href: "/work-passes",
    icon: UserRound,
  },
  {
    title: "Employment practices",
    description:
      "Leave, public holidays, employment rights and conditions, schemes, claims, skills.",
    href: "/employment-practices",
    icon: Handshake,
  },
  {
    title: "Workplace safety and health",
    description:
      "Work injury compensation, certification and registration, monitoring, reporting.",
    href: "/workplace-safety-and-health",
    icon: HardHat,
  },
  {
    title: "Statistics and publications",
    description:
      "Find labour market information including statistics, publications and ongoing surveys.",
    href: "/statistics-and-publications",
    icon: TrendingUp,
  },
];

const quickLinks = [
  {
    title: "eServices",
    href: "/eservices",
    icon: Settings,
  },
  {
    title: "Calculators",
    href: "/calculators",
    icon: Calculator,
  },
  {
    title: "Forms",
    href: "/forms",
    icon: FileText,
  },
  {
    title: "Newsroom",
    href: "/newsroom",
    icon: Newspaper,
  },
  {
    title: "Legislation",
    href: "/legislation",
    icon: Gavel,
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-[#005e90] text-white">
      {/* =========================
          SEARCH
      ========================== */}
      <div className="mx-auto w-full max-w-[1200px] px-5 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <form
          className="mx-auto flex w-full max-w-[960px] flex-col sm:flex-row shadow-xl"
          
        >
          <label htmlFor="site-search" className="sr-only">
            Search for information and services
          </label>

          <input
            id="site-search"
            type="search"
            placeholder="Search for information and services"
            className="
              h-[58px]
              min-w-0
              flex-1
              border
              border-[#005c8d]
              bg-[#005f91]
              px-4 
              md:px-6
              text-gray-800 
              text-[15px]
              md:text-[17px]
              rounded-l-[3px]
              text-white
              outline-none
              placeholder:text-gray-500
              focus:outline-none
              sm:h-[70px]
            " 
          />

          <button
            type="submit"
            className="
              flex
              h-[58px]
              shrink-0
              items-center
              justify-center
              gap-3
              bg-[#ff9817]
              px-8
              text-[18px]
              font-bold
              text-[#002f4b]
              transition-colors
              hover:bg-[#f58b00]
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-[#006b9e]
              sm:h-[70px]
              sm:min-w-[208px]
            "
          >
            <Search
              className="h-6 w-6"
              strokeWidth={2.5}
            />

            <span>Search</span>
          </button>
        </form>
      </div>

      {/* =========================
          SERVICE CARDS
      ========================== */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1300px]
          grid-cols-1
          gap-0
          px-5
          pb-12
          pt-12
          sm:px-6
          sm:pb-14
          sm:pt-14
          md:grid-cols-2
          lg:grid-cols-4
          lg:px-8
          lg:pb-16
          lg:pt-20
        "
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.title}
              href={service.href}
              className="
                group
                flex
                min-h-[270px]
                flex-col
                items-center
                px-5
                py-8
                text-center
                transition
                hover:bg-white/[0.04]
                focus:outline-none
                focus:ring-2
                focus:ring-white
                focus:ring-inset
                sm:px-8
                lg:min-h-[260px]
                lg:px-7
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-7
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  text-[#ff9817]
                "
              >
                <Icon
                  className="h-[48px] w-[48px]"
                  strokeWidth={1.8}
                />
              </div>

              {/* Title */}
              <h2
                className="
                  text-[19px]
                  font-bold
                  leading-7
                  text-white
                  transition
                  group-hover:text-[#ffb03b]
                  sm:text-[20px]
                "
              >
                {service.title}
              </h2>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-[290px]
                  text-[16px]
                  leading-7
                  text-white/95
                "
              >
                {service.description}
              </p>
            </Link>
          );
        })}
      </div>

      {/* =========================
          QUICK LINKS
      ========================== */}
      <div className="bg-[#00426a]">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[900px]
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >
          {quickLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.title}
                href={link.href}
                className="
                  group
                  flex
                  min-h-[72px]
                  items-center
                  justify-center
                  gap-1
                  border-b
                  border-white/10
                  px-3
                  py-4
                  text-center
                  text-[14px]
                  font-bold
                  text-white
                  transition
                  hover:bg-white/[0.06]
                  hover:text-[#ffb03b]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                  focus:ring-inset
                  sm:min-h-[78px]
                  sm:text-[16px]
                  lg:border-b-0
                "
              >
                <Icon
                  className="
                    h-5
                    w-5
                    shrink-0
                    transition-transform
                    group-hover:scale-110
                  "
                  strokeWidth={1.7}
                />

                <span>{link.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}