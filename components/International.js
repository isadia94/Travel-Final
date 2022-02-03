import React from "react";

import { international } from "../Data/International";
import PopularInternational from "./PopularInternational";

const International = () => {
  return (
    <div className="relative mt-56">
      <h4 className="subHeading text-center text-4xl text-green-900 md:text-7xl">
        International Destinations
      </h4>
      <h2 className="text-center mt-2 font-bold text-md md:text-xl md:font-medium text-gray-600 ">
        Explore Amazing Destinations in the World
      </h2>

      <div className="mt-12 p-2 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  h-[200px] ">
        {international.map((item, index) => (
          <div key={index} className="">
            <PopularInternational img={item.img} title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default International;
