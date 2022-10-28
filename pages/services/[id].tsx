import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import data from "../../components/Services/data.json";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function id() {
  const router = useRouter();
  const { id } = router.query;
  const obj = data[Number(id)];
  if (obj !== undefined) {
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
            src="/vid.mp4"
          ></motion.video>
          <div className="absolute bg-black top-0 left-0 right-0 bottom-0 opacity-40"></div>
          <div className="absolute flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0 text-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", bounce: 0.2 }}
              className="text-white xl:text-6xl 2xl:text-7xl md:text-5xl sm:text-3xl text-xl font-inter md:leading-loose w-11/12 my-auto"
            >
              {obj.title}
            </motion.h1>
          </div>
        </div>
        <div className="flex flex-col bg-white px-10 py-10 space-y-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-inter text-black md:text-lg"
          >
            FAST O&M's projects range from equipment supply to installation,
            including testing and commissioning, our strength lies in our
            ability to provide one stop solution from supply of material to
            installation and commissioning and any related engineering services.
            FAST O&M is continuously adding through its partners unique patented
            technologies in line with company philosophy, some of the services
            that FAST O&M currently offers are as given below
          </motion.p>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:text-4xl xl:text-5xl text-2xl text-black font-inter font-normal"
          >
            What We Provide
          </motion.h1>
          <div className="flex flex-col relative space-y-2">
            <motion.img
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              src={`/services/${id}.png`}
              className="md:absolute md:right-0 md:w-3/12 md:h-full h-40 md:object-cover"
              alt=""
            />
            {obj.provide.map((item, index) => (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index / 2) * 0.1 }}
                className="flex space-x-2 items-center"
              >
                <p className="text-black">{"⚫️"}</p>
                <p className="text-black text-lg font-inter">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-inter text-center max-w-4xl mx-auto text-black md:text-lg"
          >
            The vision of FAST O&M is to help all our workers realize their
            dreams, provide clients with high-quality services that surpass
            their expectations, and consequently contribute to a better society
            for our clients and other stakeholders as well as the public. We
            will continue our drive to realize this vision.
          </motion.p>
        </div>
        <Footer />
      </div>
    );
  } else {
    return "";
  }
}

export default id;
