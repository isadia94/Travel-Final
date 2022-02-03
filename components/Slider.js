import React from "react";
import { Navigation, Mousewheel, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { popular } from "../Data/Popular";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Slider() {
  return (
    <div className="h-[300px] relative">
      <Swiper
        cssMode={true}
        slidesPerView={1}
        spaceBetween={10}
        navigation={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 5000,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {popular.map(({ title, img, price }) => (
          <div className="relative cursor-pointer" key={title}>
            <SwiperSlide img={img} price={price} className="cursor-pointer">
              <img src={img} alt="" loading="lazy" />
              <h1 className="absolute font-extrabold text-xl pl-4 bottom-10">
                {title}
              </h1>
              <p className="font-light absolute bottom-4 pl-4 text-white ">
                From KES{" "}
                <span className="text-red-500 font-semibold">{price}</span>
              </p>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
