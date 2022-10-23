import { Burger } from "@mantine/core";
import Image from "next/image";
import React from "react";
import RouteBtn from "./RouteBtn";

function index() {
  const [isOpen, setIsOpen] = React.useState(false);
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
    <div className="shadow-lg bg-secondary border-b border-white items-center justify-between w-full xl:h-24 md:h-20 sm:h-16 h-16 flex md:px-6 px-2">
      <img className="w-28" src={"/fast.svg"} />
      <div className="hidden md:flex items-center space-x-12 text-white">
        {
          // * Map over the routes array and create a button for each route
          routesArr.map((route) => {
            return <RouteBtn route={route.route} text={route.text} />;
          })
        }
      </div>
      <Burger
        opened={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="md:hidden flex"
      />
    </div>
  );
}

export default index;
