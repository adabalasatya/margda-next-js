"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  ChevronDown, 
  Mail, 
  MessageCircle, 
  MessageSquare, 
  Phone, 
  Video, 
  MapPin, 
  AlertTriangle 
} from 'lucide-react';

const LeadComponent = () => {
  const [showRecords, setShowRecords] = useState('10');

  return (
    <div className="min-h-screen bg-white p-6 shadow-lg mx-4">
      {/* Top Header: From/To Date and Search */}
      <div className="flex items-center justify-between mb-6">
        {/* Left Side - Date Selectors */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 text-sm font-bold">From Date</span>
            <div className="relative">
              <input
                type="date"
                className="bg-white border border-gray-300 rounded px-2 py-1 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 text-sm font-bold">To Date</span>
            <div className="relative">
              <input
                type="date"
                className="bg-white border border-gray-300 rounded px-2 py-1 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        {/* Right Side - Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
        </div>
      </div>

      {/* Communication Buttons */}
      <div className="flex space-x-3 mb-6">
        <button className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-gray-700 transition-colors">
          <Mail className="w-4 h-4 mr-2" />
          Email
        </button>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-green-600 transition-colors">
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </button>
        <button className="flex items-center bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-orange-700 transition-colors">
          <MessageSquare className="w-4 h-4 mr-2" />
          SMS
        </button>
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-blue-700 transition-colors">
          <Phone className="w-4 h-4 mr-2" />
          Call
        </button>
        <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-purple-700 transition-colors">
          <Video className="w-4 h-4 mr-2" />
          Meet
        </button>
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-gray-800 transition-colors">
          <MapPin className="w-4 h-4 mr-2" />
          Visit
        </button>
        <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-red-700 transition-colors">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Report
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-100 rounded-xl p-4 mb-4">
        <div className="flex space-x-4">
          {["Data Type", "Country", "State", "District", "Pin Code", "All Data"].map((item) => (
            <div key={item} className="relative">
              <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs font-bold text-gray-700 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>{item}</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Search and Controls */}
      <div className="bg-gray-100 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-sm font-bold">Show</span>
              <input
                type="number"
                value={showRecords}
                onChange={(e) => setShowRecords(e.target.value)}
                className="w-16 bg-white border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="10"
              />
              <span className="text-gray-700 text-sm font-bold">Records</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-xs font-bold">From Date</span>
              <div className="relative">
                <input
                  type="date"
                  className="bg-white border border-gray-300 rounded px-2 py-1 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-xs font-bold">To Date</span>
              <div className="relative">
                <input
                  type="date"
                  className="bg-white border border-gray-300 rounded px-2 py-1 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Data Table Area */}
      <div className="bg-gray-100 rounded-xl p-6 h-96">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No records found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters to find records.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadComponent;