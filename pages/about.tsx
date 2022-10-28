import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function about() {
  return (
    <div className="w-screen h-screen scrollbar-hide overflow-y-auto overflow-x-hidden">
      <div className="absolute top-0 z-50 left-0 right-0">
        <Header />
      </div>
      <div className="xl:h-16 md:h-10 h-16"></div>
      <div className="w-ful h-fit relative">
        <video className="w-screen h-full" autoPlay loop src="vid.mp4"></video>
        <div className="absolute bg-black top-0 left-0 right-0 bottom-0 opacity-40"></div>
        <div className="absolute flex flex-col items-center justify-center top-0 bottom-0 left-0 right-0 text-center">
          <h1 className="text-white xl:text-6xl 2xl:text-7xl md:text-5xl sm:text-3xl text-xl font-inter md:leading-loose w-11/12 my-auto">
            Giving You One-Step Solution With Our Vision and Extensive
            Solutions.
          </h1>
        </div>
      </div>
      <div className="flex flex-col bg-white px-10 py-10 space-y-10">
        <h1 className="md:text-4xl text-2xl text-black font-inter font-normal">
          About Us
        </h1>
        <p className="font-inter text-black md:text-lg">
          Everybody would agree that setting up a company is not the most
          challenging part in business. The greatest challenge is keeping your
          clients by meeting their standards and expectations and not to
          mention; quality and on-time service. That is what is{" "}
          <b>FAST OPERATIONS & MAINTENANCE SERVICES EST</b> all about.
        </p>
        <p className="font-inter text-black md:text-lg">
          Since it started FAST's team, including myself have been dedicated to
          providing innovative solutions to our clients civil, structural and
          electro-mechanical engineering needs. We treat every project, big or
          small as an opportunity to serve our clients the best way possible.
          Every project's goal is always 100% client satisfaction.
        </p>
        <p className="font-inter text-black md:text-lg">
          FAST's achievements over the years have made me proud of being a part
          of its FAST's focus will always be where it belongs; its clients.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default about;
