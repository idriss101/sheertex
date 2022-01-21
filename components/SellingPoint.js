import React from "react";

function SellingPoint({ header, text, image }) {
  return (
    <div className="flex flex-col items-center mb-10 text-center">
      <img src={image} alt="" className="mb-3" />
      <h4 className="mb-2 font-bold uppercase text-sm">{header}</h4>
      <p className="w-60 text-sm">{text}</p>
    </div>
  );
}

export default SellingPoint;
