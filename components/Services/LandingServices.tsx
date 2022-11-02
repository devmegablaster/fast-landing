import Router from "next/router";
import React from "react";
import data from "./data.json";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Carousel } from "@mantine/carousel";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

function LandingServices() {
  return (
    <div className="w-screen bg-white pb-8">
      <div className="w-11/12 mx-auto bg-white h-fit">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:text-5xl text-3xl pt-6 md:pt-0 font-inter text-black xl:pb-5 pb-3"
        >
          Our Core Services
        </motion.h1>
        {/* <div
          ref={ref}
          className="flex w-full scrollbar-hide overflow-x-scroll relative overflow-y-hidden"
        > */}
        <Carousel
          slideSize="100%"
          slideGap="md"
          controlSize={40}
          align="start"
          slidesToScroll={2}
          nextControlIcon={
            <MdArrowRight className="text-white bg-black rounded-full h-10 w-10" />
          }
          previousControlIcon={
            <MdArrowLeft className="text-white bg-black rounded-full h-10 w-10" />
          }
        >
          {data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: 0.1 }}
              onClick={() => {
                Router.push(`/services/${index}`);
              }}
              className="lg:w-96 cursor-pointer md:w-60 w-52 relative m-2 shrink-0"
            >
              <img
                className="h-full w-full"
                src={`/services/${index}.png`}
                alt=""
              />
              <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
              <div className="flex text-center absolute top-0 left-0 right-0 bottom-0 items-center justify-center">
                <p className="font-inter text-white px-2 xl:text-xl md:text-lg text-base">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
}

export default LandingServices;
