"use client"; // If using App Router (app/ structure)

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Register from "@/components/Register/Register";

const register = () => {
  useEffect(() => {}, []);

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
        <Register />
      </motion.div>
    </section>
  );
};

export default register;
