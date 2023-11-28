import React from "react";
import logo from "../Assets/logo.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import instagram from "../Assets/instagram_icon.png";
import pintester from "../Assets/pintester_icon.png";

function Footer() {
  return (
    <footer className="py-10 bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center gap-5 ">
          <div className="flex flex-col gap-10  ">
            <div className="flex items-center mx-auto gap-2 sm:text-2xl font-bold text-xl">
              <img src={logo} alt="image" />
              <h2 className="uppercase">shopper</h2>
            </div>
            <ul className="flex gap-4 flex-wrap justify-center sm:gap-8 font-semibold sm:text-lg text-sm mx-auto">
              <li className="hover:animate-pulse hover:text-red-400 duration-500 cursor-pointer  capitalize">
                company
              </li>
              <li className="hover:animate-pulse hover:text-red-400 duration-500 cursor-pointer  capitalize">
                product
              </li>
              <li className="hover:animate-pulse hover:text-red-400 duration-500 cursor-pointer  capitalize">
                offices
              </li>
              <li className="hover:animate-pulse hover:text-red-400 duration-500 cursor-pointer  capitalize">
                about
              </li>
              <li className="hover:animate-pulse hover:text-red-400 duration-500 cursor-pointer  capitalize">
                Contact
              </li>
            </ul>
            <div className="mx-auto flex flex-wrap justify-center gap-10 ">
              <img
                className="border hover:rotate-180 duration-500 cursor-pointer p-2 rounded"
                src={whatsapp}
                alt="image"
              />
              <img
                className="border hover:rotate-180 duration-500 cursor-pointer p-2 rounded"
                src={pintester}
                alt="image"
              />
              <img
                className="border hover:rotate-180 duration-500 cursor-pointer p-2 rounded"
                src={instagram}
                alt="image"
              />
            </div>
          </div>
          <hr className="w-full border-none h-[1px] bg-black/30" />
          <div className="flex justify-center items-center mx-auto break-all">
            <p className="sm:text-lg text-sm font-semibold ">
              Copyright © 2021 - 2023 TermsFeed®. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
