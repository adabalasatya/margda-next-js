"use client"

import React, { useState, useRef, useEffect } from "react";
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

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

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing auth tokens)
    router.push('/'); // Redirect to home page
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white h-[94px] relative">
      {/* Main navbar content */}
      <div className="relative z-10 flex justify-between items-center p-4 h-full ml-[120px]">
        <div className="flex space-x-12">
          {/* Navigation Buttons */}
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(item.text, item.route)}
              className={`flex items-center shadow-lg h-[48px] px-6 border border-[#fcf7f7] rounded-[18px] text-[15px] font-bold hover:scale-105 transition-all ${
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
        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center bg-white mr-6 shadow-lg h-[43px] rounded-[22px] px-8 border border-blue-800 cursor-pointer"
            onClick={handleProfileClick}
          >
            <div className="w-[29px] h-[29px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mr-3 flex items-center justify-center">
              <FiUser className="text-white text-sm" />
            </div>
            <div className="text-center">
              <div className="text-black text-xs font-bold">Admin</div>
              <div className="text-gray-600 text-[10px]">admin@gmail.com</div>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-12 mt-2 w-32 bg-white border border-blue-300 border-solid rounded-xl shadow-lg py-1 z-20">
              <button
                onClick={handleLogout}
                className="block text-center px-8 py-1 text-sm text-gray-900 hover:scale-105"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;