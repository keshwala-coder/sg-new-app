import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1Z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="m5 4 14 16M19 4 5 20"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6 8H2v12h4V8ZM4 2a2.3 2.3 0 1 0 0 4.6A2.3 2.3 0 0 0 4 2ZM22 13.2c0-3.6-1.9-5.6-4.8-5.6-2.2 0-3.1 1.2-3.7 2V8H9.5v12h4v-6c0-1.6.3-3.1 2.3-3.1 2 0 2.1 1.8 2.1 3.2V20H22v-6.8Z"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path fill="currentColor" d="m10 9 5 3-5 3V9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];


const quickLinks = [
  { label: "Check Pass Status", href: "#" },
  { label: "Apply for Work Passes", href: "#" },
  { label: "Calculate Foreign Worker Levy", href: "#" },
  { label: "Public Holidays 2025", href: "#" },
  { label: "Report an Issue (SnapSAFE)", href: "#" },
];

const informationLinks = [
  { label: "Employers", href: "#" },
  { label: "Employees", href: "#" },
  { label: "Migrant Domestic Workers", href: "#" },
  { label: "Employment Agencies", href: "#" },
  { label: "Workplace Safety Officers", href: "#" },
];

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}


export default function Footer() {
    return (
       <footer className="bg-[#1c1c1c] text-white pt-16 pb-8 font-sans border-t border-[#005e90]">
             <div className="mx-auto max-w-[1300px] p-4">
               {/* Main footer */}
               <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr_1fr] lg:gap-12">
                 {/* Ministry information */}
                 <div>
                   <h2 className="text-xl font-bold leading-tight text-white">
                     Ministry of Manpower
                   </h2>
       
                   <p className="mt-3 text-xs uppercase tracking-[1.2px] text-[#9aa3b2]">
                     Government of Singapore
                   </p>
       
                   <div className="mt-8 space-y-5 text-sm text-gray-300">
                     <div className="flex gap-4">
                       <span className="text-[#005e90]">
                         <MapPinIcon />
                       </span>
       
                       <address className="not-italic">
                         1500 Bendemeer Road,
                         <br />
                         Ministry of Manpower Services Centre,
                         <br />
                         Singapore 339946
                       </address>
                     </div>
       
                     <a
                       href="tel:+6564385122"
                       className="flex items-center gap-4 transition-colors hover:text-white"
                     >
                       <span className="text-[#0079bd]">
                         <PhoneIcon />
                       </span>
                       <span>+65 6438 5122</span>
                     </a>
       
                     <a
                       href="mailto:mom_qops@mom.gov.sg"
                       className="flex items-center gap-4 transition-colors hover:text-white"
                     >
                       <span className="text-[#0079bd]">
                         <MailIcon />
                       </span>
                       <span>mom_qops@mom.gov.sg</span>
                     </a>
                   </div>
                 </div>
       
                 {/* Information */}
                 <div>
                   <h3 className="text-sm font-bold uppercase tracking-[1.5px] text-gray-500">
                     Information For
                   </h3>
       
                   <ul className="mt-7 space-y-5">
                     {informationLinks.map((link) => (
                       <li key={link.label}>
                         <Link
                           href={link.href}
                           className="text-sm text-gray-300 leading-6 transition-colors hover:text-white hover:underline decoration-[#005e90] decoration-2 underline-offset-4"
                         >
                           {link.label}
                         </Link>
                       </li>
                     ))}
                   </ul>
                 </div>
       
                 {/* Quick links */}
                 <div>
                   <h3 className="text-sm font-bold uppercase tracking-[1.5px] text-gray-500">
                     Quick Links
                   </h3>
       
                   <ul className="mt-7 space-y-5">
                     {quickLinks.map((link) => (
                       <li key={link.label}>
                         <Link
                           href={link.href}
                           className="text-sm text-gray-300 leading-6 transition-colors hover:text-white hover:underline decoration-[#005e90] decoration-2 underline-offset-4"
                         >
                           {link.label}
                         </Link>
                       </li>
                     ))}
                   </ul>
                 </div>
       
                 {/* Social */}
                 <div>
                   <h3 className="text-sm font-bold uppercase tracking-[1.5px] text-gray-500">
                     Stay Connected
                   </h3>
       
                   <p className="mt-7 max-w-[330px]  leading-7 text-gray-500 text-xs uppercase tracking-[1.2px]">
                     Follow us for the latest updates on
                     <br className="hidden sm:block" />
                     manpower policies.
                   </p>
       
                   <div className="mt-5 flex flex flex-wrap gap-3">
                     {socialLinks.map((social) => (
                       <a
                         key={social.label}
                         href={social.href}
                         aria-label={social.label}
                         
                         className="flex bg-gray-800 p-2.5 transition-all duration-300 items-center justify-center rounded-full bg-[#243044] text-gray-300 transition-colors hover:bg-[#3b5998] hover:text-white hover:-translate-y-1"
                       >
                         <span className="h-6 w-6">{social.icon}</span>
                       </a>
                     ))}
                   </div>
       
                   <div className="mt-8 border-t border-[#2e343c] pt-7">
                     <a
                       href="#"
                       className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white text-gray-300"
                     >
                       Log in to Intranet
                       <ExternalLinkIcon />
                     </a>
                   </div>
                 </div>
               </div>
       
               {/* Bottom divider */}
               <div className="mt-12 border-t border-[#30353c]" />
       
               {/* Bottom footer */}
               <div className="flex flex-col gap-8 pt-7 lg:flex-row lg:items-center lg:justify-between">
                 <nav className="flex flex-wrap gap-x-8 gap-y-4">
                   {[
                     "Report Vulnerability",
                     "Privacy Statement",
                     "Terms of Use",
                     "Sitemap",
                     "Rate this Website",
                   ].map((item) => (
                     <Link
                       key={item}
                       href="#"
                       className="text-xs text-[#8290a6] transition-colors hover:text-white"
                     >
                       {item}
                     </Link>
                   ))}
                 </nav>
       
                 <div className="text-left text-xs leading-7 text-[#8290a6] lg:text-right">
                   <p>© 2026 Government of Singapore.</p>
                   <p>Last Updated: 9/19/2026</p>
                 </div>
               </div>
             </div>
           </footer>
    )
}