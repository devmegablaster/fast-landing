import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import { useMediaQuery } from "@mantine/hooks";

function index() {
  const isSmall = useMediaQuery("(max-width: 500px)");
  return (
    <div className="w-screen h-screen bg-white scrollbar-hide overflow-y-auto overflow-x-hidden">
      <div className="absolute top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div className="md:pb-14">
        <div className="xl:h-16 md:h-10 h-16"></div>
        <div className="md:w-9/12 mx-auto md:rounded-2xl md:mt-20 relative">
          <motion.video
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.2 }}
            className="w-full md:rounded-2xl mx-auto"
            autoPlay
            loop
            src="/vid.mp4"
          ></motion.video>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.2 }}
            className="absolute bg-black md:rounded-2xl top-0 left-0 right-0 bottom-0 opacity-40"
          ></motion.div>
          <div className="absolute flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0 text-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", bounce: 0.2 }}
              className="text-white xl:text-5xl 2xl:text-6xl md:text-4xl sm:text-2xl text-xl font-inter md:leading-loose w-11/12 my-auto"
            >
              Our Core Services
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white px-10 py-10 space-y-10">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: isSmall ? 0.8 : 0.2 }}
          className="md:text-4xl xl:text-5xl text-2xl text-black font-inter font-normal"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: isSmall ? 1 : 0.2 }}
          className="font-inter text-black md:text-lg"
        >
          FAST Operations & Maintenance Services Est. offers{" "}
          <b>
            engineering support and supplementary manpower services to civil,
            structural, architectural and electro-mechanical projects
          </b>{" "}
          all over the Kingdom. FAST Operations & Maintenance Services Est also
          sells electrical, mechanical and instrumentation materials, tools and
          equipment .
        </motion.p>
        <Services />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-center max-w-4xl text-sm mx-auto text-gray-500 font-semibold md:text-lg"
        >
          To supply clients with services of the highest calibre while upholding
          the highest ethical and professional standards possible. To be the
          greatest and most reputable industrial service provider
        </motion.p>
      </div>
      <Footer />
    </div>
  );
}

export default index;
