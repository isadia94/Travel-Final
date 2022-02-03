import React from "react";
import International from "../components/International";
export default function Dest() {
  return (
    <div className="bg-blue-400 p-16 h-screen ">
      <div className="grid grid-cols-3 grid-flow-row-dense lg:grid-rows-12 h-[200px]  gap-1 max-w-6xl mx-auto  ">
        <div className="bg-white p-3  py-8 ">1</div>
        <div className="bg-white p-3 row-span-4">2</div>
        <div className="bg-white p-3 row-span-4">3</div>
        <div className="bg-white p-3 row-span-4">4</div>
        <div className="bg-white p-3 row-span-4">5</div>
        <div className="bg-white p-3  row-span-4">6</div>
        <div className="bg-white p-3 row-span-4 ">7</div>
      </div>
    </div>
  );
}
