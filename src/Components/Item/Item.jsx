import React from "react";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import { Link } from "react-router-dom";

function Item({ name, image, id, old_price, new_price }) {
  return (
    <Link
      to={`/product/${id}`}
      onClick={(e) => window.scrollTo(0, 0)}
      className=" border shadow"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover hover:scale-110 duration-500"
        />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-wrap">
        <h2 className="font-semibold sm:text-lg text-sm">{name}</h2>
        <div className="flex gap-1">
          <img src={star_icon} className="w-5 h-5 object-cover" alt="" />
          <img src={star_icon} className="w-5 h-5 object-cover" alt="" />
          <img src={star_icon} className="w-5 h-5 object-cover" alt="" />
          <img src={star_icon} className="w-5 h-5 object-cover" alt="" />
          <img src={star_dull_icon} className="w-5 h-5 object-cover" alt="" />
        </div>
        <div className="flex gap-3">
          <p className="sm:text-3xl text-xl font-bold text-red-500">${new_price}</p>
          <p className="sm:text-xl text-sm font-bold line-through text-black/60 decoration-slate-500 self-end">
            ${old_price}
          </p>
        </div>
        <p className="text-[12px] sm:text-sm font-semibold">
          FREE Delivery by Shopper
        </p>
      </div>
    </Link>
  );
}

export default Item;
