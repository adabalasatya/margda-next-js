"use client"; // If using App Router (app/ structure)

import React, { useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import RegisterMobile from "@/components/Register/RegisterMobile";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <RegisterMobile />
      </motion.div>
    </section>
  );
};

export default Register;
