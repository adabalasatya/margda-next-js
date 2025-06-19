"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

// Static provider data (API integration removed)
const providers = [
  {
    id: 1,
    name: "Arnav Singh",
    service: "Sales & Business",
    languages: ["Hindi", "English"],
    rate: 5,
    timing: "9 AM To 5 PM",
    image: "/images/pexels-italo-melo-881954-2379004-photoroom-10.png",
    callIcon: "/images/mage-phone-call-fill0.svg",
    status: "available",
    blurColor: "#ff6c08",
  },
  {
    id: 2,
    name: "Gurpreet Sidhu",
    service: "Marketing",
    languages: ["Hindi", "English", "Punjabi"],
    rate: 5,
    timing: "9 AM To 5 PM",
    image: "/images/pexels-ketut-subiyanto-4307884-photoroom-10.png",
    callIcon: "/images/mage-phone-call-fill1.svg",
    status: "unavailable",
    blurColor: "#0c6fff",
  },
];

// Reusable ServiceCard Component
const ServiceCard = ({ provider }) => {
  return (
    <div className="rounded-3xl bg-gray-100 shadow-2xl border border-gray-300 relative h-64 w-full max-w-[500px] mx-auto overflow-visible">
      <div
        className="absolute inset-0 rounded-full w-40 h-40 blur-2xl opacity-30 -left-0 -top-0"
        style={{ backgroundColor: provider.blurColor }}
      ></div>
      <div className="flex h-full relative">
        <div className="w-[380px] relative z-10 overflow-visible">
          <Image
            src={provider.image}
            alt={provider.name}
            width={150} 
            height={50}
            className="object-contain w-[300px] absolute left-0 top-[-30px]" 
            style={{ transform: "translateX(-20px)" }} 
            onError={(e) => { e.target.src = "/images/fallback-profile.png"; }} 
          />
        </div>
        <div className="w-2/3 p-4 relative z-20">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                provider.status === "available" ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <h3 className="text-xl font-semibold text-gray-800 truncate">{provider.name}</h3>
          </div>
          <p className="text-gray-800 font-semibold mt-2 truncate">{provider.service}</p>
          <p className="text-black text-xs mt-2">Language:</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            {provider.languages.map((lang, index) => (
              <span key={index} className="bg-white text-black rounded-full px-2 py-1 text-xs">
                {lang}
              </span>
            ))}
          </div>
          <p className="text-black text-xs mt-2">Talk: ₹{provider.rate}/Min</p>
          <p className="text-black text-xs">Timing: {provider.timing}</p>
          <div className="flex gap-2 mt-4">
            <button className="bg-[#5fd668] hover:scale-105 rounded-xl text-white text-xs px-4 py-1 flex items-center gap-1">
              <Image
                src={provider.callIcon}
                alt="Call"
                width={14}
                height={14}
                onError={(e) => { e.target.src = "/images/fallback-call-icon.svg"; }} // Fallback for missing icon
              />
              Call
            </button>
            <button className="bg-[#4f3e99] hover:scale-105 rounded-xl text-white text-xs px-4 py-1">
              Give Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServiceExchange() {
  return (
    <div
      className={`${montserrat.variable} bg-white rounded-tl-[46px] rounded-tr-[46px] min-h-screen relative overflow-hidden font-montserrat w-full max-w-[1280px] mx-auto`}
    >
      {/* Action Buttons */}
      <div className="flex justify-between px-6 md:px-8 pt-6">
        <button className="bg-[#3b3b3b] rounded-xl hover:scale-105 border border-gray-600 px-4 py-2 flex items-center gap-2">
          <Image src="/images/clip-path-group0.svg" alt="Recharge" width={20} height={20} />
          <span className="text-white">Recharge</span>
        </button>
        <button className="bg-[#3b3b3b] rounded-xl hover:scale-105 border border-gray-600 px-4 py-2 flex items-center gap-2">
          <Image src="/images/eos-icons-service-instance0.svg" alt="Add Service" width={20} height={20} />
          <span className="text-white">Add Service</span>
        </button>
      </div>

      {/* Header Section */}
      <div className="p-6 md:p-8 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF6C08] to-[#994105] bg-clip-text text-transparent">
          Service Exchange
        </h1>
        <p className="text-base font-bold text-gray-600 mt-2 max-w-3xl">
          Users click to instantly call service providers and pay by the minute to consult with experts.
        </p>
        <p className="text-base font-bold text-gray-600 max-w-3xl">
          Verified professionals can offer on-demand solutions on per-minute talk time and a freelancing or commission basis.
        </p>
      </div>

      {/* Service Type Toggle */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-[#ff6c08] rounded-xl text-white hover:scale-105 font-semibold px-6 py-2">
          Service offered
        </button>
        <button className="bg-[#ff6c08] rounded-xl text-white hover:scale-105 font-semibold px-6 py-2">
          Service required
        </button>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-8 bg-gradient-to-r from-[#0C6FFF] to-[#074399] bg-clip-text text-transparent">
        Service Offers
      </h2>

      {/* Filter Section */}
    <div className="flex flex-col md:flex-row gap-4 p-6 md:p-6 justify-center">
  {/* Service Type Select */}
  <div className="border border-gray-300 rounded-xl mt-2 flex-1 max-w-md relative flex items-center">
    <label htmlFor="service-type" className="sr-only">Select service type</label>
    <select
      id="service-type"
      className="w-full bg-transparent text-[#5e5e5e] font-semibold pl-4 pr-8 h-10 focus:outline-none rounded-xl appearance-none"
      aria-label="Select service type"
      defaultValue="" 
    >
      <option value="" disabled className="text-[#5e5e5e] opacity-70">
        Service Type
      </option>
      <option value="sales">Sales & Business</option>
      <option value="marketing">Marketing</option>
    </select>
    <Image
      src="/images/formkit-down0.svg"
      alt="Dropdown icon"
      width={12}
      height={12}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
      onError={(e) => { e.target.src = "/images/fallback-icon.svg"; }}
    />
  </div>

  {/* Service Select */}
  <div className="border border-gray-300 rounded-xl mt-2 flex-1 max-w-md relative flex items-center">
    <label htmlFor="service" className="sr-only">Select service</label>
    <select
      id="service"
      className="w-full bg-transparent text-[#5e5e5e] font-semibold pl-4 pr-8 h-10 focus:outline-none rounded-xl appearance-none"
      aria-label="Select service"
      defaultValue="" 
    >
      <option value="" disabled className="text-[#5e5e5e] opacity-70">
        Service
      </option>
      <option value="consulting">Consulting</option>
      <option value="strategy">Strategy</option>
    </select>
    <Image
      src="/images/formkit-down1.svg"
      alt="Dropdown icon"
      width={12}
      height={12}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
      onError={(e) => { e.target.src = "/images/fallback-icon.svg"; }}
    />
  </div>

  {/* Search Input */}
  <div className="border border-gray-300 rounded-xl mt-2 flex-1 max-w-md relative flex items-center">
    <label htmlFor="search" className="sr-only">Search service providers</label>
    <input
      id="search"
      type="text"
      placeholder="Search"
      className="w-full bg-transparent text-[#5e5e5e] font-semibold pl-4 pr-10 h-10 focus:outline-none rounded-xl"
      aria-label="Search service providers"
    />
    <Image
      src="/images/group1.svg"
      alt="Search icon"
      width={16}
      height={16}
      className="absolute right-3 top-1/2 transform -translate-y-1/2"
      onError={(e) => { e.target.src = "/images/fallback-icon.svg"; }}
    />
  </div>
</div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 p-6 md:p-8">
        {providers.map((provider) => (
          <ServiceCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}