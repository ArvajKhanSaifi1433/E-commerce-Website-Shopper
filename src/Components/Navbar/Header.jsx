import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { useShopContext } from "../../Context/ShopContext";

const Header = () => {
  let [open, setOpen] = useState(false);
  const { getTotalItems } = useShopContext();
  return (
    <header className="shadow-lg w-full sticky top-0 z-50 ">
      <div className="lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img
            src={logo}
            alt="top Logo"
            className="lg:w-14 lg:h-14 object-cover w-10 h-10"
          />
          <span className="font-bold text-lg lg:font-semibold  lg:text-2xl">
            Shopper
          </span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in gap-3 ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <li className="lg:ml-8 lg:my-0 my-7 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-red-500 pb-1.5 text-red-500"
                  : "text-gray-600"
              }
              onClick={(e) => setOpen(false)}
            >
              Shop
            </NavLink>
          </li>
          <li className="lg:ml-8 lg:my-0 my-7 font-semibold">
            <NavLink
              to="/mens"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-red-500 pb-1.5 text-red-500"
                  : "text-gray-600"
              }
              onClick={(e) => setOpen(false)}
            >
              Mens
            </NavLink>
          </li>
          <li className="lg:ml-8 lg:my-0 my-7 font-semibold">
            <NavLink
              to="/womens"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-red-500 pb-1.5 text-red-500"
                  : "text-gray-600"
              }
              onClick={(e) => setOpen(false)}
            >
              Womens
            </NavLink>
          </li>
          <li className=" font-semibold lg:ml-8 lg:mr-32   lg:my-0 my-7 ">
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-red-500 pb-1.5 text-red-500 "
                  : "text-gray-600"
              }
              onClick={(e) => setOpen(false)}
            >
              Kids
            </NavLink>
          </li>

          <div className="flex gap-9  lg:items-center flex-col lg:flex-row lg:mr-14">
            <Link
              onClick={(e) => setOpen(false)}
              to="/login"
              className="border border-black font-medium py-2 px-9 lg:mr-4  rounded-full self-start active:text-red-400 active:border-red-500"
            >
              Login
            </Link>
            <Link
              to="/cart"
              data-ak={getTotalItems()}
              onClick={(e) => setOpen(false)}
              className="notification relative self-start before:content-[attr(data-ak)] before:absolute before:-right-2 before:-top-1 before:z-10 before:bg-red-500 before:px-2 before:rounded-full before:text-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-10 h-10`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
