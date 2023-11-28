import React from "react";
import { useShopContext } from "../../Context/ShopContext";
import cart_cross_icon from "../Assets/cart_cross_icon.png";
function DisplayCardItem() {
  const { all_product, deleteToItem, cartItem, removeToCart, addToCart } =
    useShopContext();
  return (
    <div className=" mx-auto container px-2 my-10 flex flex-col  gap-2 min-w-3xl overflow-x-auto sm:overflow-hidden ">
      <div className="flex flex-nowrap font-bold sm:text-lg text-sm justify-between text-center ">
        <div className="shrink-0 basis-[15%]">Products</div>
        <div className="shrink-0  basis-[30%]">Title</div>
        <div className="shrink-0 basis-[10%]">Price</div>
        <div className="shrink-0 basis-[25%]">Quantity</div>
        <div className="shrink-0 basis-[10%]">Total</div>
        <div className="shrink-0 basis-[10%]">Remove</div>
      </div>
      <hr className="w-full border-none h-[1px] bg-slate-600/40" />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={crypto.randomUUID()}>
              <div className="flex flex-nowrap sm:text-lg  text-sm gap-3 items-center justify-between ">
                <img
                  src={e.image}
                  alt=""
                  className="h-10 object-contain basis-[15%] self-start shrink-0"
                />
                <div className="col-span-2 text-[12px] sm:text-sm basis-[30%] shrink-0">
                  {e.name}
                </div>
                <div className="font-semibold text-slate-700 basis-[10%] shrink-0">
                  ${e.new_price}
                </div>
                <div className="font-semibold text-slate-700 flex gap-1 basis-[25%] shrink-0">
                  <p
                    onClick={() => removeToCart(e.id)}
                    className="border px-2 rounded active:scale-105 cursor-pointer duration-200 self-start"
                  >
                    -
                  </p>{" "}
                  <p> {cartItem[e.id]}</p>
                  <p
                    onClick={() => addToCart(e.id)}
                    className="border px-2 rounded active:scale-105 cursor-pointer duration-200 self-start"
                  >
                    +
                  </p>
                </div>
                <div className="font-semibold text-slate-700 basis-[10%] shrink-0">
                  ${cartItem[e.id] * e.new_price}
                </div>
                <div className="basis-[10%] shrink-0">
                  <img
                    onClick={() => deleteToItem(e.id)}
                    src={cart_cross_icon}
                    alt=""
                    className="w-4 h-4 object-cover active:scale-105 cursor-pointer "
                  />
                </div>
              </div>
              <hr className="w-full border-none h-[1px] bg-slate-600/40" />
            </div>
          );
        } else return null;
      })}
    </div>
  );
}

export default DisplayCardItem;
