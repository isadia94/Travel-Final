import React from "react";
import HotelSmall from "./HotelSmall";
import { Tours } from "../Data/ProductData";

let hotels = Tours.map((item) => item.hotels);

function HotelFeed() {
  return (
    <div className="mt-20 relative ">
      <h1 className="subHeading text-center text-4xl text-green-900 md:text-7xl">
        Amazing Stays
      </h1>
      <h2 className="mt-2 text-center font-extrabold text-2xl md:text-4xl md:font-medium text-gray-600 ">
        Get Amazing Deals with Bonfire
      </h2>

      {/* Different Screen sizes differnt grids */}
      <div className="mt-10 gap-2 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
        <HotelSmall />
        <HotelSmall />
        <div className="lg:col-span-2">
          <HotelSmall />
        </div>
        <div className="lg:col-span-2">
          <HotelSmall />
        </div>
        <div className="lg:col-span-2">
          <HotelSmall />
        </div>
      </div>
    </div>
  );
}

export default HotelFeed;
