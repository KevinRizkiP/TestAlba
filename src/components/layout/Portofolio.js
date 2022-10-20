import React from "react";
import CardPorto from "../CardPorto";
import { porto } from "../utils/Porto";
const Portofolio = () => {
  return (
    <>
      <div className="lg:max-w-7xl mx-auto items-center justify-center lg:mt-10 mt-4">
        <p className="text-gray-400">Portofolio</p>
        <h1 className="text-3xl font-bold ">
          The software that we build <br /> takes our clients to the next level
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 px-5">
          {porto.map((index) => (
            <div key={index.id}>
              <CardPorto {...index} />
            </div>
          ))}
        </div>
        <button className="bg-yellow-300 px-12 py-5 rounded-full hover:shadow-lg hover:shadow-yellow-300 text-black font-bold mt-14">
          Learn more
        </button>
      </div>
    </>
  );
};

export default Portofolio;
