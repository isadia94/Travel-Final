import Image from "next/image";
import React from "react";

function PopularInternational({ img, title }) {
  return (
    <div className="relative h-[200px] md:h-[300px]">
      <div className=" relative h-[100%]">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <h1 className="subHeading absolute text-white pl-4 font-extrabold text-3xl md:text-5xl  bottom-2">
        {title}
      </h1>
    </div>
  );
}

export default PopularInternational;
