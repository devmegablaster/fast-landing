import React from "react";
import ContactSection from "./ContactSection";
import { motion } from "framer-motion";

function index() {
  return (
    <motion.div
      initial={{ backgroundColor: "#ffffff" }}
      whileInView={{ backgroundColor: "#00ADEF" }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="w-screen flex flex-col bg-fastblue"
    >
      <div className="md:w-11/12 w-full relative mx-auto px-10 md:pt-12 pt-8 pb-12 md:pb-28 flex flex-col space-y-5 md:space-y-10 xl:space-y-12 h-full">
        <img
          src="/footerbg.svg"
          className="absolute right-0 top-0 z-0 bottom-0 h-full"
          alt=""
        />
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
          className="text-white text-center md:text-left font-bold font-inter md:tracking-wide 2xl:text-7xl z-20 xl:text-6xl md:text-5xl text-xl"
        >
          Have Any Amazing Projects
        </motion.h1>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
          className="text-white text-center md:text-left font-bold font-inter md:tracking-wide 2xl:text-7xl z-20 xl:text-6xl md:text-5xl text-xl"
        >
          Need to be Done?
        </motion.h1>
        <motion.button
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, bounce: 0.4, type: "spring" }}
          className="bg-black text-white font-inter md:text-xl px-10 py-4 mx-auto md:mx-0 z-20 rounded-full w-fit"
        >
          Let's Talk
        </motion.button>
      </div>
      <div>
        <ContactSection />
      </div>
    </motion.div>
  );
}

export default index;
