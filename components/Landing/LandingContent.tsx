import React from "react";

function LandingContent() {
  return (
    <div className="flex flex-col space-y-12 text-white bg-primary py-12 px-10">
      <h1 className="2xl:text-7xl xl:text-6xl text-3xl tracking-wide font-normal font-inter">
        Giving You One-Step Solution With Our
      </h1>
      <h1 className="2xl:text-7xl xl:text-6xl text-3xl tracking-wide font-normal font-inter">
        Vision and Extensive Solutions.
      </h1>
      <p className="font-inter 2xl:text-xl tracking-more max-w-6xl font-light">
        Our organization, comprising of employees having a combined experience
        of 21 years in the industry and market, specializes in supply and
        services of all kinds of Mechanical, Electrical, Civil and Industrial
        applications.
      </p>
      <div className="flex space-y-6 flex-col font-inter">
        <h1 className="text-7xl">21+</h1>
        <h3 className="text-xl font-extralight font-inter tracking-wide">
          Years in Industry
        </h3>
      </div>
    </div>
  );
}

export default LandingContent;
