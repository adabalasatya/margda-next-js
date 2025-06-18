// app/data.jsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Data() {
  const [recordCount, setRecordCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data with added date field for filtering
  const data = [
    {
      name: "Mahesh Jakhottiya",
      email: "maheshjakhotiya@gmail.com",
      phone: "+91 9820089998",
      gender: "Male",
      type: "Individual",
      associate: "Assosicate",
      createdAt: "2025-06-01",
    },
    {
      name: "Kavita Karki",
      email: "kavit**********.com",
      phone: "+91 9820******",
      gender: "Female",
      type: "Individual",
      associate: "Assosicate",
      createdAt: "2025-06-10",
    },
    {
      name: "Ashok Mishra",
      email: "ashokmishra@gmail.com",
      phone: "+91 9876543210",
      gender: "Male",
      type: "Individual",
      associate: "Assosicate",
      createdAt: "2025-06-05",
    },
    // Add more mock data for pagination testing
    ...Array(27)
      .fill()
      .map((_, idx) => ({
        name: `User ${idx + 3}`,
        email: `user${idx + 3}@example.com`,
        phone: `+91 900000${idx + 3}`,
        gender: idx % 2 === 0 ? "Male" : "Female",
        type: "Individual",
        associate: "Assosicate",
        createdAt: `2025-06-${String(idx + 1).padStart(2, "0")}`,
      })),
  ];

  // Filter and paginate data
  const filteredData = data.filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const fromDateMatch = fromDate ? new Date(user.createdAt) >= new Date(fromDate) : true;
    const toDateMatch = toDate ? new Date(user.createdAt) <= new Date(toDate) : true;
    return (nameMatch || emailMatch) && fromDateMatch && toDateMatch;
  });

  const totalRecords = filteredData.length;
  const totalPages = Math.ceil(totalRecords / recordCount);
  const startIndex = (currentPage - 1) * recordCount;
  const paginatedData = filteredData.slice(startIndex, startIndex + recordCount);

  return (
    <div className="bg-white w-full min-h-full p-4 font-montserrat">
      <div className="max-w-7xl mx-auto">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          {[
            { label: "BUSINESS", bg: "bg-gradient-to-b from-[#053772] to-[#0968D8]", border: "border-blue-500", img: null },
            { label: "ADD DATA", bg: "bg-white", border: "border-gray-500", img: "/images/material-symbols-add-rounded0.svg" },
            { label: "VERIFY DATA", bg: "bg-gradient-to-b from-[#4F3E99] to-[#8367FF]", border: "border-purple-500", img: "/images/bitcoin-icons-verify-filled0.svg" },
            { label: "UPLOAD CSV", bg: "bg-gradient-to-b from-[#3B3B3B] to-[#4D4D4D]", border: "border-gray-500", img: "/images/ep-upload-filled0.svg" },
            { label: "SHORTLIST", bg: "bg-green-500", border: "border-gray-300", img: "/images/groups.svg" },
            { label: "TASK", bg: "bg-gradient-to-b from-[#994105] to-[#FF6C08]", border: "border-orange-500", img: "/images/jam-task-list0.svg" },
          ].map((button, idx) => (
            <div
              key={idx}
              className={`${button.bg} rounded-[17px] w-32 h-9 border ${button.border} shadow-md flex items-center justify-center hover:scale-105 transition-all cursor-pointer`}
              role="button"
              tabIndex={0}
            >
              {button.img && (
                <Image src={button.img} alt={button.label} width={20} height={20} className="ml-2" />
              )}
              <span
                className={`${button.bg.includes("bg-white") ? "text-black" : "text-white"} font-montserrat font-bold text-xs ml-2`}
              >
                {button.label}
              </span>
            </div>
          ))}
        </div>

       {/* Communication Buttons */}
<div className="flex flex-wrap justify-between gap-4 mb-6">
  <div className="flex flex-wrap gap-4">
    {[
      { src: "/images/ic-twotone-mail0.svg", alt: "Email", bg: "bg-[#4d4d4d]", border: "border-gray-500", label: "Email" },
      { src: "/images/logos-whatsapp-icon0.svg", alt: "WhatsApp", bg: "bg-[#5fd668]", border: "border-green-500", label: "WhatsApp" },
      { src: "/images/ic-twotone-textsms0.svg", alt: "SMS", bg: "bg-gradient-to-b from-[#994105] to-[#FF6C08]", border: "border-orange-500", label: "SMS" },
      { src: "/images/solar-call-chat-bold-duotone0.svg", alt: "Call", bg: "bg-gradient-to-b from-[#053772] to-[#0968D8]", border: "border-blue-500", label: "Call" },
      { src: "/images/streamline-logos-google-hangouts-meet-logo-solid0.svg", alt: "Meet", bg: "bg-gradient-to-b from-[#4F3E99] to-[#8367FF]", border: "border-purple-500", label: "Meet" },
      { src: "/images/fa-6-solid-map-location0.svg", alt: "Visit", bg: "bg-[#3b3b3b]", border: "border-gray-500", label: "Visit" },
    ].map((button, idx) => (
      <div
        key={idx}
        className={`${button.bg} rounded-[17px] w-32 h-9 border ${button.border} shadow-md flex items-center justify-center hover:scale-105 transition-all cursor-pointer`}
        role="button"
        tabIndex={0}
      >
        <Image src={button.src} alt={button.alt} width={20} height={20} className="ml-2" />
        <span className="text-white font-montserrat font-bold text-xs ml-2">{button.label}</span>
      </div>
    ))}
  </div>
  {/* Report Button Aligned to the Right */}
  <div
    className="bg-[#ff0000] rounded-[17px] w-32 h-9 border border-red-500 shadow-md flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
    role="button"
    tabIndex={0}
  >
    <Image src="/images/group0.svg" alt="Report" width={18} height={18} className="ml-2" />
    <span className="text-white font-montserrat font-bold text-[15px] ml-2">Report</span>
  </div>
</div>

        {/* Filter Section */}
        <div className="bg-gray-200 rounded-xl border border-gray-300 w-full h-16 mb-4 shadow-md">
          <div className="flex flex-wrap gap-7 p-3">
            {["Data Type", "Country", "State", "District", "Pin Code", "All Data"].map((label, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-500 w-44 h-9 shadow-md flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <span className="text-[#3b3b3b] font-montserrat font-bold text-xs">{label}</span>
                <Image src={`/images/formkit-down${idx}.svg`} alt="Dropdown" width={18} height={8} className="ml-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-gray-100 rounded-xl border border-gray-300 w-full h-16 mb-4 shadow-md">
          <div className="flex items-center justify-between gap-4 p-3">
            {/* Show Records (Left) */}
            <div className="flex items-center gap-2">
              <span className="text-[#3b3b3b] font-montserrat font-bold text-base">Show</span>
              <div className="relative">
                <select
                  value={recordCount}
                  onChange={(e) => {
                    setRecordCount(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-white rounded-xl border border-gray-500 w-18 h-9 flex items-center justify-center text-[#3b3b3b] font-montserrat font-bold text-base appearance-none pl-4 pr-8 hover:scale-105 transition-all cursor-pointer"
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
              <span className="text-[#3b3b3b] font-montserrat font-bold text-base">Records</span>
            </div>

            {/* From Date and To Date (Center) */}
            <div className="flex items-center gap-4 mx-auto">
              <span className="text-[#3b3b3b] font-montserrat font-bold text-base">From Date</span>
              <div className="bg-white rounded-xl border border-gray-500 w-32 h-10 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  placeholder="From Date"
                  className="text-[#3b3b3b] font-montserrat font-bold text-xs bg-transparent outline-none w-full text-center"
                />
              </div>
              <span className="text-[#3b3b3b] font-montserrat font-bold text-base">To Date</span>
              <div className="bg-white rounded-xl border border-gray-500 w-32 h-9 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  placeholder="To Date"
                  className="text-[#3b3b3b] font-montserrat font-bold text-xs bg-transparent outline-none w-full text-center"
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

        {/* Data Table */}
        <div className="bg-gray-100 rounded-xl border border-black w-full min-h-[500px] shadow-md">
          {/* Table Header */}
          <div className="bg-white rounded-xl border border-gray-300 w-[calc(100%-2rem)] h-14 m-4 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 divide-x divide-black">
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 rounded-md border border-black w-8 h-8"></div>
                <span className="text-black font-montserrat font-bold text-base">Selected (0)</span>
              </div>
              <div className="flex items-center gap-4 pl-4">
                <Image src="/images/group2.svg" alt="Group Icon" width={25} height={25} />
                <span className="text-black font-montserrat font-bold text-base">Data</span>
              </div>
              <div className="flex items-center gap-4 pl-4">
                <Image src="/images/ic-twotone-location-on0.svg" alt="Location Icon" width={25} height={25} />
                <span className="text-black font-montserrat font-bold text-base">Location</span>
              </div>
            </div>
          </div>

          {/* Data Rows */}
          <div className="divide-y divide-black">
            {paginatedData.map((user, idx) => (
              <div key={idx} className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-x divide-black">
                  {/* Selected Column */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-200 rounded-md border border-black w-7 h-7"></div>
                       <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                        <Image src={`/images/raphael-edit${idx % 2}.svg`} alt="Edit" width={18} height={18} />
                      </div>
                       <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                        <Image src={`/images/group${4 + (idx % 2)}.svg`} alt="Group" width={18} height={18} />
                      </div>
                      <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                        <Image src={`/images/garden-eye-hide-fill-12${idx % 2}.svg`} alt="Eye" width={17} height={17} />
                      </div>
                    </div>
                    {/* check box */}
                    <div className="flex ml-12 items-center gap-4">
                      <div className="bg-white-600 rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                        <Image src={`/images/streamline-ultimate-single-neutral-actions-check-1-bold${idx % 2}.svg`} alt="Edit" width={24} height={24} />
                      </div>
                      <span className="text-black font-semibold text[10px]"> Admin </span>
                    </div>
                  </div>

                  {/* Data Column */}
                  <div className="flex flex-col gap-2 pl-4">
                    <div className="flex flex-row flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={`/images/material-symbols-person-${idx === 0 ? "40" : "3-rounded0"}.svg`}
                          alt="Person"
                          width={14}
                          height={14}
                          className="bg-blue-500 rounded-md"
                        />
                        <span className="text-black font-montserrat font-bold text-[13px]">{user.name}</span>
                      </div>
                      <span className="text-black font-montserrat font-medium text-[13px]">{user.associate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={`/images/mdi-email-check${idx % 2}.svg`} alt="Email Check" width={25} height={25} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={`/images/ic-sharp-phone${idx % 2}.svg`} alt="Phone" width={23} height={23} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={`/images/logos-whatsapp-icon${(idx % 2) + 1}.svg`} alt="WhatsApp" width={25} height={25} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={`/images/fa-transgender${idx % 2}.svg`} alt="Gender" width={20} height={25} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{user.gender}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={`/images/material-symbols-data-usage${idx % 2}.svg`} alt="Data Usage" width={24} height={24} />
                      <span className="text-black font-montserrat font-medium text-[13px]">{user.type}</span>
                    </div>
                  </div>

                  {/* Location Column */}
                  <div className="flex flex-col gap-2 pl-4">
                    {["Country: NA", "State: NA", "District: NA", "Pincode: NA", "Address: NA"].map((loc, locIdx) => (
                      <div key={locIdx} className="flex items-center gap-2">
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
                          width={25}
                          height={25}
                        />
                        <span className="text-black font-montserrat font-medium text-[13px]">{loc}</span>
                      </div>
                    ))}
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
              className="bg-white rounded-xl border border-gray-500 w-24 h-9 flex items-center justify-center text-[#3b3b3b] font-montserrat font-bold text-xs hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-[#3b3b3b] font-montserrat font-bold text-base">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-white rounded-xl border border-gray-500 w-24 h-9 flex items-center justify-center text-[#3b3b3b] font-montserrat font-bold text-xs hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}