import { Burger, Drawer } from "@mantine/core";
import Image from "next/image";
import Router from "next/router";
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
      route: "about",
    },
    {
      text: "Services",
      route: "services",
    },
    {
      text: "Contact",
      route: "contact",
    },
  ];

  return (
    <div className="shadow-lg z-50 bg-secondary border-b border-white items-center justify-between w-full xl:h-24 md:h-20 sm:h-16 h-16 flex md:px-6 px-2">
      <img
        onClick={() => {
          Router.push("/");
        }}
        className="w-28 cursor-pointer"
        src={"/fast.svg"}
      />
      <div className="hidden md:flex items-center space-x-12 text-white">
        {
          // * Map over the routes array and create a button for each route
          routesArr.map((route, index) => {
            return (
              <RouteBtn key={index} route={route.route} text={route.text} />
            );
          })
        }
      </div>
      <Burger
        opened={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="md:hidden h-fit flex"
      />
      <Drawer
        opened={isOpen}
        size={"xl"}
        padding="xl"
        withCloseButton={false}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="flex relative h-full w-full flex-col items-center justify-center">
          <div className="absolute right-0 top-0">
            <Burger
              opened={isOpen}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="md:hidden h-fit flex"
            />
          </div>
          <div className="absolute left-0 top-0">
            <img src="fast.svg" className="w-24" alt="" />
          </div>
          <div className="flex flex-col h-full space-y-10 pt-20">
            {routesArr.map((route, index) => {
              return (
                <button
                  onClick={() => {
                    Router.push(route.route);
                  }}
                  className="text-3xl text-white px-2 py-2 font-inter rounded-lg w-fit mx-auto"
                >
                  {route.text}
                </button>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default index;
