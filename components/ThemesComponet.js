import Image from "next/image";
import React from "react";

function ThemesComponet({ img, title }) {
  return (
    <div className="relative">
      <div className="relative h-40 md:h-64 lg:h-80 lg:w-76">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <h1 className="text-white font-extrabold absolute bottom-4 pl-2 md:text-2xl lg:text-3xl">
        {title}
      </h1>
    </div>
  );
}

export default ThemesComponet;
