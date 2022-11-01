import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import data from "../../components/Services/data.json";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useMediaQuery } from "@mantine/hooks";
import Head from "next/head";

function id() {
  const router = useRouter();
  const { id } = router.query;
  const obj = data[Number(id)];
  const isSmall = useMediaQuery("(max-width: 500px)");
  if (obj !== undefined) {
    return (
      <div className="w-screen bg-white h-screen scrollbar-hide overflow-y-auto overflow-x-hidden">
        <Head>
          <title>{obj.title}</title>
        </Head>
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
                {obj.title}
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white px-10 py-10 space-y-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: isSmall ? 1 : 0.3 }}
            className="font-inter text-black md:text-lg"
          >
            FAST O&M's projects range from equipment supply to installation,
            including testing and commissioning, our strength lies in our
            ability to provide a one-stop solution from the supply of material
            to installation and commissioning and any related engineering
            services. FAST O&M is continuously adding through its partner's
            unique patented technologies in line with company philosophy, some
            of the services that FAST O&M currently offers are as given below
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
              transition={{ delay: 0.2 }}
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
                <p className="text-black md:text-lg">{"‣"}</p>
                <p className="text-black md:text-lg font-inter">{item}</p>
              </motion.div>
            ))}
          </div>
          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-inter text-center max-w-6xl text-sm md:max-w-4xl mx-auto text-gray-500 font-semibold md:text-lg"
          >
            To supply clients with services of the highest calibre while
            upholding the highest ethical and professional standards possible.
            To be the greatest and most reputable industrial service provider
          </motion.p> */}
        </div>
        <Footer />
      </div>
    );
  } else {
    return "";
  }
}

export default id;
