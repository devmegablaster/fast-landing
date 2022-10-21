import Image from "next/image";
import React from "react";
import RouteBtn from "./RouteBtn";

function index() {
  const routesArr = [
    {
      text: "Home",
      route: "/",
    },
    {
      text: "About Us",
      route: "/about",
    },
    {
      text: "Services",
      route: "/services",
    },
    {
      text: "Contact",
      route: "/contact",
    },
  ];

  return (
    <div className="flex absolute top-0 left-0 right-0 shadow-lg bg-secondary border-b border-white items-center justify-between w-full p-6">
      <img className="w-28" src={"/fast.svg"} />
      <div className="flex items-center space-x-12 text-white">
        {
          // * Map over the routes array and create a button for each route
          routesArr.map((route) => {
            return <RouteBtn route={route.route} text={route.text} />;
          })
        }
      </div>
    </div>
  );
}

export default index;
