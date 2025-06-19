import React from "react";
import Image from "next/image";

const DashboardSidebar = () => {
  const menuItems = [
    { name: "Teams", icon: "/fluent-people-team-28-filled0.svg" },
    { name: "Career Assessment", icon: "/fluent-people-team-toolbox-24-filled0.svg" },
    { name: "Template", icon: "/carbon-template0.svg" },
    { name: "Service", icon: "/mdi-customer-service0.svg" },
    { name: "Product", icon: "/eos-icons-product-subscriptions0.svg" },
    { name: "Communication", icon: "/mask-group1.svg" },
    { name: "Selection Process", icon: "/streamline-ultimate-messages-people-user-check-bold0.svg" },
    { name: "Employee", icon: "/group15.svg" },
    { name: "Work Sector", icon: "/streamline-ultimate-job-search-man-bold0.svg" },
    { name: "Job Training", icon: "/group26.svg" },
    { name: "Management", icon: "/bxs-school0.svg" },
    { name: "HR Policy", icon: "/ic-twotone-menu-book0.svg" },
    { name: "Study", icon: "/hugeicons-study-lamp0.svg" },
    { name: "Business", icon: "/ic-twotone-business-center0.svg" },
    { name: "Call", icon: "/group27.svg" },
    { name: "CRM", icon: "/fa-6-solid-comment-nodes0.svg" },
    { name: "Support", icon: "/fluent-person-support-16-filled0.svg" },
    { name: "Documents", icon: "/group28.svg" },
    { name: "Advisory Board", icon: "/ic-twotone-admin-panel-settings0.svg" },
  ];

  const statsItems = [
    { icon: "/ic-baseline-message0.svg", text: "MESSAGES: 0" },
    { icon: "/bxs-data1.svg", text: "DATA: ₹0" },
    { icon: "/tdesign-user-business-filled0.svg", text: "BUSINESSES: TEAM" },
    { icon: "/f-7-wallet-fill0.svg", text: "WALLET: ₹0.00" },
    { icon: "/ic-round-account-circle0.svg", text: "ACCOUNT: ₹0.00" },
    { icon: "/clip-path-group1.svg", text: "INCOME: ₹0.00" },
    { icon: "/clip-path-group0.svg", text: "RECHARGE: ₹0.00" },
    { icon: "/group-552.svg", text: "VALIDITY: xx/xx/xx" },
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
          {statsItems.map((item, index) => (
            <div key={index} className="flex items-center mb-4 text-white">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-3">
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={16}
                  height={16}
                  className="text-white"
                />
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
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={16}
                    height={16}
                    className="text-white"
                  />
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