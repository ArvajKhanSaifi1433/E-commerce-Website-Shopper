import React from "react";

function Offers() {
  return (
    <section className="mt-10">
      <div className="container  mx-auto  mt-10 bg-gradient-to-b from-fuchsia-100 to-white">
        <div className="flex justify-around sm:flex-row flex-col-reverse">
          <div className="flex items-center flex-col gap-3  justify-center mx-auto sm:mx-0 sm:py-14 py-8">
            <h2 className="sm:text-4xl tracking-wider text-xl font-[900]">
              Get Exclusive Offers On Your Email
            </h2>
            <p className="font-semibold sm:text-lg text-sm sm:font-bold">Subscribe to our NewsLetter and stay updated</p>
            <div className="flex sm:mt-6 mt-4 sm:w-full justify-between border border-black text-sm sm:text-lg rounded-full overflow-hidden">
              <input type="text" className="border-none outline-none w-[80%] px-3 py-3 " placeholder="Enter Your Email" />
              <button className="bg-black font-bold text-white px-10 rounded-full">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
