import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const Testimonials = () => {
  return (
    <>
      <div className="hidden lg:flex z-0">
        <img
          src="/IMG/bg_testi.png"
          alt="bg-testi"
          className="w-full absolute"
        />
      </div>
      <div className="lg:max-w-7xl mx-auto items-center justify-center lg:mt-10 mt-4 z-10">
        <p className="text-gray-400">Testimonials</p>
        <h1 className="text-3xl font-bold ">
          The software that we build <br /> takes our clients to the next level
        </h1>
        <div className="flex grid-cols-1 lg:grid-cols-2 gap-3 mt-10 place-content-between px-5">
          <div className="flex flex-col lg:flex-col-2 gap-24">
            <div className="text-left z-10">
              <h1 className="text-3xl font-bold ">Amazing people</h1>
              <p className="text-2xl">
                "They are pepole who are not only following <br /> the tasks,
                but can work as a team. Together"
              </p>
              <div className="flex items-center gap-5 mt-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="">Matthijs Piest</p>
                  <h1 className="text-gray-400 ">COO at WieBetaaltWat</h1>
                </div>
              </div>
            </div>
            <div className="text-left z-10">
              <h1 className="text-2xl font-bold ">Amazing people</h1>
              <p className="text-xl">
                "They are pepole who are not only following <br /> the tasks,
                but can work as a team. Together"
              </p>
              <div className="mt-3">
                <p className="">Matthijs Piest</p>
                <h1 className="text-gray-400 ">COO at WieBetaaltWat</h1>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col lg:flex-col-2 gap-24">
            <div className="text-left z-10">
              <h1 className="text-2xl font-bold ">Amazing people</h1>
              <p className="text-xl">
                "They are pepole who are not only following <br /> the tasks,
                but can work as a team. Together"
              </p>
              <div className="mt-3">
                <p className="">Matthijs Piest</p>
                <h1 className="text-gray-400 ">COO at WieBetaaltWat</h1>
              </div>
            </div>
            <div className="text-left z-10">
              <h1 className="text-3xl font-bold ">Amazing people</h1>
              <p className="text-2xl">
                "They are pepole who are not only following <br /> the tasks,
                but can work as a team. Together"
              </p>
              <div className="flex items-center gap-5 mt-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="">Matthijs Piest</p>
                  <h1 className="text-gray-400 ">COO at WieBetaaltWat</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4 ,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <img src="/IMG/2.png" alt="logo1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/IMG/4.png" alt="logo2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/IMG/1.png" alt="logo3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/IMG/5.png" alt="logo4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/IMG/3.png" alt="logo5" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
