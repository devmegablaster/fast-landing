import Link from "next/link";
import Router from "next/router";
import React from "react";

function RouteBtn({
  text,
  route,
  homepage,
}: {
  text: string;
  route: string;
  homepage?: boolean;
}) {
  return (
    <button
      onClick={() => {
        Router.push(route);
      }}
      className={`${
        homepage ? "text-white" : "text-black"
      } z-50 xl:text-lg hover:scale-105 active:scale-95 hover:underline underline-offset-4 duration-150 text-base font-normal`}
    >
      {text}
    </button>
  );
}

export default RouteBtn;
