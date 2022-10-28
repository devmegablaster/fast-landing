import React from "react";
import data from "./data.json";
import ServiceCard from "./ServiceCard";

function index() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-5">
      {data.map((item, index) => (
        <ServiceCard delay={0.2} title={item.title} index={index} />
      ))}
    </div>
  );
}

export default index;
