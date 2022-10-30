import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function ServiceCard({
  title,
  index,
  delay,
}: {
  title: string;
  index: number;
  delay: number;
}) {
  const router = useRouter();
  const [hoverTimer, setHoverTimer] = React.useState(delay);
  return (
    <motion.div
      onClick={() => {
        router.push(`/services/${index}`);
      }}
      initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
        transition: { delay: hoverTimer, bounce: 0.5 },
      }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => {
        setHoverTimer(0);
      }}
      viewport={{ once: true }}
      className="flex cursor-pointer flex-col w-full space-y-2 p-4 hover:scale-105 duration-150"
    >
      <img src={`services/${index}.png`} alt="" />
      <p className="text-black font-inter font-bold">{title}</p>
    </motion.div>
  );
}

export default ServiceCard;
