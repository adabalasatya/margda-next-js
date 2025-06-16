"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
} from 'lucide-react';
import { 
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiSearch
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const LeadComponent = () => {
  const [showRecords, setShowRecords] = useState('10');

  return (
    <div className="min-h-screen p-3 mx-4">
      {/* Top Header: From/To Date and Search */}
      <div className="flex items-center justify-between mb-6">
        {/* Left Side - Date Selectors */}
       <div className="flex items-center space-x-4">
  {/* From Date */}
  <div className="flex items-center space-x-2">
    <span className="text-gray-900 text-[13px] font-bold flex items-center space-x-1">
       <Calendar className="w-4 h-4 mr-2 tex-lg text-gray-900" />
      From Date
    </span>
    <div>
      <input
        type="date"
        className="bg-white border border-gray-900 rounded-xl px-2 py-2 text-xs"
      />
    </div>
  </div>

  {/* To Date */}
  <div className="flex items-center space-x-2">
    <span className="text-gray-900 text-[13px] font-bold flex items-center space-x-1">
       <Calendar className="w-4 h-4 mr-2 text-gray-900" />
      To Date
    </span>
    <div>
      <input
        type="date"
        className="bg-white border border-gray-900 rounded-xl px-2 py-2 text-xs "
      />
    </div>
  </div>
</div>

        {/* Right Side - Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 mb-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-700" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-full text-md font-bold text-gray-900"
          />
        </div>
      </div>

       {/* Communication Buttons */}
            <div className="flex space-x-3 mb-6">
              <button className="flex items-center bg-gray-600 text-white px-6 py-2 rounded-full text-[14px] font-bold hover:scale-105 shadow-xl">
                <FiMail className="mr-2 text-lg" />
                Email
              </button>
              <button className="flex items-center bg-green-500 text-white px-3 py-2 rounded-full text-[14px] font-bold hover:scale-105 shadow-xl">
                <FaWhatsapp className="mr-2 text-lg" />
                WhatsApp
              </button>
              <button className="flex items-center bg-gradient-to-r from-orange-900 to-orange-600 text-white px-9 py-2 rounded-full text-[14px] font-bold hover:scale-105 shadow-xl">
                <FiMessageCircle className="mr-2 text-lg" />
                SMS
              </button>
              <button className="flex items-center bg-gradient-to-r from-blue-900 to-blue-600 text-white px-10 py-2 rounded-full text-[14px] font-bold hover:scale-105 shadow-xl">
                <FiPhone className="mr-2 text-lg" />
                Call
              </button>
              <button className="flex items-center bg-gradient-to-r from-purple-900 to-purple-600  text-white px-8 py-2 rounded-full text-[14px] font-bold hover:scale-105 shadow-xl">
                <FiMessageSquare className="mr-2" />
                Meet
              </button>
              <button className="flex items-center bg-gray-700 text-white px-8 py-2 rounded-full text-[14px] font-bold hover:scale-105 shadow-xl">
                <FiMapPin className="mr-2" />
                Visit
              </button>
              <button className="flex items-center  ml-78 bg-red-500 text-white px-8 py-2 rounded-full text-xs font-bold hover:scale-105 shadow-xl">
                <FiMessageSquare className="mr-2" />
                Report
              </button>
            </div>

       {/* Filter Section */}
      <div className="bg-[rgba(217,217,217,1.00)] border border-gray-400  shadow-[2.0px_3.0px_4.0px_0.0px_rgba(0,0,0,0.25)] rounded-xl border-solid p-4 mb-4">
        <div className="flex space-x-8">
          {["Data Type", "Country", "State", "District", "Pin Code", "All Data"].map((item) => (
            <select key={item} className="bg-white border border-gray-900 border-solid rounded-xl px-12 py-2 text-[15px] shadow-lg font-bold text-gray-700">
              <option>{item}</option>
            </select>
          ))}
        </div>
      </div>

       {/* Search and Controls */}
           <div className="bg-[rgba(217,217,217,1.00)] border border-gray-400  shadow-[2.0px_3.0px_4.0px_0.0px_rgba(0,0,0,0.25)] rounded-xl border-solid rounded-xl p-4 mb-4">
             <div className="flex justify-between ml-8 items-center">
               <div className="flex items-center space-x-4">
                 <div className="flex items-center space-x-2">
                   <span className="text-gray-900 text-[15px] font-bold">Show</span>
                   <input type="number" className="w-16 bg-white border border-gray-900 rounded-xl px-2 py-2 text-sm" placeholder="10" />
                   <span className="text-gray-900 text-[15px] font-bold">Records</span>
                 </div>
                 <div className="flex items-center ml-24 space-x-2">
                   <span className="text-gray-900 text-[15px] font-bold">From Date</span>
                   <input type="date" className="bg-white border border-gray-900 rounded-xl px-2 py-2 text-xs" />
                 </div>
                 <div className="flex items-center space-x-2">
                   <span className="text-gray-900 text-[15px] font-bold">To Date</span>
                   <input type="date" className="bg-white border border-gray-900 rounded-xl px-2 py-2 text-xs" />
                 </div>
               </div>
               <div className="relative">
                 <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                 <input 
                   type="text" 
                   placeholder="Search" 
                   className="bg-white border border-gray-300  text-black font-bold rounded-full pl-10 pr-4 py-2 text-sm w-64"
                 />
               </div>
             </div>
           </div>

      {/* Data Table Area */}
      <div className="bg-[rgba(217,217,217,1.00)] border border-gray-400 shadow-[2.0px_3.0px_4.0px_0.0px_rgba(0,0,0,0.25)] rounded-xl border-solid p-6 h-96">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No records found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters to find records.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadComponent;