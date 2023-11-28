import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

function BreadCrum({ product }) {
  return (
    <div className=" container mx-auto flex gap-1 items-center text-sm sm:text-lg font-semibold text-stone-500 my-8 px-2 ">
      HOME <img src={arrow_icon} alt="breadcrum_arrow" />
      SHOP <img src={arrow_icon} alt="breadcrum_arrow" />
      {product.category.toUpperCase()}
    </div>
  );
}

export default BreadCrum;
