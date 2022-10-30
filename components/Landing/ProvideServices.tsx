import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

function ProvideServices() {
  const isSmall = useMediaQuery("(max-width: 500px)");
  return (
    <div className="w-screen py-14 bg-white">
      <div className="w-11/12 mx-auto">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:text-left text-black font-inter xl:text-2xl md:text-xl mb-2 md:mb-0 text-base"
        >
          Anything and Everything is available on demand
        </motion.p>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:text-left md:max-w-5xl text-fastblue xl:text-6xl md:text-5xl text-2xl tracking-wide font-inter"
        >
          Fast O&M provides any service you can think of!
        </motion.h1>
        <div className="md:pt-14 pt-5 gap-10 grid md:grid-cols-2 grid-cols-1">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: isSmall ? 0.3 : 0.7,
              type: "spring",
              bounce: 0.4,
            }}
            className="w-full md:h-[30rem] object-cover"
            src="service.png"
            alt=""
          />
          <div className="flex flex-col h-full w-full item justify-center md:space-y-8 space-y-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: isSmall ? 0.3 : 0.9,
              }}
              className="w-full md:text-2xl tracking-wider text-black md:pr-10"
            >
              <b>Fast O&M</b> goes above and beyond to provide a wonderful
              experience. Perfectly crafted to meet your industrial needs, with
              nearly limitless options for completing your projects. We serve a
              wide range of industries, including <b>petrochemical</b>,{" "}
              <b>oil</b> and <b>gas</b>, <b>power generation</b>, and others.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvideServices;
