export default function AboutPage() {
  const items = [
    {
      title: "People. Our Greatest Resource.",
      description: "Celebrating MOM's 70th anniversary.",
    },
    {
      title: "About MOM",
      description: "Information about MOM's mission, vision and logo.",
    },
    {
      title: "Divisions and statutory boards",
      description: "About MOM's divisions and statutory boards.",
    },
    {
      title: "MOM accolades",
      description: "MOM initiatives that have won awards.",
    },
    {
      title: "Ministry of Manpower COS Highlights 2025",
      description:
        "Key points of MOM's Committee of Supply speeches, including links to the speeches.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f9fc] text-[#172b4d] pb-6">
      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-7 pb-3">
        <nav className="flex items-center gap-3 text-[14px] font-medium">
          {/* Home icon */}
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-[#66778c]"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9.5V21h14V9.5" />
            <path d="M9 21v-7h6v7" />
          </svg>

          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className="text-[#66778c]"
          >
            <path
              d="M3 1.5 6.5 5 3 8.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-[#172b4d]">About us</span>
        </nav>
      </div>

      {/* Page heading */}
      <section className="mx-auto w-full max-w-[1200px] px-6">
        <h1 className="mt-[88px] text-center text-[42px] font-bold leading-tight tracking-[-1.5px] text-black">
          About us
        </h1>

        {/* Cards */}
        <div className="mx-auto mt-[80px] max-w-[940px] space-y-[19px]">
          {items.map((item, index) => (
            <a
              href="#"
              key={item.title}
              
              className="group block rounded-[3px] border border-gray-300 bg-white hover:border-[#005e90] hover:bg-[#fbfdff] p-5 hover:shadow-md transition duration-200"
            >
              <h3 className="text-[#333366] font-bold text-[15px] mb-1 group-hover:text-[#005e90] group-hover:underline leading-[23px]">
                {item.title}
              </h3>

              <p className="text-[#333] text-sm leading-relaxed mt-[7px] leading-[22px]">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
