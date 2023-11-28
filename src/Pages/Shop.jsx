import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Exclusive from "../Components/Exclusive/Exclusive";
import NewCollection from "../Components/NewCollection/NewCollection";
import Offers from "../Components/Offers/Offers";

function Shop() {
  return (
    <main>
      <Hero />
      <Popular />
      <Exclusive />
      <NewCollection />
      <Offers />
    </main>
  );
}

export default Shop;
