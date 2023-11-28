import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-fuchsia-100 to-white ">
      <div className="container flex mx-auto justify-center">
        <div className="grid sm:grid-cols-2 grid-cols-1 ">
          <div className="flex pb-10 sm:pb-0 sm:justify-center flex-col gap-4 order-2 sm:order-1 sm:w-[80%] mx-auto">
            <h2 className=" text-lg md:text-2xl font-semibold">
              NEEW ARRIVALS ONLY
            </h2>
            <div className="flex flex-col gap-1  sm:gap-2">
              <div className="flex items-center gap-2  ">
                <p className="font-bold text-3xl md:text-5xl">new</p>
                <img
                  src={hand_icon}
                  alt="Hero_hen_icon"
                  className="w-10 h-10 object-cover"
                />
              </div>
              <p className="font-bold text-3xl md:text-5xl">Collection</p>
              <p className="font-bold text-3xl md:text-5xl">For EveryOne</p>
            </div>
            <div className="flex gap-3 self-start es:mt-3 mt-2 bg-red-500 sm:px-10 px-5 sm:py-4 py-3 rounded-full font-semibold tracking-wide text-white">
              <div>Latest Collection</div>
              <img src={arrow} alt="arrow icon" />
            </div>
          </div>
          <div className="flex justify-center sm:justify-end items-center w-full h-full order-1 sm:order-2">
            <img
              src={hero_img}
              alt="hero_image"
              className="sm:h-[80%] h-[70%] mt-10 object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
