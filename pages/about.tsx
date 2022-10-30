import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

function about() {
  const isSmall = useMediaQuery("(max-width: 500px)");
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
          transition={{ delay: isSmall ? 0.8 : 0.2 }}
          className="md:text-4xl xl:text-5xl text-2xl text-black font-inter font-normal"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: isSmall ? 1 : 0.2 }}
          className="font-inter text-black md:text-lg"
        >
          Company, <b>FAST Operations and Maintenance</b>, based in the{" "}
          <b>Kingdom of Saudi Arabia</b>. We are a forward-thinking organisation
          that is investing in <b>Saudi Arabia</b>'s future by using our wealth
          of knowledge, sound business judgement, and cutting-edge technology.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: isSmall ? 1.2 : 0.2 }}
          className="font-inter text-black md:text-lg"
        >
          With decades of expertise in top-level product engineering, advising,
          and supplying high-quality products and services to the Oil, Gas,
          Petrochemical, Power, and Process sector, <b>FAST O&M</b> was created
          in
          <b>October 2017</b> by a strong engineering core team spanning several
          aspects of the business.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          The management team at <b>FAST O&M</b> is committed to providing
          exceptional service and is responsible for ensuring that all of the
          company's customers are happy with the services provided. Its
          technical competency is kept at a high level by its competent,
          experienced, and sufficiently qualified staff, which in turn is backed
          by cutting-edge tools, cutting-edge processes and technology, and
          cutting-edge concepts. It also complies with all national and
          international standards that are relevant, as well as all related
          regulations and laws.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          The <b>FAST O&M</b> team has received international certification from
          the ISO.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          <b>FAST O&M's energy-saving</b> innovations help clients save money on
          fuel, water, electricity, and greenhouse gas emissions across a wide
          variety of product/service offerings. In order to meet the energy
          needs of the next generation now, <b>FAST O&M</b>, in conjunction with
          its partners, provides clean energy solutions to help businesses
          control, monitor, and reduce their energy usage. These solutions
          utilise cutting-edge technology to boost operational and financial
          performance.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-inter text-black md:text-lg"
        >
          Projects undertaken by <b>FAST O&M</b> include the{" "}
          <b>sourcing of equipment</b>, its <b>installation</b>, and the{" "}
          <b>accompanying testing and commissioning</b>. The company's forte is
          that it can offer a{" "}
          <b>
            comprehensive service, beginning with the sourcing of materials and
            ending with the commissioning of the completed project and any
            necessary engineering services
          </b>
          . In keeping with its core values, <b>FAST O&M</b> is always expanding
          its arsenal of exclusive innovations via strategic alliances.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
}

export default about;
