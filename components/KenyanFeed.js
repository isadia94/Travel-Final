import React from "react";
import Kenyan from "./Kenyan";
import { KenyanDestinations } from "../Data/KenyanData";

function KenyanFeed() {
  return (
    <div className="mt-10 md:mt-20 text-center bg-white mb-4 relative">
      <h4 className="subHeading text-4xl text-green-900 md:text-7xl">
        Kenyan Destinations
      </h4>
      <h2 className="mt-2 font-extrabold text-2xl md:text-4xl md:font-medium text-gray-600 ">
        Popular Kenyan Destinations
      </h2>
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 mt-5">
        {KenyanDestinations.slice(0, 1).map((kenyan) => (
          <Kenyan
            key={kenyan.title}
            img={kenyan.img}
            category={kenyan.category}
            title={kenyan.title}
          />
        ))}
        <div className="lg:col-span-2">
          {KenyanDestinations.slice(1, 2).map((kenyan) => (
            <Kenyan
              key={kenyan.title}
              img={kenyan.img}
              category={kenyan.category}
              title={kenyan.title}
            />
          ))}
        </div>
        {KenyanDestinations.slice(2, 3).map((kenyan) => (
          <Kenyan
            key={kenyan.title}
            img={kenyan.img}
            category={kenyan.category}
            title={kenyan.title}
          />
        ))}
        <div className="">
          {KenyanDestinations.slice(3, 4).map((kenyan) => (
            <Kenyan
              key={kenyan.title}
              img={kenyan.img}
              category={kenyan.category}
              title={kenyan.title}
            />
          ))}
        </div>
        <div className="">
          {KenyanDestinations.slice(4, 5).map((kenyan) => (
            <Kenyan
              key={kenyan.title}
              img={kenyan.img}
              category={kenyan.category}
              title={kenyan.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KenyanFeed;
