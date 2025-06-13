"use client"; // If using App Router (app/ structure)

import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timers, setTimers] = useState(0);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const userID = sessionStorage.getItem("userID");
    if (userID) {
      setUserID(userID);
    } else {
      router.push("/register-mobile");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Enter Mobile");
    }
    try {
      const response = await fetch(
        "https://www.margda.in/api/register/register-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, userID }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        if (data.otpReq) {
          setOtpSent(true);
          setTimers(60);
          alert(data.message);
        } else {
          router.push(`/register`);
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred during registration.");
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert("Enter Otp");
    }
    try {
      const response = await fetch(
        "https://www.margda.in/api/register/verify-email-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp: otp }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        router.push(`/register`);
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
        className="w-full"
      >
        <section className="min-h-screen flex items-center justify-center bg-gradient-135 py-8 px-4">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-3xl font-bold text-teal-400">
                Register Email
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 justify-center items-center"
            >
              <div className="relative w-1/2">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  disabled={otpSent}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded text-white focus:outline-none focus:border-teal-400"
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
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded text-white focus:outline-none focus:border-teal-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => verifyOtp()}
                    className="w-full px-4 py-2 bg-gray-400 text-white rounded cursor-pointer"
                  >
                    Verify OTP
                  </motion.button>
                </div>
              )}
            </form>
          </motion.div>
        </section>
      </motion.div>
    </section>
  );
};

export default Register;
