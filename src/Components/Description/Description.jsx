import React from "react";

function Description() {
  return (
    <div className="container mx-auto mt-10 px-2">
      <div className="flex flex-col">
        <div className="flex">
          <button className="py-3 border-b-0 border  text-sm px-5">
            Description
          </button>
          <button className="py-3 border-b-0 border border-l-0  text-sm px-5 text-stone-500">
            Reviews (122)
          </button>
        </div>
        <div className="border break-all">
          In today’s market, you can find monitors that are Full HD, 4K, HD
          Ready, and different display types such as Plasma, LED, LCD, and many
          other varieties. Thus, you have a multitude of options to choose from.
          And, it is imperative to choose a good quality monitor as it will not
          only provide you with great clarity (so that you get an immersive
          experience every time), but will also protect your eyes from damage
          even after extended use. Popular brands such as Samsung, LG, HP, Dell,
          Acer, Lenovo.
        </div>
      </div>
    </div>
  );
}

export default Description;
