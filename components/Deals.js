import React from "react";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Image from "next/image";
function Deals() {
  return (
    <div>
      <Carousel
        className="relative"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative h-64">
          <Image
            src="/enashipai.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />

          <h3 className="absolute top-20 md:top-30 text-white  left-10 font-bold max-w-[600px] text-left text-2xl md:text-5xl z-30">
            Enashipai
          </h3>
          <p className="absolute top-32 md:top-36 text-white left-10">
            Tours, Events & Excursions
          </p>
          <Link href="/">
            <a className="absolute bottom-3 left-10 bg-white py-2 px-4 rounded-md">
              View Deals
            </a>
          </Link>
        </div>
        <div className="relative h-64">
          <Image src="/baobab.jpg" layout="fill" objectFit="cover" />

          <h3 className="absolute top-20 md:top-30 text-white  left-10 font-bold max-w-[600px] text-left text-2xl md:text-5xl z-30">
            Baobab Beach Resort
          </h3>
          <p className="absolute top-32 md:top-36 text-white left-10">
            Unbelievable Hotels
          </p>
          <Link href="/">
            <a className="absolute bottom-3 left-10 bg-white py-2 px-4 rounded-md">
              View Deals
            </a>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default Deals;
