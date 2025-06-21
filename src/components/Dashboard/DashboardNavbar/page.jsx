// components/Dashboard/DashboardNavbar/page.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DashboardNavbar = () => {
  const [activeButton, setActiveButton] = useState("DATA");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const navItems = [
    { img: "/images/bxs-data0.svg", text: "DATA", route: "/data" },
    { img: "/images/fluent-mdl-2-party-leader0.svg", text: "LEAD", route: "/lead" },
    { img: "/images/mdi-account-service0.svg", text: "SERVICES", route: "/service-exchange" },
    { img: "/images/mdi-cart0.svg", text: "MART", route: "/mart" },
    { text: "TEAM SUPPORT", route: "/team-support" },
  ];

  const handleButtonClick = (text, route) => {
    setActiveButton(text);
    router.push(route);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    // Add logout logic here (e.g., clear auth tokens)
    router.push("/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white relative font-montserrat">
      {/* Main navbar content */}
      <div className="relative z-10 flex justify-between items-center p-4 ">
    
        {/* Navigation Buttons */}
        <div className="flex flex-wrap ml-48 gap-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(item.text, item.route)}
              className={`flex items-center p-3 px-6 border border-[0968D8] border-solid rounded-[17px] text-[15px] font-bold transition-all hover:scale-105 shadow-md ${
                activeButton === item.text
                  ? "bg-gradient-to-b from-[#053772] to-[#0968D8] text-white"
                  : "bg-gradient-to-b from-[#053772] to-[#0968D8] text-white"
              }`}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt={`${item.text} icon`}
                  width={20}
                  height={20}
                  className="mr-2"
                />
              )}
              {item.text}
            </button>
          ))}
        </div>

        {/* Profile Section */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center bg-white mr-6 shadow-md h-[43px] rounded-[22px] px-8 border border-blue-800 cursor-pointer"
            onClick={handleProfileClick}
          >
            <Image
              src="/images/ellipse-780.png"
              alt="Admin Avatar"
              width={29}
              height={29}
              className="rounded-full mr-3"
            />
            <div className="text-center">
              <div className="text-black text-xs font-bold">Admin</div>
              <div className="text-gray-600 text-[10px]">admin@gmail.com</div>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-12 mt-2 w-32 bg-white border border-blue-300 rounded-xl shadow-lg py-1 z-20">
              <button
                onClick={handleLogout}
                className="block w-full text-center px-8 py-1 text-sm text-gray-900 hover:bg-gray-100"
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