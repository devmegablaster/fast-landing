import React from "react";
import LandingContent from "./LandingContent";

function index() {
  return (
    <div className="w-screen h-screen pt-16 scrollbar-hide">
      <img src="landing.svg" className="w-full" alt="" />
      <LandingContent />
    </div>
  );
}

export default index;
