import React from "react";

const twLanding = "lg:max-w-7xl mx-auto items-center justify-left lg:flex ";

const About = () => {
  return (
    <>
      <div className="hidden lg:flex z-0 justify-end mt-28">
        <img
          src="/IMG/group_80.png"
          alt="/"
          className="absolute "
        />
      </div>
      <div className="w-full">
        <div className={twLanding}>
          <div className="flex lg:mt-36 items-center">
            <div className="z-10 text-left">
              <div className="bg-white w-fit px-5 py-9">
                <h1 className="text-6xl lg:text-8xl text-black font-extrabold drop-shadow-xl tracking-wide">
                  Build or scale up
                </h1>
              </div>
              <div className="px-5">
                <p className="text-5xl lg:text-8xl text-black mt-4 font-medium-1 drop-shadow-lg tracking-normal">
                  your development team
                </p>
                <div className="flex items-center mt-14 gap-5">
                  <img src="/IMG/Vector_2.png" alt="vector2" className="" />
                  <p className="text-xl text-black drop-shadow-md">
                    in weeks, not months
                  </p>
                </div>
                <button className="bg-yellow-300 px-12 py-5 rounded-full hover:shadow-lg hover:shadow-yellow-300 text-black font-bold mt-14">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
