import React from "react";
import Card from "../Card";
import CardLogos from "../CardLogos";
import { data } from "../utils/CardContent";
import { logos } from "../utils/logos";
const Service = () => {
  return (
    <>
      <div className="lg:max-w-7xl mx-auto items-center justify-center lg:mt-64 mt-14">
        <p className="text-gray-400">Complete Package</p>
        <h1 className="text-3xl font-bold ">
          From product design to software continuous delivery
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10 px-5">
          {data.map((index) => (
            <div key={index.id}>
              <Card {...index} />
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-3 mt-10">
          {logos.map((index) => (
            <div key={index.id}>
              <CardLogos {...index} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-neutral-800 w-full items-center text-center py-10 mt-10">
        <div className="lg:max-w-7xl mx-auto items-center justify-center">
          <h1 className="text-yellow-300 font-semibold text-3xl tracking-widest">
            Our Progress Comes with a Collaboration Between <br /> Creativity,
            Ideas, and Technology
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 text-white">
            <div>
              <h1 className="text-5xl mb-3">1000+</h1>
              <p className="text-2xl font-light">Designs</p>
            </div>
            <div>
              <h1 className="text-5xl mb-3">30+</h1>
              <p className="text-2xl font-light">Products</p>
            </div>
            <div>
              <h1 className="text-5xl mb-3">58+</h1>
              <p className="text-2xl font-light">Website Developments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
