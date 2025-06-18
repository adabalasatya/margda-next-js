import React from "react";
import { 
  FiMessageSquare, 
  FiDatabase, 
  FiUsers,
  FiDollarSign,
  FiCreditCard,
  FiTrendingUp,
  FiRepeat,
  FiCalendar,
  FiSettings,
  FiFileText,
  FiBriefcase,
  FiPhone,
  FiUser,
  FiBook,
  FiBarChart,
  FiHeadphones,
  FiFolder,
  FiShield
} from "react-icons/fi";
import Image from "next/image";

const DashboardSidebar = () => {
  const menuItems = [
    { name: "Teams", icon: <FiUsers className="w-4 h-4 text-white" /> },
    { name: "Career Assessment", icon: <FiFileText className="w-4 h-4 text-white" /> },
    { name: "Template", icon: <FiFolder className="w-4 h-4 text-white" /> },
    { name: "Service", icon: <FiSettings className="w-4 h-4 text-white" /> },
    { name: "Product", icon: <FiBriefcase className="w-4 h-4 text-white" /> },
    { name: "Communication", icon: <FiMessageSquare className="w-4 h-4 text-white" /> },
    { name: "Selection Process", icon: <FiUser className="w-4 h-4 text-white" /> },
    { name: "Employee", icon: <FiUsers className="w-4 h-4 text-white" /> },
    { name: "Work Sector", icon: <FiBriefcase className="w-4 h-4 text-white" /> },
    { name: "Job Training", icon: <FiBook className="w-4 h-4 text-white" /> },
    { name: "Management", icon: <FiBarChart className="w-4 h-4 text-white" /> },
    { name: "HR Policy", icon: <FiShield className="w-4 h-4 text-white" /> },
    { name: "Study", icon: <FiBook className="w-4 h-4 text-white" /> },
    { name: "Business", icon: <FiBriefcase className="w-4 h-4 text-white" /> },
    { name: "Call", icon: <FiPhone className="w-4 h-4 text-white" /> },
    { name: "CRM", icon: <FiDatabase className="w-4 h-4 text-white" /> },
    { name: "Support", icon: <FiHeadphones className="w-4 h-4 text-white" /> },
    { name: "Documents", icon: <FiFolder className="w-4 h-4 text-white" /> },
    { name: "Advisory Board", icon: <FiShield className="w-4 h-4 text-white" /> }
  ];

  return (
    <div className="bg-black shadow-lg w-[250px] max-h-screen text-white flex flex-col border-r border-gray-300">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center border-b border-gray-300 sticky top-0 z-10">
        <div className="flex items-center">
          <div>
            <div className="flex">
              <Image
                src="/image/margdalogo.png"
                alt="MARGDA WorkPlace Logo"
                width={900} 
                height={90}
                className="object-contain p-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Stats Section */}
        <div className="px-5 py-6 mt-4 bg-blue-900/90 border border-white/10 rounded-lg mx-2">
          {[
            { icon: <FiMessageSquare className="w-4 h-4 text-white" />, text: "MESSAGES: 0" },
            { icon: <FiDatabase className="w-4 h-4 text-white" />, text: "DATA: ₹0" },
            { icon: <FiUsers className="w-4 h-4 text-white" />, text: "BUSINESSES: TEAM" },
            { icon: <FiDollarSign className="w-4 h-4 text-white" />, text: "WALLET: ₹0.00" },
            { icon: <FiCreditCard className="w-4 h-4 text-white" />, text: "ACCOUNT: ₹0.00" },
            { icon: <FiTrendingUp className="w-4 h-4 text-white" />, text: "INCOME: ₹0.00" },
            { icon: <FiRepeat className="w-4 h-4 text-white" />, text: "RECHARGE: ₹0.00" },
            { icon: <FiCalendar className="w-4 h-4 text-white" />, text: "VALIDITY: 6/14/2025" }
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-4 text-white">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-3">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-white">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Navigation Menu */}
        <div className="px-3 mt-4 mb-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-6 cursor-pointer hover:bg-blue-900 bg-blue-900/90 px-2 py-4 rounded-3xl text-white border border-white/90 transition-colors duration-200"
            >
              <div className="flex ml-4 items-center">
                <div className="w-5 h-5 mr-3 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-white">{item.name}</span>
              </div>
              <span className="text-xs opacity-70 text-white">▼</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;