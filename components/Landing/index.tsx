import React from "react";
import LandingContent from "./LandingContent";
import Header from "../Header";

function index() {
  return (
    <div className="w-screen pt-0 scrollbar-hide">
      <div className="absolute top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div className="xl:h-24 md:h-20 h-0"></div>
      <img src="landing.svg" className="w-full md:flex hidden" alt="" />
      <LandingContent />
    </div>
  );
}

export default index;
