import React from "react";
import ContactSection from "./ContactSection";

function index() {
  return (
    <div className="w-screen flex flex-col bg-fastblue">
      <div className="w-11/12 relative mx-auto px-10 pt-12 pb-28 flex flex-col space-y-10 xl:space-y-12 h-full">
        <img
          src="footerbg.svg"
          className="absolute right-0 top-0 bottom-0 lg:flex hidden h-full"
          alt=""
        />
        <h1 className="text-white font-inter tracking-wide 2xl:text-7xl xl:text-6xl md:text-5xl text-3xl">
          Have Any Amazing Projects
        </h1>
        <h1 className="text-white font-inter tracking-wide 2xl:text-7xl xl:text-6xl md:text-5xl text-3xl">
          Need to be Done?
        </h1>
        <button className="bg-black text-white font-inter text-xl px-10 py-4 mx-auto md:mx-0 rounded-full w-fit">
          Let's Talk
        </button>
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
}

export default index;
