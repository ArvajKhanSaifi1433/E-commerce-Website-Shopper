import React, { useState } from "react";
import Header from "./Components/Navbar/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { ProviderShopContext } from "./Context/ShopContext";
import all_product from "./Components/Assets/all_product";
import { useLocalStorage } from "./Hook/useLocalStorage";

export default function App() {
  const [cartItem, setCartItem] = useLocalStorage(
    "cartItem",
    collectItemData()
  );

  function collectItemData() {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  }
  const addToCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeToCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const deleteToItem = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: 0 }));
  };

  const getTotalAmount = () => {
    let total = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        let { new_price } = all_product.find((p) => p.id === Number(item));
        total += new_price * cartItem[item];
      }
    }
    return total;
  };

  const getTotalItems = () => {
    let total = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        total += cartItem[item];
      }
    }
    return total;
  };

  return (
    <ProviderShopContext
      value={{
        all_product,
        addToCart,
        cartItem,
        removeToCart,
        deleteToItem,
        getTotalAmount,
        getTotalItems,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </ProviderShopContext>
  );
}
