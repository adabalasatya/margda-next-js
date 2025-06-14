'use client'

import React, { useState } from 'react';
import { Search, Phone, Star } from 'lucide-react';

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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      isActive: true,
      status: "Active",
      bgGradient: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      name: "Gurpreet Sidhu",
      category: "Marketing",
      languages: ["Hindi", "English", "Punjabi"],
      talk: "₹5/Min",
      timing: "9 AM To 5 PM",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      isActive: false,
      status: "Inactive",
      bgGradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors">
            <span className="text-lg">⚡</span>
            Recharge
          </button>
          
          <h1 className="text-4xl font-bold text-orange-500">Service Exchange</h1>
          
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors">
            <span className="text-lg">👍</span>
            Add Service
          </button>
        </div>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-lg mb-2">
            Users click to instantly call service providers and pay by the minute to consult with experts.
          </p>
          <p className="text-gray-600">
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
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Service Offers</h2>
          
          {/* Search and Filter Bar */}
          <div className="flex gap-4 mb-8 max-w-4xl mx-auto">
            <select className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Service Type</option>
              <option>Sales & Business</option>
              <option>Marketing</option>
              <option>Technology</option>
              <option>Consulting</option>
            </select>
            
            <select className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Service</option>
              <option>Business Development</option>
              <option>Digital Marketing</option>
              <option>Sales Strategy</option>
              <option>Brand Consulting</option>
            </select>
            
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Professional Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {professionals.map((professional) => (
              <div key={professional.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <img 
                      src={professional.image}
                      alt={professional.name}
                      className="w-24 h-24 rounded-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className={`w-24 h-24 bg-gradient-to-br ${professional.bgGradient} rounded-full items-center justify-center hidden`}>
                      <span className="text-white text-2xl font-bold">
                        {professional.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Professional Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-3 h-3 rounded-full ${professional.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className={`text-sm font-medium ${professional.isActive ? 'text-green-600' : 'text-red-600'}`}>
                        {professional.status}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{professional.name}</h3>
                    <p className="text-gray-600 font-medium mb-3">{professional.category}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Language:</p>
                      <div className="flex gap-2">
                        {professional.languages.map((lang, index) => (
                          <span key={index} className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-800">Talk: {professional.talk}</p>
                      <p className="text-sm text-gray-600">Timing: {professional.timing}</p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
                        <Phone className="w-4 h-4" />
                        Call
                      </button>
                      <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-colors">
                        Give Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}