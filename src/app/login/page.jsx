"use client"; 

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const Login = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    terms: true,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.email) newErrors.email = "Please input your Email.";
    if (!formValues.password)
      newErrors.password = "Please input your Password.";
    if (!formValues.terms)
      newErrors.terms = "Please agree to the Terms of Use and Privacy Policy.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://www.margda.in/api/android/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: formValues.email,
          password: formValues.password,
        }),
      });

      const userData = await response.json();

      if (response.status === 404) {
        alert("Invalid email. Please check your credentials.");
        setIsLoading(false);
      } else if (response.status === 401) {
        alert(userData.message);
        setIsLoading(false);
      } else if (response.status === 200) {
        localStorage.setItem("userData", JSON.stringify(userData));
        setFormValues({
          email: "",
          password: "",
          terms: false,
        });
        setTimeout(() => {
          router.push("/serviceexchange");
        }, 500);
      } else {
        alert("An unexpected error occurred. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(
        error.message === "Failed to fetch"
          ? "Network error: Please check your internet connection"
          : "Failed to connect to the server. Please try again later."
      );
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen mt-24 flex items-center justify-center bg-gradient-135">
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-teal-400 mb-6 text-center"
        >
          Login
        </motion.h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400 text-lg" />
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-2 bg-white/5 border border-white/20 rounded-full text-white focus:outline-none focus:border-teal-400 placeholder-white/50"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit(e);
              }}
              className="w-full pl-12 pr-12 py-2 bg-white/5 border border-white/20 rounded-full text-white focus:outline-none focus:border-teal-400 placeholder-white/50"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formValues.terms}
              onChange={handleInputChange}
              className="h-4 w-4 accent-teal-400 focus:ring-teal-400 border-white/20 rounded"
            />
            <label className="ml-3 text-sm text-white/80 flex-1">
              I agree to the{" "}
              <span className="font-semibold text-teal-400 hover:underline">
                Terms of Use and Privacy Policy
              </span>
              .
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-400 text-xs -mt-4">{errors.terms}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`w-full px-6 py-3 bg-gradient-45 text-white font-semibold rounded-full hover:shadow-[0_15px_35px_rgba(124,77,255,0.3)] hover:-translate-y-1 transition-all duration-300 ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <span className="spinner" />
                <span className="ml-2">Signing In...</span>
              </span>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>

        <p className="text-white/70 text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-teal-400 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>

      <style jsx>{`
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #ffffff;
          border-top: 3px solid #14b8a6;
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
    </section>
  );
};

export default Login;
