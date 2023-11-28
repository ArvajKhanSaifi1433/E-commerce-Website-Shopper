import React from "react";
import Item from "../Item/Item";
import newCollect from "../Assets/new_collections";

function NewCollection() {
  return (
    <section className="mt-10">
      <div className="container mx-auto flex px-2 ">
        <h1 className="mx-auto text-xl sm:text-4xl font-extrabold relative before:absolute before:top-full  before:w-full before:h-1 before:bg-black pb-2 before:animate-pulse">
          NEW COLLECTION
        </h1>
      </div>
      <div className="container flex justify-center  mx-auto mt-10 ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto">
          {newCollect.map((item) => {
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
          })}
        </div>
      </div>
    </section>
  );
}

export default NewCollection;
