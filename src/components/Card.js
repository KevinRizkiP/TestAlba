import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ images, title, description }) => {
  return (
    <div className="w-full border border-gray-300 rounded-xl p-12 flex flex-col justify-left items-center hover:border hover:border-yellow-300 cursor-pointer h-full">
      <div className="flex flex-col justify-left text-left">
        <img src={images} alt="1" className="w-14 h-14" />
        <div className="mt-5">
          <div className="flex items-center gap-3">
            <p className="text-yellow-300 font-bold text-lg">{title}</p>
            <FaArrowRight className="text-yellow-300" />
          </div>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
