import React from "react";

const CardPorto = ({ images, type, title, description }) => {
  return (
    <div className="w-full border border-gray-300 rounded-xl flex flex-col justify-left hover:border hover:border-yellow-300 cursor-pointer h-full">
      <img src={images} alt="1" className="w-contain" />
      <div className="flex flex-col justify-left text-left p-5">
        <p className="text-gray-300">{type}</p>
        <h1 className="text-yellow-300 font-bold text-lg">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardPorto;
