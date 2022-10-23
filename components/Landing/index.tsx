import React from "react";
import LandingContent from "./LandingContent";

function index() {
  return (
    <div className="w-screen pt-0 scrollbar-hide">
      <div className="xl:h-24 md:h-20 sm:h-16 h-0"></div>
      <img src="landing.svg" className="w-full md:flex hidden" alt="" />
      <LandingContent />
    </div>
  );
}

export default index;
