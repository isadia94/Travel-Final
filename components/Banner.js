import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={9000}
      >
        <div className="relative">
          <img
            className="object-cover relative h-[400px] md:h-[600px]"
            src="./mombasa.jpg"
            loading="lazy"
            alt=""
          />
          <p className="bannerText absolute top-28 text-6xl  md:top-44 pl-5 md:text-9xl z-30 text-green-700">
            Enjoy
          </p>
          <h3 className="absolute top-44 md:top-72 text-black pl-5 font-bold max-w-[600px] text-left text-2xl md:text-5xl z-30">
            Amazing Beaches with Bonfire Adventures
          </h3>
        </div>
        <div className="relative">
          <img
            className="object-cover relative h-[400px] md:h-[600px]"
            src="./hotel.jpg"
            alt=""
          />
          <p className="bannerText absolute top-28 text-6xl  md:top-44 pl-5 md:text-9xl z-30 text-yellow-400">
            Discover
          </p>
          <h3 className="absolute top-44 md:top-72 text-white pl-5 font-bold max-w-[400px] md:max-w-[600px] text-left text-2xl md:text-5xl z-30">
            The Best Stays & Hotels in the World
          </h3>
        </div>
        <div className="relative">
          <img
            className="object-cover relative h-[400px] md:h-[600px]"
            src="./maldives.jpg"
            alt=""
          />
          <p className="bannerText absolute top-28 text-6xl  md:top-44 pl-5 md:text-9xl z-30 text-green-700">
            Explore
          </p>
          <h3 className="absolute top-44 md:top-72 text-white pl-5 font-bold max-w-[600px] text-left text-2xl md:text-5xl z-30">
            Great Scenery in Maldives
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
