import { Burger, Drawer } from "@mantine/core";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import React from "react";
import RouteBtn from "./RouteBtn";
import { motion } from "framer-motion";

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
  const router = useRouter();
  const homepage = router?.pathname === "/";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`shadow-2xl z-50 ${
        homepage ? "bg-black" : "bg-white"
      } border-b border-white items-center justify-between w-full xl:h-24 md:h-20 sm:h-16 h-16 flex md:px-6 px-2`}
    >
      <img
        onClick={() => {
          Router.push("/");
        }}
        className="md:w-36 w-32 cursor-pointer"
        src={"/fast.svg"}
      />
      <div className="hidden md:flex items-center space-x-12 text-white">
        {
          // * Map over the routes array and create a button for each route
          routesArr.map((route, index) => {
            return (
              <RouteBtn
                homepage={homepage}
                key={index}
                route={route.route}
                text={route.text}
              />
            );
          })
        }
      </div>
      <Burger
        opened={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        color={homepage ? "white" : "black"}
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
        <div className="flex relative h-full w-full flex-col overflow-y-scroll scrollbar-hide items-center justify-center">
          <div className="absolute right-0 top-0 left-0 flex justify-between items-center">
            <img src="fast.svg" className="w-24" alt="" />
            <Burger
              opened={isOpen}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="md:hidden h-full flex"
            />
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
    </motion.div>
  );
}

export default index;
