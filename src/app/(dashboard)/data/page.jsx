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
    <div className="bg-white p-6 shadow-lg ml-4 mr-4">
      {/* Top Action Buttons */}
      <div className="flex space-x-3 mb-6">
        <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiSearch className="mr-2" />
          BUSINESS
        </button>
        <button className="flex items-center bg-white border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-full text-xs font-bold shadow-sm">
          <FiPlus className="mr-2" />
          ADD DATA
        </button>
        <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiCheckCircle className="mr-2" />
          VERIFY DATA
        </button>
        <button className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiUpload className="mr-2" />
          UPLOAD CSV
        </button>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiList className="mr-2" />
          SHORTLIST
        </button>
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiCheckSquare className="mr-2" />
          TASK
        </button>
      </div>

      {/* Communication Buttons */}
      <div className="flex space-x-3 mb-6">
        <button className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiMail className="mr-2" />
          Email
        </button>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FaWhatsapp className="mr-2" />
          WhatsApp
        </button>
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiMessageCircle className="mr-2" />
          SMS
        </button>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiPhone className="mr-2" />
          Call
        </button>
        <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiMessageSquare className="mr-2" />
          Meet
        </button>
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiMapPin className="mr-2" />
          Visit
        </button>
        <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <FiMessageSquare className="mr-2" />
          Report
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-100 rounded-xl p-4 mb-4">
        <div className="flex space-x-4">
          {["Data Type", "Country", "State", "District", "Pin Code", "All Data"].map((item) => (
            <select key={item} className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs font-bold text-gray-700">
              <option>{item}</option>
            </select>
          ))}
        </div>
      </div>

      {/* Search and Controls */}
      <div className="bg-gray-100 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-sm font-bold">Show</span>
              <input type="number" className="w-16 bg-white border border-gray-300 rounded px-2 py-1 text-sm" placeholder="10" />
              <span className="text-gray-700 text-sm font-bold">Records</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-xs font-bold">From Date</span>
              <input type="date" className="bg-white border border-gray-300 rounded px-2 py-1 text-xs" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-xs font-bold">To Date</span>
              <input type="date" className="bg-white border border-gray-300 rounded px-2 py-1 text-xs" />
            </div>
          </div>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm w-64"
            />
          </div>
        </div>
      </div>

      {/* Data Table Area */}
      <div className="bg-gray-100 rounded-xl p-6 h-96">
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-lg">Data table content will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;