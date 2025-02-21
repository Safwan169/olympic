/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  const videoSource = "olympic.mp4";

  return (
    <div className="relative -z-50 h-screen overflow-hidden">
      <div className=" w-full h-100% bg-black opacity-50"></div>

      <video
        src={videoSource}
        autoPlay
        loop
        muted
        className="absolute  z-10 top-0 left-0 w-full h-full object-cover"
        playsInline
      />
    </div>
  );
};

export default Banner;
