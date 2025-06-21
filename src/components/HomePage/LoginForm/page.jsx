// login/LoginForm.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
    agreeToTerms: true,
  });
  const [errors, setErrors] = useState({
    loginId: '',
    password: '',
    agreeToTerms: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const addToast = (message, type, duration = 3000) => {
    alert(`${type.toUpperCase()}: ${message}`);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      loginId: '',
      password: '',
      agreeToTerms: '',
    };

    if (!formData.loginId.trim()) {
      newErrors.loginId = 'Please input your Login Id.';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Please input your Password.';
      valid = false;
    } else if (formData.password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters';
      valid = false;
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Please agree to the Terms of Use and Privacy Policy.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Object.values(errors).forEach((error) => error && addToast(error, 'error'));
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    let response;
    try {
      response = await fetch('https://www.margda.in/api/android/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: formData.loginId,
          password: formData.password,
        }),
      });
      const userData = await response.json();

      if (response.status === 404) {
        addToast('Invalid login ID. Please check your credentials.', 'error');
        setIsSubmitting(false);
      } else if (response.status === 401) {
        addToast(userData.message, 'error');
        setIsSubmitting(false);
      } else if (response.status === 200) {
        localStorage.setItem('userData', JSON.stringify(userData));
        const pushNotificationToken = localStorage.getItem('push-notification-token');

        if (pushNotificationToken) {
          const accessToken = userData.access_token;
          await fetch('https://www.margda.in/api/web-push-notification/store-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ webtoken: pushNotificationToken }),
          });
        }

        setFormData({
          loginId: '',
          password: '',
          agreeToTerms: false,
        });

        addToast('Login successful! Redirecting...', 'success', 2000);

        setTimeout(() => {
          if (message === 'yes') {
            router.push('/login-business-associates');
          } else {
            router.push('/service-exchange');
          }
        }, 500);
      } else {
        addToast('An unexpected error occurred. Please try again.', 'error');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.message === 'Failed to fetch') {
        addToast('Network error: Please check your internet connection', 'error');
      } else {
        addToast('Failed to connect to the server. Please try again later.', 'error');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[url('/signin/sign-in-page.png')] bg-center bg-cover bg-no-repeat">
      {/* Background elements */}
      <div className="bg-black rounded-[50%] w-[614px] h-[70px] absolute left-[136px] top-[662px] blur-[25.9px]"></div>

      {/* Sign-in card */}
      <div
        className="absolute right-0 ml-32 top-1/2 mt-24 transform -translate-x-1/2 -translate-y-1/2 w-[469px] h-[469px] bg-white bg-opacity-57 rounded-[24.55px] border-solid overflow-hidden"
        style={{
          borderImage: 'linear-gradient(224.92deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)',
          borderImageSlice: 1,
        }}
      >
        <div className="bg-[#4a84bd] w-[698.18px] h-[183.34px] absolute left-[-109.68px] top-[-70.39px] blur-[41.13px]"></div>
        <div className="bg-[#d9d9d9] w-[523.84px] h-[117.05px] absolute left-[-37.65px] top-[410.07px] blur-[41.13px]"></div>

        {/* Logo */}
        <div className="absolute right-[59.55%] left-[27.75%] bottom-[77.43%] top-[13.79%] w-[12.7%] h-[8.78%]">
          <Image src="/signin/group-1350.svg" alt="Logo" width={60} height={50} className="overflow-visible" />
        </div>

        <h2 className="text-white text-left font-semibold text-[39.29px] absolute left-[196.44px] top-[54.66px]">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="w-full h-full relative">
          {/* Login ID Field */}
          <div className="relative">
            <div
              className={`bg-[rgba(217,217,217,0.56)] rounded-[16.37px] border-[0.82px] border-solid ${
                errors.loginId ? 'border-red-500' : 'border-black'
              } w-[386.33px] h-[47.47px] absolute left-[45.02px] top-[144.06px]`}
            ></div>
            <div className="w-[25.37px] h-[25.37px] absolute left-[71.21px] top-[154.7px] overflow-hidden aspect-square">
              <Image
                src="/signin/group0.svg"
                alt="User icon"
                width={20}
                height={20}
                className="w-[83.33%] h-[66.67%] absolute inset-1/4 overflow-visible"
              />
            </div>
            <input
              type="text"
              name="loginId"
              value={formData.loginId}
              onChange={handleChange}
              placeholder="LOGIN ID"
              className={`bg-transparent text-[#555555] text-left font-semibold text-[16.37px] absolute left-[106.4px] top-[158.79px] w-[300px] focus:outline-none ${
                errors.loginId ? 'placeholder-red-500' : 'placeholder-[#555555]'
              }`}
            />
            {errors.loginId && (
              <span className="text-red-500 text-xs absolute left-[106.4px] top-[190px]">{errors.loginId}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <div
              className={`bg-[rgba(217,217,217,0.56)] rounded-[16.37px] border-[0.82px] border-solid ${
                errors.password ? 'border-red-500' : 'border-black'
              } w-[386.33px] h-[47.47px] absolute left-[45.02px] top-[222.63px]`}
            ></div>
            <Image
              src="/signin/uis-lock0.svg"
              alt="Lock icon"
              width={25}
              height={25}
              className="w-[25.37px] h-[25.37px] absolute left-[71.21px] top-[233.27px] overflow-visible aspect-square"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="PASSWORD"
              className={`bg-transparent text-[#555555] text-left font-semibold text-[16.37px] absolute left-[106.4px] top-[238.18px] w-[260px] focus:outline-none ${
                errors.password ? 'placeholder-red-500' : 'placeholder-[#555555]'
              }`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute left-[400px] top-[235.27px] text-[#555555] hover:text-[#333333] focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
            {errors.password && (
              <span className="text-red-500 text-xs absolute left-[106.4px] top-[270px]">{errors.password}</span>
            )}
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
              <div
                className={`bg-white rounded-[4.09px] border-[0.82px] border-solid ${
                  errors.agreeToTerms ? 'border-red-500' : 'border-black'
                } w-[22.92px] h-[22.92px] absolute left-[45.02px] top-[290.57px] flex items-center justify-center`}
              >
                {formData.agreeToTerms && (
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span
                className={`text-black text-left font-semibold text-[13.1px] absolute left-[75.3px] top-[293.84px] ${
                  errors.agreeToTerms ? 'text-red-500' : ''
                }`}
              >
                I agree to the <span className="underline">Terms of Use and Privacy Policy.</span>
              </span>
            </label>
            {errors.agreeToTerms && (
              <span className="text-red-500 text-xs absolute left-[75.3px] top-[315px]">{errors.agreeToTerms}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[rgba(255,255,255,0.88)] rounded-[16.37px] border-[1.23px] border-solid border-[#3b82f6] w-[386.33px] h-[47.47px] absolute left-[45.02px] top-[333.95px] flex items-center justify-center hover:bg-blue-50 transition-colors duration-200"
          >
            <span className="text-[#0047ff] text-left font-semibold text-[19.64px]">
              {isSubmitting ? (
                <span className="flex items-center">
                  <span className="spinner mr-2"></span>
                  Signing In...
                </span>
              ) : (
                'Sign In'
              )}
            </span>
          </button>

          {/* Footer Links */}
          <div className="absolute left-[45.02px] top-[390px] w-[386.33px] flex items-center justify-between">
            <Link
              href="/forgot-password"
              className="text-black text-left font-semibold text-[13.1px] hover:underline flex items-center"
            >
              <Image src="/signin/group2.svg" alt="Key icon" width={16} height={16} className="mr-1" />
              Forgot Password
            </Link>
            <span className="text-black text-[13.1px]">|</span>
            <Link
              href="/create-account"
              className="text-black text-left font-semibold text-[13.1px] hover:underline flex items-center"
            >
              <Image src="/signin/group1.svg" alt="User plus icon" width={16} height={16} className="mr-1" />
              Create Account
            </Link>
          </div>
        </form>
      </div>

      {/* Header */}
      <div className="bg-white bg-opacity-86 ml-16 rounded-[43px] w-[calc(100%-44px)] max-w-[1369px] h-[86px] absolute left-[22px] top-[21px] flex items-center justify-between px-8">
        <div className="flex items-center">
         <Link  href="/">
          <div className="relative w-[400px] h-[50px] mr-4">
            <Image src="/image/margdalogo.png" alt="Logo part 1" layout="fill" objectFit="contain" />
          </div>
         </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="/login"
            className="flex items-center  hover:scale-105 text-left font-semibold text-xl bg-gradient-to-r from-[#666666] to-black bg-clip-text text-transparent"
          >
            <Image src="/signup/group2.svg" alt="Login icon" width={24} height={24} className="mr-2" />
            Login
          </Link>
          <Link
            href="/download"
            className="flex items-center  hover:scale-105 text-left font-semibold text-xl bg-gradient-to-r from-black to-[#666666] bg-clip-text text-transparent"
          >
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
      <div className="w-[559px] h-[519px] absolute left-[165px] top-[191px]">
        <Image
          src="/signin/_7-a-1-e-5822-ae-3-f-2670359-a-8312-c-94-d-5-d-6-b-10.png"
          alt="Main illustration"
          width={559}
          height={519}
          className="object-cover aspect-[559/519]"
        />
      </div>

      {/* Inline CSS for Spinner */}
      <style jsx>{`
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #ffffff;
          border-top: 3px solid #0047ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}