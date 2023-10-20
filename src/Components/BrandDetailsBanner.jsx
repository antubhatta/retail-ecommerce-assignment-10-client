// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const BrandDetailsBanner = ({ advertisements }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {advertisements?.map((adv, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[600px]">
            <img
              src={adv.image}
              className="h-full min-h-[600px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="text-white text-center z-30 absolute top-[15%] md:top-[30%] left-1/2 transform -translate-x-1/2 translate-y-1/2 space-y-2">
              <h3 className="text-2xl md:text-5xl font-extrabold">
                {adv.title}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
