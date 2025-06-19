// app/lead.jsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Lead() {
  const [recordCount, setRecordCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data with lead-specific fields
  const data = [
    {
      name: "Mahesh Jakhottiya",
      email: "maheshjakhotiya@gmail.com",
      phone: "+91 9820089998",
      gender: "Male",
      type: "Individual",
      shortlistDate: "2025-06-17",
      country: "NA",
      state: "NA",
      district: "NA",
      pincode: "NA",
      address: "NA",
      followUp: "1970-01-01 05:30:00",
      lateDays: 3,
      remarks: "No Remarks",
      timeline: "Timeline 1",
      createdAt: "2025-06-01",
    },
    {
      name: "Kavita Kukar",
      email: "kavit*********@gmail.com",
      phone: "+91 9820******",
      gender: "Female",
      type: "Individual",
      shortlistDate: "2025-06-17",
      country: "NA",
      state: "NA",
      district: "NA",
      pincode: "NA",
      address: "NA",
      followUp: "1970-01-01 05:30:00",
      lateDays: 3,
      remarks: "No Remarks",
      timeline: "Timeline 2",
      createdAt: "2025-06-10",
    },
    {
      name: "Ashok Mishra",
      email: "ashokmishra@gmail.com",
      phone: "+91 9876543210",
      gender: "Male",
      type: "Individual",
      shortlistDate: "2025-06-17",
      country: "NA",
      state: "NA",
      district: "NA",
      address: "NA",
      followUp: "1970-01-01 05:30:00",
      lateDays: 3,
      remarks: "No Remarks",
      timeline: "Timeline 3",
      createdAt: "2025-06-05",
    },
    ...Array(27)
      .fill()
      .map((_, idx) => ({
        name: `Lead ${idx + 3}`,
        email: `lead${idx + 3}@example.com`,
        phone: `+91 900000${idx + 3}`,
        gender: idx % 2 === 0 ? "Male" : "Female",
        type: "Individual",
        shortlistDate: "2025-06-17",
        country: "NA",
        state: "NA",
        district: "NA",
        pincode: "NA",
        address: "NA",
        followUp: "1970-01-01 05:30:00",
        lateDays: 3,
        remarks: "No Remarks",
        timeline: `Timeline ${idx + 4}`,
        createdAt: `2025-06-${String(idx + 1).padStart(2, "0")}`,
      })),
  ];

  // Function to get initials from name
  const getInitials = (name) => {
    const nameParts = name.trim().split(" ");
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    }
    return nameParts[0][0].toUpperCase();
  };

  // Filter and paginate data
  const filteredData = data.filter((lead) => {
    const nameMatch = lead.name.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatch = lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const fromDateMatch = fromDate ? new Date(lead.createdAt) >= new Date(fromDate) : true;
    const toDateMatch = toDate ? new Date(lead.createdAt) <= new Date(toDate) : true;
    return (nameMatch || emailMatch) && fromDateMatch && toDateMatch;
  });

  const totalRecords = filteredData.length;
  const totalPages = Math.ceil(totalRecords / recordCount);
  const startIndex = (currentPage - 1) * recordCount;
  const paginatedData = filteredData.slice(startIndex, startIndex + recordCount);

  return (
    <div className="bg-white w-full min-h-full p-4 font-semibold">
      <div className="max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="bg-white w-full h-16 mb-6">
          <div className="flex justify-between items-center gap-4 p-3">
            {/* From Date and To Date (Left) */}
            <div className="flex items-center gap-4">
              <span className="text-[#3b3b3b] font-montserrat font-semibold text-base">From Date</span>
              <div className="bg-white rounded-xl border border-gray-500 w-32 h-9 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  placeholder="From Date"
                  className="text-[#3b3b3b] font-montserrat font-semibold text-xs bg-transparent outline-none w-full text-center"
                />
                
              </div>
              <span className="text-[#3b3b3b] font-montserrat font-semibold text-base">To Date</span>
              <div className="bg-white rounded-xl border border-gray-500 w-32 h-9 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  placeholder="To Date"
                  className="text-[#3b3b3b] font-montserrat font-semibold text-xs bg-transparent outline-none w-full text-center"
                />
                
              </div>
            </div>

            {/* Search Bar (Right) */}
            <div className="bg-white rounded-xl border border-gray-500 w-64 h-9 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="text-[#5e5e5e] font-montserrat font-semibold text-base bg-transparent outline-none w-full pl-4"
              />
              <Image src="/images/groupse.svg" alt="Search" width={20} height={20} className="ml-2 mr-4" />
            </div>
          </div>
        </div>

        {/* Communication Buttons */}
        <div className="flex justify-between items-center gap-4 mb-6">
          {/* Left Buttons (Email, WhatsApp, SMS, Call, Meet, Visit) */}
          <div className="flex flex-wrap gap-4">
            {[
              { src: "/images/ic-twotone-mail0.svg", alt: "Email", bg: "bg-[#4d4d4d]", border: "border-gray-500", label: "Email" },
              { src: "/images/logos-whatsapp-icon0.svg", alt: "WhatsApp", bg: "bg-[#5fd668]", border: "border-green-500", label: "WhatsApp" },
              { src: "/images/ic-twotone-textsms0.svg", alt: "SMS", bg: "bg-gradient-to-b from-[#994105] to-[#FF6C08]", border: "border-orange-500", label: "SMS" },
              { src: "/images/solar-call-chat-bold-duotone0.svg", alt: "Call", bg: "bg-gradient-to-b from-[#053772] to-[#0968D8]", border: "border-blue-500", label: "Call" },
              { src: "/images/streamline-logos-google-hangouts-meet-logo-solid0.svg", alt: "Meet", bg: "bg-gradient-to-b from-[#4F3E99] to-[#8367FF]", border: "border-gray-500", label: "Meet" },
              { src: "/images/fa-6-solid-map-location0.svg", alt: "Visit", bg: "bg-[#3b3b3b]", border: "border-gray-500", label: "Visit" },
            ].map((button, idx) => (
              <div
                key={idx}
                className={`${button.bg} rounded-[17px] w-[120px] h-9 border ${button.border} shadow-md flex items-center justify-center hover:scale-105 transition-all cursor-pointer`}
                role="button"
                tabIndex={0}
              >
                <Image src={button.src} alt={button.alt} width={20} height={20} />
                <span className="text-white font-montserrat font-semibold text-xs ml-2">{button.label}</span>
              </div>
            ))}
          </div>

          {/* Report Button (Right) */}
          <div className="bg-[#ff0000] rounded-[17px] w-[120px] h-9 border border-red-500 shadow-md flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
               role="button"
               tabIndex={0}
          >
            <Image src="/images/group0.svg" alt="Report" width={20} height={20} />
            <span className="text-white font-montserrat font-semibold text-xs ml-2">Report</span>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-gray-200 rounded-xl border border-gray-300 w-full h-auto mb-4 shadow-md p-3">
          <div className="flex flex-wrap gap-2 items-center">
            {/* Show Records (Left) */}
            <div className="flex items-center gap-2">
              <span className="text-[#3b3b3b] font-montserrat font-semibold text-base">Show</span>
              <div className="relative">
                <select
                  value={recordCount}
                  onChange={(e) => {
                    setRecordCount(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-white rounded-xl border border-gray-500 w-[72px] h-9 flex items-center justify-center text-[#3b3b3b] font-montserrat font-semibold text-base appearance-none pl-4 pr-8 hover:scale-105 transition-all cursor-pointer"
                >
                  {[10, 20, 30].map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
                <Image
                  src="/images/formkit-down0.svg"
                  alt="Dropdown"
                  width={18}
                  height={8}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
              <span className="text-[#3b3b3b] font-montserrat font-semibold text-base">Records</span>
            </div>
            {/* Other Dropdowns */}
            {["Data Type", "Country", "State", "District", "Pin Code", "All Data"].map((label, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-500 w-[150px] h-9 shadow-md flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <span className="text-[#3b3b3b] font-montserrat font-semibold text-xs">{label}</span>
                <Image src={`/images/formkit-down${idx}.svg`} alt="Dropdown" width={18} height={8} className="ml-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-gray-100 rounded-xl border border-black w-full min-h-[500px] shadow-md">
          {/* Table Header */}
          <div className="bg-white rounded-xl border border-gray-300 w-[calc(100%-2rem)] h-14 m-4 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-3 divide-x divide-black">
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 rounded-md border border-black w-8 h-8"></div>
                <span className="text-black font-montserrat font-semibold text-base">Selected (0)</span>
              </div>
              <div className="flex items-center gap-4 pl-4">
                <Image src="/images/group2.svg" alt="Group Icon" width={25} height={25} />
                <span className="text-black font-montserrat font-semibold text-base">Data</span>
              </div>
              <div className="flex items-center gap-4 pl-4">
                <Image src="/images/ic-twotone-location-on0.svg" alt="Location Icon" width={25} height={25} />
                <span className="text-black font-montserrat font-semibold text-base">Location</span>
              </div>
              <div className="flex items-center gap-4 pl-4">
                <Image src="/images/uil-schedule0.svg" alt="Logs Icon" width={25} height={25} />
                <span className="text-black font-montserrat font-semibold text-base">Logs</span>
              </div>
            </div>
          </div>

          {/* Data Rows */}
          <div className="divide-y divide-black">
            {paginatedData.map((lead, idx) => (
              <div key={idx} className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-x divide-black">
                  {/* Selected Column */}
                  <div className="flex flex-col gap-4 items-center">
                    <div className="flex justify-center">
                      <div className="bg-gray-200 rounded-md border border-black w-7 h-7"></div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                      {/* <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                        <Image src={`/images/raphael-edit${idx % 2}.svg`} alt="Edit" width={18} height={18} />
                      </div>
                      <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                        <Image src={`/images/group${4 + (idx % 2)}.svg`} alt="Delete" width={18} height={18} />
                      </div> */}
                      <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                        <Image src={`/images/garden-eye-hide-fill-12${idx % 2}.svg`} alt="View" width={17} height={17} />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-[#ff8c00] rounded-[10px] w-[41px] h-[25px] flex items-center justify-center">
                        <span className="text-white font-montserrat font-medium text-[15px]">{getInitials(lead.name)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Column */}
                  <div className="flex flex-col gap-3 pl-4">
                    <div className="flex flex-row flex-wrap items-center gap-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={`/images/material-symbols-person-${idx === 0 ? "40" : "3-rounded0"}.svg`}
                          alt="Person"
                          width={14}
                          height={14}
                          className="bg-blue-500 rounded-md"
                        />
                        <span className="text-black font-montserrat font-semibold text-[13px]">{lead.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/mdi-email-check${idx % 2}.svg`} alt="Email Check" width={25} height={25} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/ic-sharp-phone${idx % 2}.svg`} alt="Phone" width={25} height={25} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{lead.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/logos-whatsapp-icon${(idx % 2) + 1}.svg`} alt="WhatsApp" width={25} height={25} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{lead.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/fa-transgender${idx % 2}.svg`} alt="Gender" width={20} height={25} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{lead.gender}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/material-symbols-data-usage${idx % 2}.svg`} alt="Data Usage" width={24} height={24} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{lead.type}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/uil-schedule${idx % 2}.svg`} alt="Shortlist" width={24} height={24} />
                      <span className="text-black font-montserrat font-semibold text-[13px]">Shortlist date: {lead.shortlistDate}</span>
                    </div>
                  </div>

                  {/* Location Column */}
                  <div className="flex flex-col gap-3 pl-4">
                    {[
                      `Country: ${lead.country}`,
                      `State: ${lead.state}`,
                      `District: ${lead.district}`,
                      `Pincode: ${lead.pincode}`,
                      `Address: ${lead.address}`,
                    ].map((loc, locIdx) => (
                      <div key={locIdx} className="flex items-center gap-3">
                        <Image
                          src={`/images/${
                            locIdx === 0
                              ? `mdi-world-wide-web${idx % 2}`
                              : locIdx === 1
                              ? `fluent-real-estate-20-filled${idx % 2}`
                              : locIdx === 3
                              ? `bi-pin-angle-fill${idx % 2}`
                              : `mdi-location-radius${idx % 2}`
                          }.svg`}
                          alt="Location"
                          width={24}
                          height={24}
                        />
                        <span className="text-black font-montserrat font-medium text-[13px]">{loc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Logs Column */}
                  <div className="flex flex-col gap-3 pl-4">
                    <div className="flex items-center gap-3">
                      <Image src={`/images/uil-schedule${idx % 2}.svg`} alt="Follow-up" width={26} height={26} />
                      <span className="text-black font-montserrat font-medium text-[13px]">Follow up {lead.followUp}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/famicons-time${idx % 2}.svg`} alt="Late" width={25} height={25} />
                      <span className="text-black font-montserrat font-normal text-[13px]">
                        Late <span>({lead.lateDays})</span> days
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/mdi-paper${idx % 2}.svg`} alt="Remarks" width={24} height={24} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{lead.remarks}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={`/images/tabler-timeline-event-text${idx % 2}.svg`} alt="Timeline" width={25} height={25} />
                      <span className="text-black font-montserrat font-medium text-[13px] underline">{lead.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center p-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-white rounded-xl border border-gray-500 w-24 h-9 flex items-center justify-center text-[#3b3b3b] font-montserrat font-semibold text-xs hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-[#3b3b3b] font-montserrat font-semibold text-base">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-white rounded-xl border border-gray-500 w-24 h-9 flex items-center justify-center text-[#3b3b3b] font-montserrat font-semibold text-xs hover:scale-105 transition-all cursor-pointer disabled:bg-gray-300 disabled:opacity-50 disabled:text-gray-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}