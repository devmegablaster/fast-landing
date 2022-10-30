import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

function Safety() {
  const isSmall = useMediaQuery("(max-width: 500px)");
  return (
    <div className="w-screen md:pt-14 md:pb-14 pt-8 pb-0 bg-white">
      <div className="w-11/12 mx-auto">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:text-right text-black font-inter xl:text-2xl md:text-xl mb-2 md:mb-0 text-base"
        >
          Ensuring The Safe Work Environment at Fast O&M
        </motion.p>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:text-right text-fastblue xl:text-6xl md:text-5xl text-2xl tracking-wide font-inter"
        >
          Safety of our workforce
        </motion.h1>
        <div className="md:pt-14 pt-5 gap-10 grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col h-full w-full item justify-center md:space-y-8 space-y-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: isSmall ? 0.3 : 0.7,
              }}
              className="w-full md:text-xl tracking-wider text-black md:pr-10"
            >
              <b>Fast O&M</b> values the well-being of all those engaged in our
              projects, including our own staff. The prevention of{" "}
              <b>work-related injuries</b> and <b>illnesses</b> for workers is a
              primary focus. Through <b>efficient management, education</b>, and
              <b>training</b>, we aim to{" "}
              <b>create a workplace free of accidents and injuries</b>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: isSmall ? 0.3 : 0.9,
              }}
              className="w-full md:text-xl tracking-wider text-black md:pr-10"
            >
              Our firm was founded on the principle that the welfare of its
              employees and its customers are inextricably linked.
            </motion.p>
          </div>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: isSmall ? 0.3 : 1.1,
              type: "spring",
              bounce: 0.4,
            }}
            className="w-full md:h-[30rem] object-cover"
            src="safety.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Safety;
