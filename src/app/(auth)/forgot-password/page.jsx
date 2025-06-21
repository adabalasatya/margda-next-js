"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      setError('Phone number is required');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Reset password requested for:', phoneNumber);
      alert('Password reset link sent successfully!');
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to send reset link. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[832px] relative overflow-hidden bg-[url('/forgot/forgot-password-page.png')] bg-center bg-cover bg-no-repeat">
      {/* Background elements */}
      <div className="bg-black rounded-[50%] w-[445px] h-[70px] absolute left-[236px] top-[662px] blur-[25.9px]"></div>
      
      {/* Forgot Password card */}
      <div className="bg-white bg-opacity-57 rounded-[25px] mr-24 w-[469px] h-[350px] absolute right-[22px] top-[269px] overflow-hidden"
        style={{
          borderImage: 'linear-gradient(224.92deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)',
          borderImageSlice: 1
        }}>
        {/* Decorative elements */}
        <div className="bg-[#4a84bd] w-[698px] h-[183px] absolute left-[-110px] top-[-70px] blur-[41px]"></div>
        <div className="bg-[#d9d9d9] w-[524px] h-[117px] absolute left-[-38px] top-[410px] blur-[41px]"></div>
        
        {/* Logo */}
        <div className="absolute left-[9.81%] top-[58px] w-[12.7%] h-auto">
          <Image 
            src="/forgot/group-1350.svg" 
            alt="Logo" 
            width={60} 
            height={40} 
            className="overflow-visible"
          />
        </div>
        
        <h1 className="text-white text-left font-semibold text-[39px] absolute left-[110px] top-[48px]">Forgot Password</h1>
        
        <form onSubmit={handleSubmit} className="w-full h-full relative">
          {/* Phone Number Field */}
          <div className="relative">
            <div className="text-black text-left font-semibold text-base absolute left-[63px] top-[135px]">
              Phone Number
            </div>
            
            <div className="bg-white bg-opacity-50 rounded-[16px] border border-solid border-black w-[295px] h-[47px] absolute left-[45px] top-[160px]"></div>
            
            <div className="absolute left-[63px] top-[175px] w-5 h-5">
              {/* Phone icon complex - using a simplified version */}
              <Image 
                src="/forgot/vector0.png" 
                alt="Phone icon" 
                width={20} 
                height={20}
              />
            </div>
            
            <div className="text-black text-left font-semibold text-sm absolute left-[90px] top-[176px]">+91</div>
            
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setError('');
              }}
              placeholder="Enter your phone number"
              className={`bg-transparent text-[#555555] text-left font-semibold text-[12px] absolute left-[130px] top-[177px] w-[150px] focus:outline-none ${error ? 'placeholder-red-500' : ''}`}
            />
            
            <button 
              type="button"
              className="bg-[#8367ff] rounded-2xl border border-solid border-black w-[81px] h-[47px] absolute left-[350px] top-[160px] flex items-center justify-center hover:bg-[#7356e6] transition-colors"
            >
              <span className="text-white text-sm font-semibold">CODE</span>
            </button>
            
            {error && <span className="text-red-500 text-xs absolute left-[90px] top-[210px]">{error}</span>}
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white bg-opacity-88 mt-8 rounded-[16px] border-2 border-solid border-[#3b82f6] w-[386px] h-[47px] absolute left-[45px] top-[240px] flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <span className="text-[#0047ff] text-left font-semibold text-[20px]">
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </span>
          </button>
          
          {/* Remember Password Link */}
          <div className="absolute left-[105px] top-[221px]  w-full">
            <p className="text-black text-left font-normal text-[13px] inline">
              Remember your password?{' '}
              <Link href="/login" className="font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
      
      {/* Header */}
      <div className="bg-white bg-opacity-86 rounded-[43px] ml-16 w-[calc(100%-44px)] max-w-[1369px] h-[86px] absolute left-[22px] top-[21px] flex items-center justify-between px-8">
        <div className="flex items-center">
          <div className="relative w-[350px] h-[50px] mr-4">
            <Image 
              src="/image/margdalogo.png" 
              alt="Logo part 1" 
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link href="/login" className="flex items-center text-left font-semibold text-xl bg-gradient-to-r from-[#666666] to-black bg-clip-text text-transparent">
            <Image 
              src="/forgot/group1.svg" 
              alt="Login icon" 
              width={24} 
              height={24} 
              className="mr-2"
            />
            Login
          </Link>
          <Link href="/download" className="flex items-center text-left font-semibold text-xl bg-gradient-to-r from-black to-[#666666] bg-clip-text text-transparent">
            <Image 
              src="/forgot/ic-twotone-cloud-download0.svg" 
              alt="Download icon" 
              width={34} 
              height={34} 
              className="mr-2"
            />
            Download App
          </Link>
        </div>
      </div>
      
      {/* Main Images */}
      <div className="w-[365px] h-[499px] absolute left-[201px] top-[220px]">
        <Image
          src="/forgot/en-2-cd-3-ffb-4700549-ce-1-c-29-e-6-a-8-e-37-ce-254-b-10.png"
          alt="Forgot password illustration"
          width={365}
          height={499}
          className="object-cover"
        />
      </div>
      <div className="w-[258px] h-[555px] absolute left-[409px] top-[164px]">
        <Image
          src="/forgot/_7-h-62513-a-4-ce-37-e-5-de-2-db-19-c-9-ee-9-a-6-c-86223-10.png"
          alt="Additional illustration"
          width={258}
          height={555}
          className="object-cover"
        />
      </div>
    </div>
  );
}