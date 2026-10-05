import Link from "next/link";

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

// type FormDetailProps = {
//   userData: UserData;
//   onClear: () => void;
// };




export default function FormDetail({ userData, onClear }) {

      const handleDownload = () => {
      if (!userData.pdfLink) return;
      const link = document.createElement("a");
      link.href = userData.pdfLink;
      link.download = `${userData.fullName}-official-letter.pdf`;
    
      document.body.appendChild(link);
      link.click();
      link.remove();
    };

  return (
    <div className="min-h-screen font-sans bg-[#f3f9fc] px-4 py-6 sm:px-6 lg:px-8">
    
      <div className= " container mx-auto w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Top border */}
        <div className="h-2 bg-emerald-500" />

        <div className="p-5 sm:p-7 md:p-9">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#173b5d] sm:text-3xl">
                {userData.fullName}
              </h1>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <span>⌖</span>
                <span>{userData.nationality}</span>
              </div>
            </div>

            {/* Valid badge */}
            
            <div className="px-4 py-2 text-xs font-black flex items-center gap-2 
            w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> VALID
            </div>
          </div>

          {/* Information */}
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
            <div>
                <p className="text-[10px] font-black text-gray-400 uppercase mb-1 flex items-center gap-1 
        "><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
            Pass Type
        </p>

        <p className="font-bold text-slate-700">
            {userData.passType}
        </p>
            </div>

            <div>
                 <p className="text-[10px] font-black text-gray-400 uppercase mb-1 flex items-center gap-1 
        "><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Occupation
        </p>

        <p className="font-bold text-slate-700">
           {userData.occupation}
        </p>
            </div>

            <InfoItem
              label="PASSPORT NO"
              value={userData.passportNumber}
            />

            <InfoItem
              label="DATE OF BIRTH"
              value={userData.dob}
            />
          </div>

          {/* Employer */}
          <div className="mt-7 rounded-md border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase text-slate-400">
              Employer / Company
            </p>

            <div className="mt-2 flex items-start gap-3">
              <span className="text-lg text-blue-600">▣</span>

              <p className="text-base font-semibold text-[#173b5d] sm:text-lg">
                {userData.employer}
              </p>
            </div>
          </div>

          {/* Dates */}
          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InfoItem
              label="DATE OF ISSUE"
              value={userData.dateOfApplication}
            />

            <InfoItem
              label="DATE OF EXPIRY"
              value={userData.dateOfExpiry}
            />
          </div>

          {/* Actions */}
          <div className="mt-8 space-y-3">
            <button
              type="button"
              onClick={handleDownload}
              className="flex w-full items-center justify-center gap-2 rounded bg-[#005e90] px-5 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-[#00426a] active:scale-[0.99]"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-building2 lucide-building-2 text-[#005e90]" aria-hidden="true"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
              <span>Download Official Letter (PDF)</span>
            </button>

            <button
              onClick={onClear}
              type="button" 
              className="w-full rounded  border border-gray-300 bg-white px-5 py-3 text-gray-600 font-bold transition hover:bg-gray-50 active:scale-[0.99]"
            >
              Verify Another Candidate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// type InfoItemProps = {
//   label: string;
//   value: string;
// };

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-[10px] font-black text-gray-400 uppercase mb-1 flex items-center gap-1 
      ">
        {label}
      </p>

      <p className="font-bold text-slate-700">
        {value}
      </p>
    </div>
  );
}
