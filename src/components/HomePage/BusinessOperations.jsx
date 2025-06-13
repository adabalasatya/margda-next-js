'use client';

import React, { useState } from 'react';
import { CheckCircle, Phone, Zap, Network } from 'lucide-react';
import Image from 'next/image';

// Define tab content data
const tabs = [
  { id: 'verified-data', label: 'Verified Data', icon: CheckCircle },
  { id: 'unified-communication', label: 'Unified Communication', icon: Phone },
  { id: 'smart-tools', label: 'Smart Tools', icon: Zap },
  { id: 'service-networks', label: 'Service Networks', icon: Network },
];

const BusinessOperationsTabs = () => {
  const [activeTab, setActiveTab] = useState('verified-data');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'verified-data':
        return (
          <div
            className="flex flex-col lg:flex-row items-center justify-between p-10 rounded-2xl min-h-[700px] bg-cover bg-center border-2 border-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/image/VD/bg.png)`,
            }}
          >
            <div className="flex-1 text-white space-y-4">
              <p className="text-lg leading-relaxed mb-4" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
                In today's fast-paced world, inaccurate and outdated data is a 
                silent killer of productivity and profitability. Margda provides 
                access to personally curated data filtered by country, state, 
                district, and pin codes.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
                We also ensure your data at the Workplace is secured and in 
                your control. Our adherence to strict privacy policy encrypts to 
                anonymise customers' data as per global data protection 
                regulations.
              </p>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-orange-400 mb-3" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.6)' }}>
                  Key Features
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                    <span className="text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Data filtered by location
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                    <span className="text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Encrypted and anonymized
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                    <span className="text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Global compliance
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/image/VD/fg.png"
                  alt="Verified Data"
                  width={512} // w-128 = 32rem = 512px (assuming default Tailwind config)
                  height={512} // h-128 = 32rem = 512px
                  className="object-contain rounded-lg"
                  priority={activeTab === 'verified-data'}
                />
              </div>
            </div>
          </div>
        );

      case 'unified-communication':
        return (
          <div
            className="flex flex-col lg:flex-row items-center justify-between p-10 rounded-2xl min-h-[700px] bg-cover bg-center border-2 border-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/image/UC/bg.png)`,
            }}
          >
            <div className="flex-1 text-white space-y-6">
              <p className="text-lg leading-relaxed mb-6" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
                Stop juggling multiple platforms and missing crucial customer 
                interactions. Margda workplace's omnichannel communication 
                hub brings all your conversations into one dashboard to 
                seamlessly connect with your customers like never before:
              </p>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-extrabold text-orange-400 mb-4" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.6)' }}>
                  Key Features
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-orange-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Calls:
                    </h4>
                    <p className="text-lg leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Instantly connect with your clients without dialling their 
                      numbers via built-in SIM or web telephony and record 
                      meaningful conversations. With IVR, you can also greet and 
                      direct your client to various functional staff members in your 
                      organisation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-orange-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Email:
                    </h4>
                    <p className="text-lg leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Send personalised, multiple emails bearing your brand 
                      identity to your targeted audience at the click of a button. Also, 
                      get notifications, whenever your emails are being opened so that 
                      you can connect with your clients at the right time when your 
                      mail is being read.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-orange-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      WhatsApp:
                    </h4>
                    <p className="text-lg leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Engage in real-time actionable conversations 
                      through media-rich, branded WhatsApp messages from your 
                      SIM or API, without touching your smartphone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/image/UC/fg.png"
                  alt="Unified Communication"
                  width={512}
                  height={512}
                  className="object-contain rounded-lg"
                  priority={activeTab === 'unified-communication'}
                />
              </div>
            </div>
          </div>
        );

      case 'smart-tools':
        return (
          <div
            className="flex flex-col lg:flex-row items-center justify-between p-10 rounded-2xl min-h-[700px] bg-cover bg-center border-2 border-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/image/ST/bg.png)`,
            }}
          >
            <div className="flex-1 text-white space-y-6">
              <p className="text-lg leading-relaxed mb-6" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
                Use technology to streamline and automate repetitive tasks, 
                improving efficiency, accuracy, and scalability while maintaining 
                a human touch. It saves money, valuable time, and resources.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-3xl totallyextrabold text-orange-400 mb-4" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.6)' }}>
                  Key Features
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-orange-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Marketing and Sales:
                    </h4>
                    <p className="text-lg leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Close more deals 3X faster. Get curated 
                      data, design templates, and schedule personalised and targeted 
                      marketing campaigns to generate abundant leads. Next, assign 
                      leads to various Tasks, and prioritise leads on engagement 
                      patterns to close more and more leads.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-orange-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Communication and Collaboration:
                    </h4>
                    <p className="text-lg leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Connect through Calls, 
                      WhatsApp, SMS, Email, Meet, etc. from the Workplace window, 
                      set follow-ups to never miss an opportunity with AI-triggered 
                      personalised voice reminders.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-orange-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Orders and Payments:
                    </h4>
                    <p className="text-lg leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Generate customised invoices, and 
                      proposals, streamlines order and payment tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/image/ST/fg.png"
                  alt="Smart Tools"
                  width={512}
                  height={512}
                  className="object-contain rounded-lg"
                  priority={activeTab === 'smart-tools'}
                />
              </div>
            </div>
          </div>
        );

      case 'service-networks':
        return (
          <div
            className="flex flex-col lg:flex-row items-center justify-between p-10 rounded-2xl min-h-[700px] bg-cover bg-center border-2 border-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/image/SN/bg.png)`,
            }}
          >
            <div className="flex-1 text-white space-y-6">
              <p className="text-lg leading-relaxed mb-6" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
                Most people do not use the knowledge, skills, and expertise they 
                have acquired. The Workplace has created a platform where 
                people can provide telephonic services and solutions to 
                individuals and businesses. Additionally, users can post their 
                requirements related to different products and services, and 
                Advisors get instant notifications.
              </p>
              
              <p className="text-lg leading-relaxed mb-6" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
                The Advisors can quote their per-minute rates for telephonic 
                advice. Once a prepaid user calls an Advisor, the amount is 
                deducted based on the talk time from the recharge amount, and 
                the Advisor receives instant payment transferred to the wallet.
              </p>
              
              <div className="space-y-1">
                <h3 className="text-3xl font-extrabold text-orange-400 mb-4" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.6)' }}>
                  Key Features
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded flex items-center justify-center">
                      <span className="text-white text-sm">🏢</span>
                    </div>
                    <span className="text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Business and Industry
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded flex items-center justify-center">
                      <span className="text-white text-sm">🎓</span>
                    </div>
                    <span className="text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Education and Career
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-400 rounded flex items-center justify-center">
                      <span className="text-white text-sm">💰</span>
                    </div>
                    <span className="text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                      Finance and Insurance
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/image/SN/fg.png"
                  alt="Service Networks"
                  width={512}
                  height={512}
                  className="object-contain rounded-lg"
                  priority={activeTab === 'service-networks'}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Transform Your <span className="text-orange-400">Business Operations</span>
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-lg transform scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-102'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {/* Pointer indicator */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-gray-800"></div>
        
        {/* Content */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default BusinessOperationsTabs;