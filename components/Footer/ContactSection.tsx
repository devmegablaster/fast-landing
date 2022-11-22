import Router from "next/router";
import React from "react";
import { motion } from "framer-motion";
import { FaFax, FaPhoneAlt } from "react-icons/fa";
import Maps from "./Maps";

function ContactSection() {
  return (
    <motion.div className="w-screen pt-6 pb-20 bg-white z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
        className="w-11/12 mx-auto bg-white z-40 flex flex-col space-y-6"
      >
        <img src="/fast.svg" className="w-40" alt="" />
        <div className="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-4 justify-between">
          <p className="font-inter text-black max-w-lg">
            Our organization comprises of employees having a combined experience
            of 21 years in the industry and market, specializes in supply and
            services of all kinds of Mechanical, Electrical, Civil and
            Industrial applications.
          </p>
          <div className="flex flex-col space-y-1">
            <h1 className="text-black font-inter font-bold text-base">
              Headquarters
            </h1>
            <p className="font-inter pt-2 text-black max-w-xs">
              Office 308, 3rd Floor,
              <br />
              Balhamer Business Gate,
              <br />
              Ash Shati Ash Sharqi,
              <br />
              Dammam - 32414,
              <br />
              Kingdom of Saudi Arabia
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="text-black font-inter font-bold text-base">
              Contact Info
            </h1>
            <p className="font-inter pt-2 flex items-center space-x-2 text-black max-w-sm">
              <FaFax />
              <span>+966 13 831 1137</span>
            </p>
            <p className="font-inter flex items-center space-x-2 text-black max-w-sm">
              <FaPhoneAlt />
              <span>+966 549304048</span>
            </p>
            <p className="font-inter flex items-center space-x-2 text-black max-w-sm">
              <FaPhoneAlt />
              <span>+966 509534288</span>
            </p>
          </div>
          <div className="flex-col md:flex hidden justify-between">
            <h1
              onClick={() => {
                Router.push("/");
              }}
              className="text-black hover:underline underline-offset-4 cursor-pointer duration-150 hover:scale-105 font-inter font-bold text-base"
            >
              Home
            </h1>
            <h1
              onClick={() => {
                Router.push("/about");
              }}
              className="text-black hover:underline underline-offset-4 cursor-pointer duration-150 hover:scale-105 font-inter font-bold text-base"
            >
              About Us
            </h1>
            <h1
              onClick={() => {
                Router.push("/services");
              }}
              className="text-black hover:underline underline-offset-4 cursor-pointer duration-150 hover:scale-105 font-inter font-bold text-base"
            >
              Services
            </h1>
            <h1
              onClick={() => {
                Router.push("/contact");
              }}
              className="text-black hover:underline underline-offset-4 cursor-pointer duration-150 hover:scale-105 font-inter font-bold text-base"
            >
              Contact Us
            </h1>
          </div>
        </div>
        <Maps />
      </motion.div>
    </motion.div>
  );
}

export default ContactSection;
