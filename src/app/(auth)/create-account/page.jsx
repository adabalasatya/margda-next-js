"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CreateAccountPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    agreeToTerms: false,
    whatsapp: false,
    emailConsent: false,
    call: false,
    sms: false
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    agreeToTerms: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      agreeToTerms: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Submit form logic here
    console.log('Form submitted:', formData);
    alert('Account created successfully!');
  };

  return (
    <div className="min-h-[832px] relative overflow-hidden bg-[url('/signup/new-account-page.png')] bg-center bg-cover bg-no-repeat">
      {/* Background elements */}
      <div className="bg-black rounded-[50%] w-[445px] h-[70px] absolute left-[236px] top-[662px] blur-[25.9px]"></div>
      
      {/* Create Account card */}
      <div className="bg-white bg-opacity-57 rounded-[25px] mr-16 w-[469px] h-[601px] absolute right-[22px] top-[155px] overflow-hidden"
        style={{
          borderImage: 'linear-gradient(224.92deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)',
          borderImageSlice: 1
        }}>
        {/* Decorative elements */}
        <div className="bg-[#4a84bd] w-[698px] h-[183px] absolute left-[-110px] top-[-70px] blur-[41px]"></div>
        <div className="bg-[#d9d9d9] w-[524px] h-[117px] absolute left-[-38px] top-[410px] blur-[41px]"></div>
        
        {/* Logo */}
        <div className="absolute left-[12.79%] top-[60px] w-[12.7%] h-auto">
          <Image 
            src="/signup/group-1350.svg" 
            alt="Logo" 
            width={60} 
            height={40} 
            className="overflow-visible"
          />
        </div>
        
        <h1 className="text-white text-left font-semibold text-[39px] absolute left-[124px] top-[51px]">Create Account</h1>
        
        <form onSubmit={handleSubmit} className="w-full h-full relative">
          {/* Name Field */}
          <div className="relative">
            <div className={`bg-white bg-opacity-50 rounded-[16px] border border-solid border-black w-[386px] h-[47px] absolute left-[45px] top-[129px]`}></div>
            <div className="absolute left-[63px] top-[143px] w-5 h-5">
              <Image 
                src="/signup/f-7-person-fill0.svg" 
                alt="Person icon" 
                width={20} 
                height={20}
              />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`bg-transparent text-[#555555] text-left font-semibold text-sm absolute left-[90px] top-[146px] w-[300px] focus:outline-none ${errors.name ? 'placeholder-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-xs absolute left-[90px] top-[180px]">{errors.name}</span>}
          </div>
          
          {/* Phone Field */}
          <div className="relative">
            <div className={`bg-white bg-opacity-50 rounded-[16px] border border-solid border-black w-[295px] h-[47px] absolute left-[45px] top-[193px]`}></div>
            <div className="absolute left-[63px] top-[210px] w-10 h-10">
              {/* Phone icon complex - using a simplified version */}
              <Image 
                src="/signup/vector0.png" 
                alt="Phone icon" 
                width={20} 
                height={20}
              />
            </div>
            <div className="text-black text-left font-semibold text-sm absolute left-[90px] top-[210px]">+91</div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`bg-transparent text-[#555555] text-left font-semibold text-sm absolute left-[130px] top-[210px] w-[200px] focus:outline-none ${errors.phone ? 'placeholder-red-500' : ''}`}
            />
            <button className="bg-[#8367ff] rounded-2xl border border-solid border-black w-[81px] h-[47px] absolute left-[350px] top-[193px] flex items-center justify-center">
              <span className="text-white text-sm font-semibold">CODE</span>
            </button>
            {errors.phone && <span className="text-red-500 text-xs absolute left-[90px] top-[244px]">{errors.phone}</span>}
          </div>
          
          {/* Email Field */}
          <div className="relative">
            <div className={`bg-white bg-opacity-50 rounded-[16px] border border-solid border-black w-[295px] h-[47px] absolute left-[45px] top-[257px]`}></div>
            <div className="absolute left-[63px] top-[275px] w-5 h-5">
              <Image 
                src="/signup/group0.svg" 
                alt="Email icon" 
                width={20} 
                height={20}
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`bg-transparent text-[#555555] text-left font-semibold text-sm absolute left-[90px] top-[274px] w-[200px] focus:outline-none ${errors.email ? 'placeholder-red-500' : ''}`}
            />
            <button className="bg-[#8367ff] rounded-2xl border border-solid border-black w-[81px] h-[47px] absolute left-[350px] top-[257px] flex items-center justify-center">
              <span className="text-white text-sm font-semibold">CODE</span>
            </button>
            {errors.email && <span className="text-red-500 text-xs absolute left-[90px] top-[298px]">{errors.email}</span>}
          </div>
          
          {/* Terms Checkbox */}
          <div className="relative">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="hidden"
            />
            <label htmlFor="agreeToTerms" className="cursor-pointer">
              <div className={`bg-white rounded-[4px] border border-solid ${errors.agreeToTerms ? 'border-red-500' : 'border-black'} w-[23px] h-[23px] absolute left-[46px] top-[324px] flex items-center justify-center`}>
                {formData.agreeToTerms && (
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`text-black text-left font-semibold text-[13px] absolute left-[76px] top-[327px] ${errors.agreeToTerms ? 'text-red-500' : ''}`}>
                I agree to the <span className="underline">Terms of Use and Privacy Policy.</span>
              </span>
            </label>
            {errors.agreeToTerms && <span className="text-red-500 text-xs absolute left-[76px] top-[350px]">{errors.agreeToTerms}</span>}
          </div>
          
          {/* Consent Section */}
          <div className="absolute left-[46px] top-[367px]">
            <p className="text-black text-left font-semibold text-[13px]">I consent to receive updates via:</p>
            <div className="flex flex-wrap gap-x-8 mt-4">
              {['whatsapp', 'emailConsent', 'call', 'sms'].map((type) => (
                <div key={type} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={type}
                    name={type}
                    checked={formData[type]}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label htmlFor={type} className="cursor-pointer flex items-center">
                    <div className={`bg-white rounded-[4px] border border-solid border-black w-[23px] h-[23px] mr-2 flex items-center justify-center`}>
                      {formData[type] && (
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-black text-left font-normal text-[13px] capitalize">
                      {type === 'emailConsent' ? 'Email' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <p className="text-black text-left font-semibold text-[13px] mt-2">
              You can opt-out anytime by replying 'STOP'.
            </p>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white bg-opacity-88 mt-4 rounded-[16px] border-2 border-solid border-[#3b82f6] w-[386px] h-[47px] absolute left-[45px] top-[461px] flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <span className="text-[#0047ff] text-left font-semibold text-[20px]">
              Sign Up
            </span>
          </button>
          
          {/* Login Link */}
          <div className="absolute left-[46px] mt-5 top-[519px] w-full">
            <p className="text-black text-left font-normal text-[13px] inline">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      
      {/* Header */}
      <div className="bg-white bg-opacity-86 ml-16 rounded-[43px] w-[calc(100%-44px)] max-w-[1369px] h-[86px] absolute left-[22px] top-[21px] flex items-center justify-between px-8">
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
              src="/signup/group2.svg" 
              alt="Login icon" 
              width={24} 
              height={24} 
              className="mr-2"
            />
            Login
          </Link>
          <Link href="/download" className="flex items-center text-left font-semibold text-xl bg-gradient-to-r from-black to-[#666666] bg-clip-text text-transparent">
            <Image 
              src="/signup/ic-twotone-cloud-download0.svg" 
              alt="Download icon" 
              width={34} 
              height={34} 
              className="mr-2"
            />
            Download App
          </Link>
        </div>
      </div>
      
      {/* Main Image */}
      <div className="w-[509px] h-[527px] absolute left-[197px] top-48">
        <Image
          src="/signup/b-478-a-501-a-1427-db-059-b-43-e-411297056-ccaa-10.png"
          alt="Create account illustration"
          width={509}
          height={527}
          className="object-cover"
        />
      </div>
      
      {/* Decorative labels */}
      <div className="w-[82px] h-[31px] absolute left-[236px] top-[237px] bg-gradient-to-b from-[#feb52f] to-[#fcaf26] flex items-center justify-center">
        <span className="text-white text-sm font-normal">New Account</span>
      </div>
      <div className="w-[73px] h-7 absolute left-[595px] top-[264px] bg-gradient-to-b from-[#4996c8] to-[#418cbe] flex items-center justify-center text-white text-center text-sm">
        <span>
          Join<br />Margda<br />Workplace
        </span>
      </div>
    </div>
  );
}