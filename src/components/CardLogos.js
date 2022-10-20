import React from "react";

const CardLogos = ({ images }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={images} alt="logos" />
    </div>
  );
};

export default CardLogos;
