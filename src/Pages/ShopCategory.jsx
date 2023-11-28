import React from "react";
import { useShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";

function ShopCategory({ category, banner }) {
  const { all_product } = useShopContext();
  return (
    <div className="">
      <div className="container mx-auto sm:my-8 mb-8 sm:mb-8">
        <img
          src={banner}
          alt={category + " banner"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-2 ">
        <div className="flex sm:justify-around justify-between sm:text-lg text-sm items-center">
          <p className="flex items-center capitalize">
            <span className="font-semibold">Showing 1-12 </span>&nbsp; out of 36{" "}
           
            products
          </p>
          <div className="flex gap-1 border border-black py-2 px-4 rounded-full">
            <span>Sort by</span>
            <img
              src={dropdown_icon}
              alt="dropdown_icon "
              className="object-contain "
            />
          </div>
        </div>
      </div>
      <div className="container flex justify-center  mx-auto mt-8 px-2">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  ">
          {all_product.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  id={item.id}
                  key={crypto.randomUUID()}
                />
              );
            } else return null;
          })}
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button className="border border-slate-300 py-3 px-12 sm:text-lg text-sm font-medium text-stone-500 rounded-full bg-stone-300/20  ">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ShopCategory;
