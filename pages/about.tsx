import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function about() {
  return (
    <div className="w-screen h-screen bg-white scrollbar-hide overflow-y-auto overflow-x-hidden">
      <div className="absolute top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div className="xl:h-screen">
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
              Giving You One-Step Solution With Our Vision and Extensive
              Solutions.
            </motion.h1>
          </div>
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
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          <b>FAST Operations and Maintenance</b>, a Company incorporated in the{" "}
          <b>Kingdom of Saudi Arabia</b>. With a combination of experience,
          business acumen and technical excellence, we are a company that is not
          only providing an innovative service but also investing in Saudi
          Arabia's future.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          <b>FAST O&M was established in October 2017</b> by a strong
          engineering core team cutting across several facets of the industry
          having decades of experience in top level product engineering,
          consulting and providing high quality products and services to the
          Oil, Gas, Petrochemical, Power and Process industry.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          Everybody would agree that setting up a company is not the most
          challenging part in business. The greatest challenge is keeping your
          clients by meeting their standards and expectations and not to
          mention; quality and on-time service. That is what is{" "}
          <b>FAST OPERATIONS & MAINTENANCE SERVICES EST</b> all about.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          FAST O&M's management takes full responsibility to ensure the full
          satisfaction of its customer's concerning their requirement,
          specifications and agreed conditions. To meet its challenges, it
          maintains a high level of technical capability through its
          professional, experienced, and adequately trained employees supported
          using latest equipment, modern techniques & technology as well as
          innovative ideas. It also follows all relevant National and
          International Standards as well as applicable regulatory and legal
          requirements.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          Since it started FAST's team, including myself have been dedicated to
          providing innovative solutions to our clients civil, structural and
          electro-mechanical engineering needs. We treat every project, big or
          small as an opportunity to serve our clients the best way possible.
          Every project's goal is always 100% client satisfaction.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          FAST's achievements over the years have made me proud of being a part
          of its FAST's focus will always be where it belongs; its clients.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
}

export default about;
