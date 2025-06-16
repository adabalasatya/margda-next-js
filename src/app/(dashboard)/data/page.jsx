import React from "react";
import { 
  FiPlus,
  FiCheckCircle,
  FiUpload,
  FiList,
  FiCheckSquare,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiSearch
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="bg-white p-3 ml-4 mr-4">
      {/* Top Action Buttons */}
      <div className="flex space-x-3 mb-6">
        <button className="flex items-center bg-gradient-to-r from-blue-900 to-blue-600  text-white px-3 py-1 rounded-full text-xs hover:scale-105 font-bold shadow-xl">
          <FiSearch className="mr-2  text-lg" />
          BUSINESS
        </button>
        <button className="flex items-center bg-white border-2 border-gray-900 text-gray-700 px-4 py-2 rounded-full text-xs font-bold  hover:scale-105 shadow-xl">
          <FiPlus className="mr-2" />
          ADD DATA
        </button>
        <button className="flex items-center bg-gradient-to-r from-purple-900 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 shadow-xl">
          <FiCheckCircle className="mr-2" />
          VERIFY DATA
        </button>
        <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 shadow-xl">
          <FiUpload className="mr-2" />
          UPLOAD CSV
        </button>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 shadow-xl">
          <FiList className="mr-2" />
          SHORTLIST
        </button>
        <button className="flex items-center bg-orange-500 text-white px-8 py-2 rounded-full text-xs font-bold hover:scale-105 shadow-xl">
          <FiCheckSquare className="mr-2" />
          TASK
        </button>
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
          <p className="text-gray-500 text-lg">Data table content will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;