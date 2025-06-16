'use client'

import React, { useState } from 'react';
import { Search, Phone, Star, Headset } from 'lucide-react';
import { FaRupeeSign, FaPlusCircle, FaHeadset, FaPhone, FaStar} from 'react-icons/fa';

const ProfessionalCard = ({
  name,
  category,
  languages,
  talk,
  timing,
  image,
  isActive,
  bgGradient,
}) => {
  const blurColor = bgGradient.split(' ')[0].replace('from-', 'bg-');

  return (
    <div className="relative border border-gray-200 rounded-[30px] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-2 w-full max-w-[500px] font-montserrat overflow-hidden">
      {/* Profile Image - positioned absolutely to match reference */}
      <div className="absolute left-0 top-0 w-[220px] h-full rounded-l-[30px] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Blur effect behind image */}
      <div
        className={`absolute w-[170px] h-full rounded-l-[30px] left-0 top-0 blur-[25px] opacity-20 ${blurColor}`}
      />
      
      {/* Content area */}
      <div className="ml-[240px] relative z-10 py-1">
        <div className="flex items-center gap-2 mt-2 mb-1">
          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className={`text-xs font-semibold ${isActive ? 'text-green-600' : 'text-red-600'}`}>
            {isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
        
        <h3 className="text-[28px] font-bold text-gray-900 leading-tight mb-1">
          {name}
        </h3>
        
        <p className="text-lg font-semibold text-gray-700 mb-1">
          {category}
        </p>
        
        <div className="mb-1">
          <span className="block text-sm font-medium text-gray-800 mb-1">Language:</span>
          <div className="flex gap-2 flex-wrap">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-800 border border-gray-200"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-1">
          <span className="block text-sm font-medium text-gray-800">Talk: {talk}</span>
          <span className="block text-sm font-medium text-gray-800">Timing: {timing}</span>
        </div>
        
        <div className="flex gap-2 mt-2">
          <button
            className="flex items-center gap-2 px-4 py-1 bg-green-500 rounded-full shadow-md text-white text-sm font-semibold hover:scale-105 transition-colors"
            aria-label="Call"
          >
            <FaPhone className="text-xs" />
            Call
          </button>
          <button
            className="flex items-center gap-2 px-4 py-1 bg-purple-900 rounded-full shadow-md text-white text-sm font-semibold hover:scale-105 transition-colors"
            aria-label="Give Review"
          >
            <FaStar className="text-xs" />
            Give Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ServiceExchange() {
  const [activeTab, setActiveTab] = useState('offered');
  const [searchTerm, setSearchTerm] = useState('');

  const professionals = [
    {
      id: 1,
      name: "Arnav Singh",
      category: "Sales & Business",
      languages: ["Hindi", "English"],
      talk: "₹5/Min",
      timing: "9 AM To 5 PM",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      isActive: true,
      status: "Active",
      bgGradient: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      name: "Gurpreet Sidhu",
      category: "Marketing",
      languages: ["Hindi", "English", "Punjabi"],
      talk: "₹5/Min",
      timing: "9 AM To 5 PM",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      isActive: false,
      status: "Inactive",
      bgGradient: "from-green-500 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen p-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button className="bg-gradient-to-r from-gray-900 to-gray-600 text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
            <FaRupeeSign className="text-lg" />
            Recharge
          </button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-[#994004] bg-clip-text text-transparent">
            Service Exchange
          </h1>
          <button className="bg-gradient-to-r from-gray-600 to-gray-900 text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
            <FaPlusCircle className="text-lg" />
            Add Service
          </button>
        </div>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-gray-700 font-semibold text-md mb-2">
            Users click to instantly call service providers and pay by the minute to consult with experts.
          </p>
          <p className="text-gray-700 font-semibold text-md">
            Verified professionals can offer on-demand solutions on per-minute talk time and a freelancing or commission basis.
          </p>
        </div>

        {/* Service Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('offered')}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
              activeTab === 'offered'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-orange-50'
            }`}
          >
            Service offered
          </button>
          <button
            onClick={() => setActiveTab('required')}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
              activeTab === 'required'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-orange-50'
            }`}
          >
            Service required
          </button>
        </div>

        {/* Service Offers Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-[#074299] bg-clip-text text-transparent mt-4">
            Service Offers
          </h2>
          
          {/* Search and Filter Bar */}
          <div className="flex gap-4 mb-8 max-w-4xl mx-auto">
            <select className="flex-1 px-4 py-3 bg-white border border-blue-400 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Service Type</option>
              <option>Sales & Business</option>
              <option>Marketing</option>
              <option>Technology</option>
              <option>Consulting</option>
            </select>
            <select className="flex-1 px-4 py-3 bg-white border border-blue-400 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Service</option>
              <option>Business Development</option>
              <option>Digital Marketing</option>
              <option>Sales Strategy</option>
              <option>Brand Consulting</option>
            </select>
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-gray-900 font-bold bg-white border border-blue-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Professional Cards */}
          <div className="grid md:grid-cols-2 gap-2 max-w-7xl mx-auto">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} {...professional} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}