import Router from "next/router";
import React from "react";

function RouteBtn({ text, route }: { text: string; route: string }) {
  return (
    <button
      onClick={() => {
        Router.push(route);
      }}
      className="text-white xl:text-lg text-base font-light"
    >
      {text}
    </button>
  );
}

export default RouteBtn;
