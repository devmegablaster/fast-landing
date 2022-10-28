import React, { useRef } from "react";

const FeatureRender = ({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="border-4 w-1/3 border-fastblue" />
      <h1 className="text-black lg:text-2xl 2xl:text-3xl text-xl font-inter font-bold md:max-w-xs 2xl:max-w-[25rem] max-w-sm">
        {heading}
      </h1>
      <p className="text-black font-inter font-light lg:text-base 2xl:text-lg text-sm md:max-w-[16rem] 2xl:max-w-[20rem] max-w-[18rem]">
        {body}
      </p>
    </div>
  );
};

function index() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const setPlayBack = () => {
    //// videoRef.current.playbackRate = 0.5;
    videoRef.current?.play();
  };
  return (
    <div className="py-16 relative px-12 flex flex-col space-y-16 bg-white w-screen">
      <img
        src="whybg.svg"
        className="absolute top-0 lg:flex hidden right-0 z-0"
        alt=""
      />
      <h1 className="font-inter text-black tracking-wider 2xl:text-5xl xl:text-4xl lg:text-3xl s:text-2xl text-xl">
        WHY <b>FAST OPERATIONS & MAINTENANCE SERVICES EST</b> ?
      </h1>
      <video
        ref={videoRef}
        src="vid.mp4"
        onCanPlay={setPlayBack}
        autoPlay={true}
        loop={true}
        className="rounded-xl z-10 md:w-11/12 mx-auto"
      ></video>
      <div className="flex flex-col w-full md:w-11/12 mx-auto space-y-12">
        <div className="flex w-full flex-col md:flex-row space-y-10 md:space-y-0 mx-auto items-center justify-between">
          <FeatureRender
            body="To supply clients with services of the highest calibre while upholding the highest ethical and professional standards possible. To be the greatest and most reputable industrial service provider.n"
            heading="Vision"
          />
          <FeatureRender
            body="to strive for excellence in all areas of operation by enhancing quality standards and practises and training competitive employees who can provide clients with services of the highest calibre."
            heading="Mission"
          />
          <FeatureRender
            body="We aspire to create the new chain of Fast team by upholding fundamental human values, respecting nature, and engaging in various activities that assist the weak and disadvantaged."
            heading="Values"
          />
        </div>
        <button className="bg-black px-6 w-fit mx-auto md:mx-0 py-4 rounded-full text-white font-inter font-bold">
          Know More
        </button>
      </div>
    </div>
  );
}

export default index;
