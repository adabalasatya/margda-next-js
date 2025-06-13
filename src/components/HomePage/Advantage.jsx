import React from 'react';
import { Settings, Cloud, Heart, Users, BarChart3, Smartphone, TrendingUp, DollarSign } from 'lucide-react';

const MargdaWorkplaceAdvantage = () => {
  const features = [
    {
      icon: Settings,
      title: "Optimise Operations",
      description: "Workplace automates repetitive, time-consuming tasks so your team can focus on what matters most: building relationships and closing deals.",
      isOrange: true
    },
    {
      icon: Cloud,
      title: "Cloud Platform", 
      description: "Built with enterprise-grade secure & scalable servers to grow with your business.",
      isOrange: false
    },
    {
      icon: Heart,
      title: "Enhance Satisfaction",
      description: "Deliver personalised experiences and proactive support through unified communication.",
      isOrange: true
    },
    {
      icon: Users,
      title: "Efficient Collaboration",
      description: "Foster seamless communication, and leads sharing among team members.",
      isOrange: false
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Focus on the metrics that matter most. Get real-time, actionable insights into sales, marketing, and customer service performance.",
      isOrange: false
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Access your Workplace features on the go, anytime, anywhere.",
      isOrange: true
    },
    {
      icon: TrendingUp,
      title: "Boost Sales Productivity",
      description: "Focus your team on qualified leads with verified data and automated follow-ups turning processes into profits.",
      isOrange: false
    },
    {
      icon: DollarSign,
      title: "Flexible Pricing",
      description: "Margda offers both recharge and subscription pricing plans setting the pace to empower businesses of all sizes for sustainable growth.",
      isOrange: true
    }
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-400 text-lg mb-6 font-normal tracking-wide">
            Margda Workplace Advantage
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your <span className="text-orange-500">Business</span> Flow
          </h2>
          <p className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed font-light">
            Everything you need to streamline operations and accelerate growth with cutting-edge technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border-gray-200 border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-56"
              >
                <div className={`mb-4 p-3 rounded-xl w-fit ${
                  feature.isOrange 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'bg-blue-900 text-blue-400'
                }`}>
                  <IconComponent size={28} strokeWidth={2} />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  feature.isOrange 
                    ? 'text-orange-600' 
                    : 'text-blue-400'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${
                  feature.isOrange 
                    ? 'text-orange-700' 
                    : 'text-blue-700'
                }`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Promo Banner */}
        <div className="bg-[#363333] rounded-[25px] p-6 flex flex-col items-center justify-center text-center h-[350px] font-['Montserrat']">
          {/* Main Heading */}
          <h1 className="text-[36px]   bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold mb-6">
            Ready to Transform <span className="uppercase">Your Business?</span>
          </h1>

          {/* Subtext */}
          <p className="text-[24px] font-semibold text-white mb-2">
            Book a personalized demo to see Margda Workplace in action
          </p>
          <p className="text-[24px] font-semibold text-white mb-8">
            Dedicated support to help you get started
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className=" bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold text-[22px] py-4 px-8 rounded-[34px] w-[300px] h-[85px] flex items-center justify-center gap-3 border border-white">
              Request a Demo
              <div className="w-[45px] h-[45px] bg-gradient-to-b from-[#D9D9D9] to-[#FF6C08] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <button className=" bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold text-[24px] py-4 px-8 rounded-[34px] w-[300px] h-[85px] flex items-center justify-center gap-3 border border-white">
              Start Free Trial
              <div className="w-[45px] h-[45px] bg-gradient-to-b from-[#D9D9D9] to-[#0C6FFF] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MargdaWorkplaceAdvantage;