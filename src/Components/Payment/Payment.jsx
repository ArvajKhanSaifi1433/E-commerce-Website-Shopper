import React from "react";
import { useShopContext } from "../../Context/ShopContext";

function Payment() {
  const { getTotalAmount } = useShopContext();
  return (
    <div className="container mx-auto px-2 my-28">
      <div className="flex gap-10 sm:flex-row flex-col">
        <div className=" basis-1/2 flex flex-col sm:mx-10 gap-3">
          <h2 className="text-2xl font-bold tracking-wider mb-10">
            Cart Totals
          </h2>

          <div className="flex justify-between font-semibold">
            <p>subTotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr className="w-full border-none h-[1px] bg-slate-600/40" />

          <div className="flex justify-between font-semibold">
            <p>Shopping</p>
            <p>Fee</p>
          </div>
          <hr className="w-full border-none h-[1px] bg-slate-600/40" />

          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr className="w-full border-none h-[1px] bg-slate-600/40" />
          <button className="self-start bg-red-500 py-2 px-6  font-bold text-white active:bg-red-900 mt-4">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="basis-1/2 sm:flex hidden  flex-col ">
          <p>If you have a promo code, Enter it here</p>
          <div className="flex sm:mt-6 mt-4 sm:w-[70%]  justify-between border border-black text-sm sm:text-lg">
            <input
              type="text"
              className="border-none outline-none  sm:px-3 sm:py-3 p-2 "
              placeholder="Enter Your Email"
            />
            <button className="bg-black font-bold text-white px-10 ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
