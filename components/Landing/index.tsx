import React from "react";
import LandingContent from "./LandingContent";
import Header from "../Header";
import { motion } from "framer-motion";

function index() {
  return (
    <div className="w-screen bg-primary pt-0 scrollbar-hide">
      <div className="absolute top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div className="xl:h-24 md:h-20 h-0"></div>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
        src="landing.svg"
        className="w-full md:flex hidden"
        alt=""
      />
      <LandingContent />
    </div>
  );
}

export default index;
