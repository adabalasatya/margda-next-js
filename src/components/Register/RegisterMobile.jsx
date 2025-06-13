"use client"; // If using App Router (app/ structure)

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
const RegisterMobile = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timers, setTimers] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setTimers((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobile) {
      return alert("Enter Mobile");
    }
    try {
      const response = await fetch(
        "https://www.margda.in/api/register/register-mobile",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.otpReq) {
          setOtpSent(true);
          setTimers(60);
          alert(data.message);
        } else {
          sessionStorage.setItem("userID", data.data.userID);
          router.push(`/register-email`);
        }
      }
    } catch (error) {
      alert("An error occurred during registration.");
    }
  };

  const verifyOtp = async () => {
    if (!mobileOtp) {
      alert("Enter Otp");
    }
    try {
      const response = await fetch(
        "https://www.margda.in/api/register/verify-mobile-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile, otp: mobileOtp }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem("userID", data.data.userID);
        router.push(`/register-email`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred during registration.");
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-135 py-8 px-4">
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 space-y-6"
      >
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl font-bold text-teal-400">
            Register With Mobile
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 justify-center items-center"
        >
          <div className="flex items-center space-x-2 w-1/2">
            <PhoneInput
              country="in"
              value={mobile}
              onChange={(value) => setMobile(value)}
              placeholder="Mobile Number"
              disabled={otpSent}
              inputStyle={{
                width: "100%",
                padding: "1.25rem 1.25rem 1.25rem 40px",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.2)",
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1rem",
              }}
              buttonStyle={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRight: "none",
                borderRadius: "4px 0 0 4px",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            />
          </div>

          <motion.button
            whileHover={{
              scale: timers === 0 ? 1.02 : 1,
            }}
            whileTap={{
              scale: timers === 0 ? 0.98 : 1,
            }}
            type={timers > 0 ? "button" : "submit"}
            className={`w-1/2 py-2 rounded text-white font-semibold cursor-pointer ${
              timers > 0
                ? "bg-gray-400"
                : "bg-[linear-gradient(45deg,#7C4DFF,#64FFDA)]"
            }`}
          >
            {timers > 0
              ? `Resend in ${formatTime(timers)}`
              : otpSent
              ? "Resend OTP"
              : "Continue"}
          </motion.button>

          {otpSent && (
            <div className="mt-2 space-y-2 w-1/2">
              <input
                type="number"
                placeholder="Enter Mobile OTP"
                value={mobileOtp}
                onChange={(e) => setMobileOtp(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded text-white focus:outline-none focus:border-teal-400"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => verifyOtp()}
                className="w-full px-4 py-2 bg-gray-400 text-white rounded cursor-pointer"
              >
                Verify Mobile OTP
              </motion.button>
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default RegisterMobile;
