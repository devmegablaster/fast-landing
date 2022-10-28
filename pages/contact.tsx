import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMediaQuery } from "@mantine/hooks";

function contact() {
  const isSmall = useMediaQuery("(max-width: 500px)");
  return (
    <div className="w-screen h-screen bg-white scrollbar-hide overflow-y-auto overflow-x-hidden">
      <div className="absolute top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div className="xl:h-24 md:h-20 sm:h-16 h-16"></div>
      <div className="bg-white px-10 relative py-14 space-y-8 flex flex-col w-full h-fit lg:h-full items-start">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
          src="contact.svg"
          className="lg:absolute lg:w-1/3 xl:w-1/2 h-full right-10 top-10"
          alt=""
        />
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-5xl text-black font-bold font-inter"
        >
          Discover Us
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="max-w-lg text-lg text-black"
        >
          Fast is here to help you; Our experts are available to answer any
          questions you might have. We've got the answers.
        </motion.p>
        <div className="flex flex-col space-y-4">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 1 }}
            className="text-3xl text-black font-bold font-inter"
          >
            Visit Us
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 1.2 }}
            className="max-w-lg text-lg text-black underline underline-offset-2"
          >
            Office 308, 3rd Floor, Balhamer Business Gate, Ash Shati Ash Sharqi,
            Dammam 32414. Kingdom of Saudi Arabia. +966 13 831 1137
          </motion.p>
        </div>
        <div className="flex flex-col space-y-4">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 1.4 }}
            className="text-3xl text-black font-bold font-inter"
          >
            Email Us
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 1.6 }}
            className="max-w-lg text-lg text-black underline underline-offset-2"
          >
            sales2@fast-arabia.com
          </motion.p>
        </div>
        <div className="flex flex-col space-y-4">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 1.8 }}
            className="text-3xl text-black font-bold font-inter"
          >
            Call Us
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 2 }}
            className="max-w-lg text-lg text-black underline underline-offset-2"
          >
            +966 509534288
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
