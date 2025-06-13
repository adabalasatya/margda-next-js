'use client';

import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, MessageCircle, Linkedin, Home, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Logo and Stay Updated in same line */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          {/* Logo */}
          <div>
            <Image
              src="/image/margdalogo1.png"
              alt="Margda WorkPlace Logo"
              width={224} 
              height={64}
              className="md:h-24 md:w-64"
              priority // Load logo eagerly as it's above the fold
            />
          </div>
          
          {/* Stay Updated Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:ml-16">
            <h3 className="text-2xl md:text-3xl text-blue-400 bg-gradient-to-r from-white to-[rgb(102, 102, 102)] bg-clip-text font-semibold whitespace-nowrap">
              Stay <span className="text-blue-300">Updated</span>
            </h3>
            
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-72 md:w-80 px-5 py-3 bg-transparent border border-white rounded-full text-lg bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="px-8 py-3 bg-gray-400 border border-white font-bold text-black hover:scale-105 rounded-full text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Home className="w-5 h-5 mt-1 text-gray-400 flex-shrink-0" />
              <span className="text-lg bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold leading-relaxed">
                C-67 NH Complex, Dwarka Mor Metro,<br />
                New Delhi
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <span className="text-lg bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold">+91 7965174000</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <span className="text-lg bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold">+91 8130960040</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <span className="text-lg bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold">work@margda.com</span>
            </div>
          </div>

          {/* WhatsApp QR Section */}
          <div className="text-center">
            <p className="text-lg bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold mb-4">
              Join WhatsApp channel for<br />
              more updates.
            </p>
            <div className="inline-block">
              <Image
                src="/image/QR.png"
                alt="WhatsApp QR Code"
                width={96} // w-24 = 6rem = 96px
                height={96} // h-24 = 6rem = 96px
              />
            </div>
          </div>

          {/* Connect With Us Section */}
          <div className="space-y-5">
            <h3 className="text-2xl bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold">Connect With Us</h3>
            
            <div className="flex gap-4">
              <a href="https://facebook.com" className="w-12 h-12 bg-gray-800 hover:scale-105 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="w-12 h-12 bg-gray-800  hover:scale-105 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="w-12 h-12 bg-gray-800  hover:scale-105 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://whatsapp.com" className="w-12 h-12 bg-gray-800  hover:scale-105 rounded-full flex items-center justify-center transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="w-12 h-12 bg-gray-800  hover:scale-105 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-lg bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent font-semibold">
            Copyright © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;