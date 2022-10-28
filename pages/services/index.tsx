import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/Services";

function index() {
  return (
    <div className="w-screen h-screen scrollbar-hide overflow-y-auto overflow-x-hidden">
      <div className="absolute top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div className="xl:h-16 md:h-10 h-16"></div>
      <div className="w-ful h-fit relative">
        <motion.video
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.2 }}
          className="w-screen h-full"
          autoPlay
          loop
          src="vid.mp4"
        ></motion.video>
        <div className="absolute bg-black top-0 left-0 right-0 bottom-0 opacity-40"></div>
        <div className="absolute flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0 text-center">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", bounce: 0.2 }}
            className="text-white xl:text-6xl 2xl:text-7xl md:text-5xl sm:text-3xl text-xl font-inter md:leading-loose w-11/12 my-auto"
          >
            Our Core Services
          </motion.h1>
        </div>
      </div>
      <div className="flex flex-col bg-white px-10 py-10 space-y-10">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:text-4xl xl:text-5xl text-2xl text-black font-inter font-normal"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
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
          className="font-inter text-center max-w-4xl mx-auto text-black md:text-lg"
        >
          The vision of FAST O&M is to help all our workers realize their
          dreams, provide clients with high-quality services that surpass their
          expectations, and consequently contribute to a better society for our
          clients and other stakeholders as well as the public. We will continue
          our drive to realize this vision.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
}

export default index;
