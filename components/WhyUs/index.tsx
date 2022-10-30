import React, { useRef } from "react";
import { motion } from "framer-motion";
import Router from "next/router";
import { useMediaQuery } from "@mantine/hooks";

const FeatureRender = ({
  heading,
  body,
  delay,
}: {
  heading: string;
  body: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay }}
      className="flex flex-col space-y-4"
    >
      <div className="border-4 w-1/3 border-fastblue" />
      <h1 className="text-black lg:text-2xl 2xl:text-3xl text-xl font-inter font-bold md:max-w-xs 2xl:max-w-[25rem] max-w-sm">
        {heading}
      </h1>
      <p className="text-black font-inter font-light lg:text-base 2xl:text-lg text-sm md:max-w-[16rem] 2xl:max-w-[20rem] max-w-[18rem]">
        {body}
      </p>
    </motion.div>
  );
};

function index() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const setPlayBack = () => {
    //// videoRef.current.playbackRate = 0.5;
    videoRef.current?.play();
  };
  const isSmall = useMediaQuery("(max-width: 500px)");
  return (
    <div className="md:py-16 py-8 relative px-12 flex flex-col space-y-16 bg-white w-screen">
      <img
        src="whybg.svg"
        className="absolute top-0 w-1/2 md:w-1/4 right-0 z-0"
        alt=""
      />
      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, bounce: 0.4, type: "spring", delay: 0.2 }}
        className="font-inter z-20 text-black text-center md:text-left md:tracking-wider 2xl:text-5xl xl:text-4xl lg:text-3xl s:text-2xl text-xl"
      >
        WHY <b>FAST OPERATIONS & MAINTENANCE SERVICES EST</b> ?
      </motion.h1>
      <motion.video
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        ref={videoRef}
        src="vid.mp4"
        onCanPlay={setPlayBack}
        autoPlay={true}
        loop={true}
        className="rounded-xl z-10 md:w-9/12 mx-auto"
      ></motion.video>
      <div className="flex flex-col w-full md:w-11/12 mx-auto space-y-12">
        <motion.div className="flex w-full flex-col md:flex-row space-y-10 md:space-y-0 mx-auto items-start justify-between">
          <FeatureRender
            body="To supply clients with services of the highest calibre while upholding the highest ethical and professional standards possible. To be the greatest and most reputable industrial service provider.n"
            heading="Vision"
            delay={0.2}
          />
          <FeatureRender
            body="to strive for excellence in all areas of operation by enhancing quality standards and practises and training competitive employees who can provide clients with services of the highest calibre."
            heading="Mission"
            delay={isSmall ? 0.2 : 0.4}
          />
          <FeatureRender
            body="We aspire to create the new chain of Fast team by upholding fundamental human values, respecting nature, and engaging in various activities that assist the weak and disadvantaged."
            heading="Values"
            delay={isSmall ? 0.2 : 0.6}
          />
        </motion.div>
        <motion.button
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: isSmall ? 0.3 : 0.8,
            bounce: 0.4,
            type: "spring",
          }}
          className="bg-black px-6 w-fit mx-auto md:mx-0 py-4 rounded-full text-white font-inter font-bold"
          onClick={() => {
            Router.push("/services");
          }}
        >
          Know More
        </motion.button>
      </div>
    </div>
  );
}

export default index;
