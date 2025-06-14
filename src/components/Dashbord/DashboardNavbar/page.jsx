"use client" 

import React, { useState } from "react";
import { 
  FiDatabase, 
  FiUsers, 
  FiShoppingCart, 
  FiMessageSquare,
  FiUser
} from "react-icons/fi";
import { useRouter } from "next/navigation";

const DashboardNavbar = () => {
  const [activeButton, setActiveButton] = useState("DATA");
  const router = useRouter();

  const navItems = [
    { icon: <FiDatabase className="mr-2" />, text: "DATA", route: "/data" },
    { icon: <FiUsers className="mr-2" />, text: "LEAD", route: "/lead" },
    { icon: <FiUser className="mr-2" />, text: "SERVICES", route: "/service-exchange" },
    { icon: <FiShoppingCart className="mr-2" />, text: "MART", route: "/mart" },
    { icon: <FiMessageSquare className="mr-2" />, text: "TEAM SUPPORT", route: "/team-support" }
  ];

  const handleButtonClick = (text, route) => {
    setActiveButton(text);
    router.push(route);
  };

  return (
    <div className="bg-white h-[94px] shadow-lg  relative rounded-t-lg border border-gray-200">
      
      {/* Main navbar content */}
      <div className="relative z-10 flex justify-between items-center p-4 h-full ml-[120px]">
        <div className="flex space-x-12">
          {/* Navigation Buttons */}
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(item.text, item.route)}
              className={`flex items-center shadow-md h-[48px] px-6 rounded-[24px] text-xs font-bold hover:shadow-lg transition-all ${
                activeButton === item.text
                  ? "bg-gradient-to-b from-[#053772] to-[#0968D8] text-white"
                  : "bg-gradient-to-b from-[#053772] to-[#0968D8] text-white"
              }`}
            >
              {item.icon}
              {item.text}
            </button>
          ))}
        </div>

        {/* Profile Section */}
        <div className="flex items-center bg-white mr-6 shadow-md h-[43px] rounded-[22px] px-4 border border-blue-800">
          <div className="w-[29px] h-[29px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mr-3 flex items-center justify-center">
            <FiUser className="text-white text-sm" />
          </div>
          <div className="text-right">
            <div className="text-black text-xs font-bold">PAWAN CHAUHAN</div>
            <div className="text-gray-600 text-[10px]">pawanchauchan@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;