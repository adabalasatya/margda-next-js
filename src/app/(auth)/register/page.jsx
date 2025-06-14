"use client"; 

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Register = () => {
  const router = useRouter();
  //   const navigate = useNavigate();

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
  const [otpValues, setOtpValues] = useState({
    emailOtp: "",
    mobileOtp: "",
    whatsappOtp: "",
  });
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState({
    email: false,
    mobile: false,
    whatsapp: false,
  });
  const [timers, setTimers] = useState({ email: 0, mobile: 0, whatsapp: 0 });
  const [verified, setVerified] = useState({
    email: false,
    mobile: false,
    whatsapp: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setTimers((prev) => ({
        email: prev.email > 0 ? prev.email - 1 : 0,
        mobile: prev.mobile > 0 ? prev.mobile - 1 : 0,
        whatsapp: prev.whatsapp > 0 ? prev.whatsapp - 1 : 0,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if ((name === "email" && !verified.email) || name !== "email") {
      setFormValues({
        ...formValues,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handlePhoneChange = (type, value) => {
    if (!verified[type]) {
      setFormValues({ ...formValues, [type]: value });
    }
  };

  const handleOtpChange = (type, value) => {
    if (!verified[type]) {
      setOtpValues((prev) => ({
        ...prev,
        [`${type}Otp`]: value,
      }));
    }
  };

  const validateForm = (type) => {
    const newErrors = {};
    if (type === "mobile" || type === "submit") {
      if (!formValues.mobile)
        newErrors.mobile = "Please input your mobile number.";
    }
    if (type === "whatsapp" || type === "submit") {
      if (!formValues.whatsapp)
        newErrors.whatsapp = "Please input your WhatsApp number.";
    }
    if (type === "email" || type === "submit") {
      if (!formValues.email) newErrors.email = "Please input your email.";
      else if (
        !formValues.email.includes("@") ||
        !formValues.email.includes(".")
      )
        newErrors.email = "Invalid email format.";
    }
    if (type === "submit") {
      if (!formValues.name) newErrors.name = "Please input your name.";
      else if (formValues.name.length > 15)
        newErrors.name = "Name should be less than 15 characters.";
      if (!formValues.terms)
        newErrors.terms = "Please agree to Terms of Use and Privacy Policy.";
    }
    return newErrors;
  };

  const sendOtp = async (type) => {
    if (verified[type]) return;

    const newErrors = validateForm(type);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      Object.values(newErrors).forEach((error) => alert(error));
      return;
    }

    if (type === "mobile" || type === "whatsapp") {
      const number =
        type === "mobile" ? formValues.mobile : formValues.whatsapp;
      const numberWithoutCountryCode = number.replace(/^\+\d{1,3}/, "");
      if (numberWithoutCountryCode.length < 10) {
        alert(
          `${
            type.charAt(0).toUpperCase() + type.slice(1)
          } number must be at least 10 digits.`
        );
        return;
      }
    }

    try {
      const endpoint =
        type === "email"
          ? "https://www.margda.in/api/android/send-email-otp"
          : "https://www.margda.in/api/android/send-mobile-otp";
      const payload =
        type === "email"
          ? { email: formValues.email, name: formValues.name }
          : {
              mobile:
                type === "mobile" ? formValues.mobile : formValues.whatsapp,
            };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpSent((prev) => ({ ...prev, [type]: true }));
        setTimers((prev) => ({ ...prev, [type]: 60 }));
        alert(
          `${
            type.charAt(0).toUpperCase() + type.slice(1)
          } OTP sent successfully!`
        );
      } else {
        alert(data.message || `Failed to send ${type} OTP.`);
      }
    } catch (error) {
      alert(`An error occurred while sending ${type} OTP.`);
    }
  };

  const verifyOtp = async (type) => {
    if (verified[type]) return;

    const otp = otpValues[`${type}Otp`];
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    try {
      const endpoint =
        type === "email"
          ? "https://www.margda.in/api/android/verify-email-otp"
          : "https://www.margda.in/api/android/verify-mobile-otp";
      const payload =
        type === "email"
          ? { email: formValues.email, otp }
          : {
              mobile:
                type === "mobile" ? formValues.mobile : formValues.whatsapp,
              otp,
            };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setVerified((prev) => ({ ...prev, [type]: true }));
        alert(
          `${
            type.charAt(0).toUpperCase() + type.slice(1)
          } OTP verified successfully!`
        );
      } else {
        alert(data.message || `Failed to verify ${type} OTP.`);
      }
    } catch (error) {
      alert(`An error occurred during ${type} OTP verification.`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm("submit");
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      Object.values(newErrors).forEach((error) => alert(error));
      return;
    }
    if (!verified.email || !verified.mobile || !verified.whatsapp) {
      alert("Please verify Email, Mobile, and WhatsApp OTPs.");
      return;
    }

    try {
      const response = await fetch(
        "https://www.margda.in/api/android/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formValues.email,
            mobile: formValues.mobile,
            whatsapp: formValues.whatsapp,
            name: formValues.name,
            emailOtp: otpValues.emailOtp,
            mobileOtp: otpValues.mobileOtp,
            whatsappOtp: otpValues.whatsappOtp,
            optW: formValues.optW,
            optE: formValues.optE,
            optC: formValues.optC,
            optS: formValues.optS,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        setTimeout(() => router.push("/login"), 2000);
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
    <section className="min-h-screen mb-6 flex items-center justify-center bg-gradient-135 py-8 px-4">
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
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-full text-white focus:outline-none focus:border-teal-400"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
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
                    onChange={(value) => handlePhoneChange("mobile", value)}
                    placeholder="Mobile Number"
                    disabled={verified.mobile}
                    inputStyle={{
                      width: "100%",
                      padding: "0.5rem 0.5rem 0.5rem 48px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backgroundColor: verified.mobile
                        ? "#e5e7eb"
                        : "rgba(255,255,255,0.05)",
                      color: "white",
                      fontSize: "0.875rem",
                    }}
                    buttonStyle={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRight: "none",
                      borderRadius: "9999px 0 0 9999px",
                      backgroundColor: verified.mobile
                        ? "#e5e7eb"
                        : "rgba(255,255,255,0.05)",
                    }}
                  />
                </div>
                <motion.button
                  whileHover={{
                    scale: timers.mobile === 0 && !verified.mobile ? 1.02 : 1,
                  }}
                  whileTap={{
                    scale: timers.mobile === 0 && !verified.mobile ? 0.98 : 1,
                  }}
                  type="button"
                  onClick={() => timers.mobile === 0 && sendOtp("mobile")}
                  disabled={timers.mobile > 0 || verified.mobile}
                  className={`w-full px-4 py-2 rounded-full text-white font-semibold ${
                    timers.mobile > 0 || verified.mobile
                      ? "bg-gray-400"
                      : "bg-gradient-45"
                  }`}
                >
                  {timers.mobile > 0
                    ? `Resend in ${formatTime(timers.mobile)}`
                    : "Send OTP"}
                </motion.button>
                {errors.mobile && (
                  <p className="text-red-500 text-xs">{errors.mobile}</p>
                )}
                {otpSent.mobile && !verified.mobile && (
                  <div className="mt-2 space-y-2">
                    <input
                      type="text"
                      placeholder="Enter Mobile OTP"
                      value={otpValues.mobileOtp}
                      onChange={(e) =>
                        handleOtpChange("mobile", e.target.value)
                      }
                      disabled={verified.mobile}
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-full text-white focus:outline-none focus:border-teal-400"
                    />
                    <motion.button
                      whileHover={{ scale: !verified.mobile ? 1.02 : 1 }}
                      whileTap={{ scale: !verified.mobile ? 0.98 : 1 }}
                      type="button"
                      onClick={() => verifyOtp("mobile")}
                      disabled={true}
                      className="w-full px-4 py-2 bg-gray-400 text-white rounded-full cursor-not-allowed"
                    >
                      Verify Mobile OTP
                    </motion.button>
                  </div>
                )}
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
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    disabled={verified.email}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-full text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
                <motion.button
                  whileHover={{
                    scale: timers.email === 0 && !verified.email ? 1.02 : 1,
                  }}
                  whileTap={{
                    scale: timers.email === 0 && !verified.email ? 0.98 : 1,
                  }}
                  type="button"
                  onClick={() => timers.email === 0 && sendOtp("email")}
                  disabled={timers.email > 0 || verified.email}
                  className={`w-full px-4 py-2 rounded-full text-white font-semibold ${
                    timers.email > 0 || verified.email
                      ? "bg-gray-400"
                      : "bg-gradient-45"
                  }`}
                >
                  {timers.email > 0
                    ? `Resend in ${formatTime(timers.email)}`
                    : "Send OTP"}
                </motion.button>
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
                {otpSent.email && !verified.email && (
                  <div className="mt-2 space-y-2">
                    <input
                      type="text"
                      placeholder="Enter Email OTP"
                      value={otpValues.emailOtp}
                      onChange={(e) => handleOtpChange("email", e.target.value)}
                      disabled={verified.email}
                      className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-full text-white focus:outline-none focus:border-teal-400"
                    />
                    <motion.button
                      whileHover={{ scale: !verified.email ? 1.02 : 1 }}
                      whileTap={{ scale: !verified.email ? 0.98 : 1 }}
                      type="button"
                      onClick={() => verifyOtp("email")}
                      disabled={true}
                      className="w-full px-4 py-2 bg-gray-400 text-white rounded-full cursor-not-allowed"
                    >
                      Verify Email OTP
                    </motion.button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* WhatsApp Number Section */}
          <div className="space-y-2">
            <label className="block text-white">WhatsApp Number</label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneInput
                  country="in"
                  value={formValues.whatsapp}
                  onChange={(value) => handlePhoneChange("whatsapp", value)}
                  placeholder="WhatsApp Number"
                  disabled={verified.whatsapp}
                  inputStyle={{
                    width: "100%",
                    padding: "0.5rem 0.5rem 0.5rem 48px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backgroundColor: verified.whatsapp
                      ? "#e5e7eb"
                      : "rgba(255,255,255,0.05)",
                    color: "white",
                    fontSize: "0.875rem",
                  }}
                  buttonStyle={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRight: "none",
                    borderRadius: "9999px 0 0 9999px",
                    backgroundColor: verified.whatsapp
                      ? "#e5e7eb"
                      : "rgba(255,255,255,0.05)",
                  }}
                />
              </div>
              <motion.button
                whileHover={{
                  scale: timers.whatsapp === 0 && !verified.whatsapp ? 1.02 : 1,
                }}
                whileTap={{
                  scale: timers.whatsapp === 0 && !verified.whatsapp ? 0.98 : 1,
                }}
                type="button"
                onClick={() => timers.whatsapp === 0 && sendOtp("whatsapp")}
                disabled={timers.whatsapp > 0 || verified.whatsapp}
                className={`w-full px-4 py-2 rounded-full text-white font-semibold ${
                  timers.whatsapp > 0 || verified.whatsapp
                    ? "bg-gray-400"
                    : "bg-gradient-45"
                }`}
              >
                {timers.whatsapp > 0
                  ? `Resend in ${formatTime(timers.whatsapp)}`
                  : "Send OTP"}
              </motion.button>
              {errors.whatsapp && (
                <p className="text-red-500 text-xs">{errors.whatsapp}</p>
              )}
              {otpSent.whatsapp && !verified.whatsapp && (
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    placeholder="Enter WhatsApp OTP"
                    value={otpValues.whatsappOtp}
                    onChange={(e) =>
                      handleOtpChange("whatsapp", e.target.value)
                    }
                    disabled={verified.whatsapp}
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-full text-white focus:outline-none focus:border-teal-400"
                  />
                  <motion.button
                    whileHover={{ scale: !verified.whatsapp ? 1.02 : 1 }}
                    whileTap={{ scale: !verified.whatsapp ? 0.98 : 1 }}
                    type="button"
                    onClick={() => verifyOtp("whatsapp")}
                    disabled={true}
                    className="w-full px-4 py-2 bg-gray-400 text-white rounded-full cursor-not-allowed"
                  >
                    Verify WhatsApp OTP
                  </motion.button>
                </div>
              )}
            </div>
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
          {errors.terms && (
            <p className="text-red-500 text-xs">{errors.terms}</p>
          )}

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
            className="w-full px-6 py-3 bg-gradient-45 text-white font-semibold rounded-full hover:shadow-[0_15px_35px_rgba(124,77,255,0.3)] hover:-translate-y-1 transition-all duration-300"
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
