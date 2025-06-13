'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  // Refs for video elements
  const growthVideoRef = useRef(null);
  const businessVideoRef = useRef(null);
  const platformVideoRef = useRef(null);

  useEffect(() => {
    // Ensure videos play and handle any autoplay restrictions
    const playVideos = async () => {
      try {
        if (growthVideoRef.current) {
          await growthVideoRef.current.play();
        }
        if (businessVideoRef.current) {
          await businessVideoRef.current.play();
        }
        if (platformVideoRef.current) {
          await platformVideoRef.current.play();
        }
      } catch (err) {
        console.log('Autoplay prevented, falling back to muted autoplay');
      }
    };

    playVideos();
  }, []);

  return (
    <>
      <div className="relative overflow-hidden w-full bg-black">
        {/* Frame1 Section */}
        <div className="relative overflow-hidden h-[896px] w-full">
          <div className="absolute overflow-hidden h-[896px] w-full max-w-[1440px] left-1/2 transform -translate-x-1/2 top-0">
            {/* Main Text Section */}
            <span className="flex justify-start text-left items-start h-[78px] w-[235px] absolute left-6 md:left-[371px] top-[175px]">
              <span
                className="whitespace-nowrap bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent text-[48px] md:text-[64px] font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                BOOST
              </span>
            </span>
            <span className="flex justify-start text-left items-start h-[59px] w-[343px] absolute left-6 md:left-[365px] top-[249px]">
              <span
                className="whitespace-nowrap bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent text-[36px] md:text-[48px] font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Your business
              </span>
            </span>
            <span className="flex justify-start text-left items-start h-[59px] w-full max-w-[697px] absolute left-6 md:left-[371px] top-[308px]">
              <span
                className="whitespace-nowrap bg-gradient-to-r from-white to-[rgba(102,102,102,1)] bg-clip-text text-transparent text-[36px] md:text-[48px] font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                with MARGDA WORKPLACE
              </span>
            </span>
            <span className="flex justify-start text-left items-start h-[117px] w-[111px] absolute left-6 md:left-[725px] top-[203px]">
              <span
                className="whitespace-nowrap bg-gradient-to-r from-[rgba(255,108,8,1)] to-[rgba(32,32,32,1)] bg-clip-text text-transparent text-[64px] md:text-[96px] font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                5x
              </span>
            </span>

            {/* Enhanced Image Section with Dramatic White Shadow */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full h-[600px] flex items-center justify-center">
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.05) 30%, transparent 100%)',
                  filter: 'blur(20px)',
                }}
              ></div>
              <Image
                src="/image/node-8.png"
                alt="Three Business People"
                width={800}
                height={600}
                className="relative h-[80%] w-auto max-w-none object-contain z-10"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))',
                  transform: 'scale(1.2)',
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* MargdaOffer Section */}
        <div className="relative w-full">
          {/* First Subsection - Original Margda Offer */}
          <div className="relative h-[896px] w-full">
            <div className="absolute h-[896px] w-full max-w-[1440px] left-1/2 transform -translate-x-1/2">
              <h1 className="mt-8 text-center">
                <span
                  className="whitespace-nowrap bg-gradient-to-r from-orange-500 to-gray-500 bg-clip-text text-transparent text-[48px] md:text-[64px] font-semibold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  MARGDA
                </span>{' '}
                <span
                  className="whitespace-nowrap bg-gradient-to-r from-gray-800 to-gray-300 bg-clip-text text-transparent text-[48px] md:text-[64px] font-semibold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  OFFER
                </span>
              </h1>

              <div className="relative flex flex-col items-center justify-start">
                <Image
                  src="/image/node-42.png"
                  alt="Margda Offer"
                  width={650}
                  height={550}
                  className="mt-[30px] h-[550px] w-[650px] object-contain"
                />

                {/* Video Blocks with Pulse-Scale Effect */}
                <div className="absolute left-4 md:left-[200px] top-[20px] flex flex-col items-start">
                  <video
                    ref={growthVideoRef}
                    src="/videos/GrowthAccelerator.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[150px] w-[300px] md:h-[200px] md:w-[400px] object-cover"
                    onError={(e) => console.error('Video error:', e)}
                  />
                </div>

                <div className="absolute right-4 md:right-[200px] top-[20px] flex flex-col items-end">
                  <video
                    ref={businessVideoRef}
                    src="/videos/YourBusinessEngine.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[150px] w-[300px] md:h-[200px] md:w-[400px] object-cover"
                    onError={(e) => console.error('Video error:', e)}
                  />
                </div>

                <div className="absolute left-1/2 top-[600px] transform -translate-x-1/2 flex flex-col items-center">
                  <video
                    ref={platformVideoRef}
                    src="/videos/AllInOnePlatform.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[150px] w-[300px] md:h-[200px] md:w-[400px] object-cover"
                    onError={(e) => console.error('Video error:', e)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Subsection - Ready to Offer Your Expertise */}
          <div className="relative mb-6 w-full flex items-center justify-center">
            <div className="text-center max-w-4xl px-8">
              <h1 className="mb-8">
                <span
                  className="bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent text-[36px] md:text-[48px] font-semibold animate-fadeInUp"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Ready to{' '}
                </span>
                <span
                  className="bg-gradient-to-r from-orange-500 to-gray-500 bg-clip-text text-transparent text-[36px] md:text-[48px] font-semibold animate-fadeInUp"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Offer Your Expertise
                </span>
              </h1>

              <p
                className="text-gray-300 text-[16px] md:text-[18px] mb-12 leading-relaxed animate-fadeInUp"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Join our network of verified professionals and provide on-demand
                solutions on a
                <br />
                per-minute or commission basis
              </p>

              <Link
                href="/register"
                className="bg-white text-black px-12 py-4 rounded-full text-[18px] font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-lg animate-pulse"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Offer Your Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;