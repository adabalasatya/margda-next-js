"use client"; // If using App Router (app/ structure)

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
const Register = () => {
  const router = useRouter();
  const [same, setSame] = useState(false);
  const [userID, setUserID] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    mobile: "",
    whatsapp: "",
    terms: true,
    optW: true,
    optE: true,
    optC: true,
    optS: true,
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timers, setTimers] = useState(0);
  const [wVerified, setWVerified] = useState(false);

  useEffect(() => {
    const userID = sessionStorage.getItem("userID");
    if (userID) {
      setUserID(userID);
      getRecord(userID);
    } else {
      router.push("/register-mobile");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setTimers((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getRecord = async (userID) => {
    if (userID) {
      const response = await fetch(
        "https://www.margda.in/api/register/get-user-info",
        {
          method: "POST",

          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userID,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        const user_data = data.data;
        if (!user_data.email) {
          return router.push("/register-email");
        }

        setFormValues((pre) => ({
          ...pre,
          name: user_data.name || "",
          email: user_data.email,
          mobile: user_data.mobile,
        }));
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const sendOtp = async (type) => {
    if (!formValues.whatsapp) {
      return alert("Enter Whatsapp number");
    }
    try {
      const endpoint = "https://www.margda.in/api/register/register-whatsapp";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: formValues.whatsapp }),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
        setTimers(60);
        alert("OTP sent successfully");
      } else {
        alert(data.message || `Failed to send OTP.`);
      }
    } catch (error) {
      alert(`An error occurred while sending ${type} OTP.`);
    }
  };

  const verifyOtp = async () => {
    if (wVerified) return;

    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    try {
      const endpoint = "https://www.margda.in/api/register/verify-whatsapp-otp";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: formValues.whatsapp, otp: otp }),
      });

      const data = await response.json();
      if (response.ok) {
        setWVerified(true);
        alert("OTP verified successfully!");
      } else {
        alert(data.message || `Failed to verify OTP.`);
      }
    } catch (error) {
      alert(`An error occurred during OTP verification.`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValues.name) {
      return alert("Please enter name");
    }
    if (!same && !wVerified) {
      alert("Please verify WhatsApp");
      return;
    }

    if (!formValues.terms) {
      return alert("Please Tick, Terms of Use and Privacy Policy");
    }

    try {
      const response = await fetch(
        "https://www.margda.in/api/register/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            whatsapp: same ? formValues.mobile : formValues.whatsapp,
            userID: userID,
            name: formValues.name,
            optW: formValues.optW,
            optE: formValues.optE,
            optC: formValues.optC,
            optS: formValues.optS,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // alert("Registration successful!");
        alert(data.message);
        setTimeout(() => router.push("/login"), 200);
      } else {
        alert(data.message || "Registration failed.");
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
    <section className="min-h-screen mt-24 flex items-center justify-center bg-gradient-135 py-8 px-4">
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 space-y-6"
      >
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl font-bold text-teal-400">Register</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white/80 mb-2">
              Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
              <input
                id="name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded text-white focus:outline-none focus:border-teal-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mobile Number Section */}
            <div className="space-y-2">
              <label className="block text-white/80 mb-2">Mobile Number</label>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <PhoneInput
                    country="in"
                    value={formValues.mobile}
                    placeholder="Mobile Number"
                    disabled
                    inputStyle={{
                      width: "100%",
                      padding: "0.5rem 0.5rem 0.5rem 48px",
                      borderRadius: "4px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "white",
                      fontSize: "0.875rem",
                    }}
                    buttonStyle={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRight: "none",
                      borderRadius: "4px 0 0 4px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <div className="flex flex-col space-y-2">
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    // onChange={handleInputChange}
                    placeholder="Enter your email"
                    disabled
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Number Section */}
          <div className="space-y-2">
            <label className="block text-white">WhatsApp Number</label>
            <label className="flex gap-3">
              <input
                type="checkbox"
                disabled={wVerified}
                checked={same}
                onChange={(e) => setSame(e.target.checked)}
              />
              Same As Mobile
            </label>
            {!same && (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <PhoneInput
                    country="in"
                    value={formValues.whatsapp}
                    onChange={(value) =>
                      setFormValues((pre) => ({ ...pre, whatsapp: value }))
                    }
                    placeholder="WhatsApp Number"
                    disabled={wVerified || otpSent}
                    inputStyle={{
                      width: "100%",
                      padding: "1.25rem 1.25rem 1.25rem 40px",
                      borderRadius: "4px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backgroundColor: wVerified
                        ? "#e5e7eb"
                        : "rgba(255,255,255,0.05)",
                      color: "white",
                      fontSize: "0.875rem",
                    }}
                    buttonStyle={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRight: "none",
                      borderRadius: "4px 0 0 4px",
                      backgroundColor: wVerified
                        ? "#e5e7eb"
                        : "rgba(255,255,255,0.05)",
                    }}
                  />

                  <motion.button
                    whileHover={{
                      scale: timers === 0 && !wVerified ? 1.02 : 1,
                    }}
                    whileTap={{
                      scale: timers === 0 && !wVerified ? 0.98 : 1,
                    }}
                    type="button"
                    onClick={() => sendOtp()}
                    disabled={timers > 0 || wVerified}
                    className={`w-full px-4 py-2 rounded text-white font-semibold ${
                      timers > 0 || wVerified
                        ? "bg-gray-400"
                        : "bg-[linear-gradient(45deg,#7C4DFF,#64FFDA)]"
                    }`}
                  >
                    {timers > 0
                      ? `Resend in ${formatTime(timers)}`
                      : "Send OTP"}
                  </motion.button>
                </div>

                {otpSent && !wVerified && (
                  <div className="mt-2 space-y-2">
                    <input
                      type="number"
                      placeholder="Enter WhatsApp OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      disabled={wVerified}
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded text-white focus:outline-none focus:border-teal-400"
                    />
                    <motion.button
                      whileHover={{ scale: !wVerified ? 1.02 : 1 }}
                      whileTap={{ scale: !wVerified ? 0.98 : 1 }}
                      type="button"
                      onClick={() => verifyOtp()}
                      className="w-full px-4 py-2 bg-gray-400 text-white rounded cursor-pointer"
                    >
                      Verify WhatsApp OTP
                    </motion.button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formValues.terms}
              onChange={handleInputChange}
              className="h-4 w-4 accent-teal-400 focus:ring-teal-400 border-white/20 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-white/80">
              I agree to the{" "}
              <a href="#" className="text-teal-400 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-teal-400 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-white/80">
              I consent to receive updates via:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "WhatsApp", name: "optW" },
                { label: "Email", name: "optE" },
                { label: "Call", name: "optC" },
                { label: "SMS", name: "optS" },
              ].map((option) => (
                <label
                  key={option.name}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    id={option.name}
                    name={option.name}
                    checked={formValues[option.name]}
                    onChange={handleInputChange}
                    className="h-4 w-4 accent-teal-400 focus:ring-teal-400 border-white/20 rounded"
                  />
                  <span className="text-sm text-white/80">{option.label}</span>
                </label>
              ))}
            </div>
            <p className="text-sm text-white/80">
              You can opt-out anytime by replying{" "}
              <span className="font-semibold">STOP</span>.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-6 py-3 bg-[linear-gradient(45deg,#7C4DFF,#64FFDA)] text-white font-semibold rounded hover:shadow-[0_15px_35px_rgba(124,77,255,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            Register
          </motion.button>
        </form>
        <p className="text-white/70 text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-teal-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
