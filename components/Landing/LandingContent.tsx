import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function LandingContent() {
  return (
    <div className="flex flex-col 2xl:space-y-16 md:space-y-12 space-y-10  h-full text-white bg-primary 2xl:py-12 2xl:px-10 md:py-10 md:px-8 py-10 px-3">
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            bounce: 0.3,
            type: "spring",
            delay: 0.2,
          }}
          className="2xl:text-7xl text-center lg:text-5xl md:text-4xl text-3xl tracking-wide font-normal font-inter"
        >
          Giving You One-Step Solution With Our Vision and
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            bounce: 0.3,
            type: "spring",
            delay: 0.5,
          }}
          className="2xl:text-7xl text-center lg:text-5xl md:text-4xl text-3xl tracking-wide font-normal font-inter"
        >
          Extensive Solutions.
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="font-inter 2xl:text-xl md:text-lg text-sm text-center mx-auto tracking-more font-light"
      >
        FAST Operations and Maintenance, a Company incorporated in the Kingdom
        of Saudi Arabia. With a combination of experience, business acumen and
        technical excellence, we are a company that is not only providing
        innovative services but also investing in Saudi Arabia's future
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="flex w-fit mx-auto text-center space-y-6 flex-col font-inter"
      >
        <h1 className="text-7xl">
          <CountUp end={21} duration={1} delay={1} />+
        </h1>
        <h3 className="text-xl font-extralight font-inter tracking-wide">
          Years of Combined experience
        </h3>
      </motion.div>
    </div>
  );
}

export default LandingContent;
