import React from "react";

function LandingContent() {
  return (
    <div className="flex flex-col 2xl:space-y-12 md:space-y-10 space-y-8  h-full text-white bg-primary 2xl:py-12 2xl:px-10 md:py-10 md:px-8 py-10 px-6">
      <h1 className="2xl:text-7xl lg:text-5xl md:text-4xl text-3xl tracking-wide font-normal font-inter">
        Giving You One-Step Solution With Our
      </h1>
      <h1 className="2xl:text-7xl lg:text-5xl md:text-4xl text-3xl tracking-wide font-normal font-inter">
        Vision and Extensive Solutions.
      </h1>
      <p className="font-inter 2xl:text-xl md:text-lg text-sm tracking-more max-w-6xl font-light">
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
