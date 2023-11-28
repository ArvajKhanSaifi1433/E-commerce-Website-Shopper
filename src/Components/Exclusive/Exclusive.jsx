import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

function Exclusive() {
  return (
    <section className="mt-10">
      <div className="container  mx-auto  mt-10 bg-gradient-to-b from-fuchsia-100 to-white">
        <div className="flex justify-around sm:flex-row flex-col-reverse">
          <div className="flex flex-col gap-3 items-start justify-center mx-auto sm:mx-0">
            <h2 className="md:text-3xl text-xl font-semibold">
              Exclusive Offers For You
            </h2>
            <h3 className="font-semibold sm:text-lg text-sm">
              ONLY ON BEST SELLERS PRODUCTS
            </h3>
            <button className="bg-red-500 sm:py-3 sm:px-10 px-8 py-2 rounded-full font-semibold text-white">
              Check Now
            </button>
          </div>
          <div className="flex sm:items-end sm:justify-end justify-center p-10 sm:p-0">
            <img
              src={exclusive_image}
              alt=""
              className="sm:w-[80%] sm:h-[80%] sm:object-contain  w-[60%] h-[60%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exclusive;
