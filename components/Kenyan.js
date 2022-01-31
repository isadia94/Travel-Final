import Image from "next/image";
import React from "react";

function Kenyan({ img, title, category }) {
  return (
    <div className="relative cursor-pointer shadow-2xl rounded-lg">
      <div className="h-72 w-full relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={img}
          className="rounded-lg"
        />
      </div>

      <h2 className=" absolute bottom-10 pl-5 text-3xl font-bold text-white">
        {title}
      </h2>
      <p className="absolute top-4 bg-yellow-500 py-2 px-4 rounded-md right-3 ">
        0 tours
      </p>
      <p className="absolute bottom-20 pl-5 category text-2xl text-yellow-200">
        {category}
      </p>
    </div>
  );
}

export default Kenyan;
