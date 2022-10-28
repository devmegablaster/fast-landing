import Link from "next/link";
import Router from "next/router";
import React from "react";

function RouteBtn({ text, route }: { text: string; route: string }) {
  return (
    <button
      onClick={() => {
        Router.push(route);
        console.log("clicked");
      }}
      className="text-white z-50 xl:text-lg text-base font-light"
    >
      {text}
    </button>
  );
}

export default RouteBtn;
