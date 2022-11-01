import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMediaQuery } from "@mantine/hooks";
import { FaPhoneAlt, FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function contact() {
  const isSmall = useMediaQuery("(max-width: 500px)");
  return (
    <div className="w-screen h-screen bg-white scrollbar-hide overflow-y-auto overflow-x-hidden">
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="absolute top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div className="xl:h-24 md:h-20 sm:h-16 h-16"></div>
      <div className="bg-white px-10 relative pt-14 md:pb-28 pb-14 space-y-8 flex flex-col w-full h-fit lg:h-full items-start">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
          src="contact.png"
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
          FAST is here to help you <br />
          Our experts are available to answer any questions you might have.
          We've got the answers.
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
            className="max-w-lg text-lg text-black underline underline-offset-4"
          >
            Office 308, 3rd Floor,
            <br />
            Balhamer Business Gate,
            <br />
            Ash Shati Ash Sharqi,
            <br />
            Dammam - 32414,
            <br />
            Kingdom of Saudi Arabia
          </motion.p>
        </div>
        <div className="flex flex-col space-y-2">
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
            className="max-w-lg flex space-x-2 items-center text-lg text-black underline underline-offset-4"
          >
            <MdEmail />
            <span>sales@fast-arabia.com</span>
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 1.8 }}
            className="max-w-lg flex space-x-2 items-center text-lg text-black underline underline-offset-4"
          >
            <MdEmail />
            <span>sales2@fast-arabia.com</span>
          </motion.p>
        </div>
        <div className="flex flex-col space-y-2">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 2 }}
            className="text-3xl text-black font-bold font-inter"
          >
            Call Us
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 2.2 }}
            className="max-w-lg flex space-x-2 items-center text-lg text-black underline underline-offset-4"
          >
            <FaFax />
            <span>+966 13 831 1137</span>
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 2.4 }}
            className="max-w-lg flex space-x-2 items-center text-lg text-black underline underline-offset-4"
          >
            <FaPhoneAlt />
            <span>+966 549304048</span>
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 0.3 : 2.6 }}
            className="max-w-lg flex space-x-2 items-center text-lg text-black underline underline-offset-4"
          >
            <FaPhoneAlt />
            <span>+966 509534288</span>
          </motion.p>
        </div>
      </div>
      <Footer removeBanner />
    </div>
  );
}

export default contact;
