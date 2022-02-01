import Image from "next/image";
import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function HotelSmall({ img, title }) {
  return (
    <div className=" relative shadow-lg cursor-pointer hover:scale-105 transition-transform:ease-in-out mb-2 pb-2">
      <div className="relative h-[270px] ">
        <Image src="/ole-sereni.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="px-2 flex flex-col space-y-1">
        <h3 className="hotelTitle text-2xl mt-2 font-extrabold">Ole Sereni</h3>
        <div className="flex space-x-1 items-center text-gray-600">
          <LocationMarkerIcon className="h-3" />
          <p className="text-xs text-gray-600">Nairobi</p>
        </div>

        <p className="font-bold text-sm text-gray-500 ">
          KES 15000 / <span className="text-xs font-light">Per Night</span>
        </p>
      </div>
    </div>
  );
}

export default HotelSmall;
