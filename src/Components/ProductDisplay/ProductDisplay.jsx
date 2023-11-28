import React from "react";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import { useShopContext } from "../../Context/ShopContext";

function ProductDisplay({ product }) {
  const { addToCart } = useShopContext();
  return (
    <div className="container mx-auto px-2">
      <div className="flex justify-center gap-5 flex-col md:flex-row">
        <div className="basis-1/2 flex gap-4 md:flex-row flex-col">
          <div className="flex md:flex-col basis-1/4 gap-4  ">
            <img
              className="h-1/6 w-1/5 md:w-full md:object-contain"
              src={product.image}
              alt=""
            />
            <img
              className="h-1/6 w-1/5 md:w-full md:object-contain"
              src={product.image}
              alt=""
            />
            <img
              className="h-1/6 w-1/5 md:w-full md:object-contain"
              src={product.image}
              alt=""
            />
            <img
              className="h-1/6 w-1/5 md:w-full md:object-contain"
              src={product.image}
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              src={product.image}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-4">
          <h2 className="text-lg sm:text-2xl font-bold">{product.name}</h2>
          <div className="flex gap-2">
            <img src={star_icon} className="w-5 h-5 object-cover" alt="" />
            <img src={star_icon} className="w-5 h-5 object-cover" alt="" />
            <img src={star_icon} className="w-5 h-5 object-cover" alt="" />
            <img src={star_icon} className="w-5 h-5 object-cover" alt="" />
            <img src={star_dull_icon} className="w-5 h-5 object-cover" alt="" />
            <p className="text-sm text-slate-600">(122)</p>
          </div>
          <div className="flex gap-3">
            <p className="sm:text-3xl text-xl font-bold text-red-500">
              ${product.new_price}
            </p>
            <p className="sm:text-xl text-sm font-bold line-through text-black/60 decoration-slate-500 self-end">
              ${product.old_price}
            </p>
          </div>
          <h3 className="font-semibold text-stone-600">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </h3>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-wider text-slate-800">
              Select Size
            </h2>
            <div className="flex gap-6 flex-wrap">
              <div className="border py-2 px-4 rounded">S</div>
              <div className="border py-2 px-4 rounded">M</div>
              <div className="border py-2 px-4 rounded">L</div>
              <div className="border py-2 px-4 rounded">XL</div>
              <div className="border py-2 px-4 rounded">XXL</div>
            </div>
          </div>
          <button
            className="self-start bg-red-500 py-2 px-6  font-bold text-white active:bg-red-900"
            onClick={(e) => addToCart(product.id)}
          >
            ADD TO CART
          </button>
          <p className="capitalize">
            <span className="font-bold ">Category : </span> {product.category} ,
            T-Shirt , Crop Top
          </p>
          <p className="capitalize">
            <span className="font-bold">Tags : </span> Modern , Latest
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
