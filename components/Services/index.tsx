import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import data from "./data.json";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

function index() {
  const isSmall = useMediaQuery("(max-width: 500px)");
  return (
    <motion.div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-5">
      {data.map((item, index) => (
        <ServiceCard
          delay={isSmall ? 0.3 : (index - Math.floor(index / 3) * 3) * 0.2}
          title={item.title}
          index={index}
        />
      ))}
    </motion.div>
  );
}

export default index;
