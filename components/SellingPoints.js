import React from "react";
import SellingPoint from "./SellingPoint";

function SellingPoits() {
  return (
    <div className="flex flex-col items-center pt-10 bg-neutral-100">
      <SellingPoint
        header="Free Shipping"
        text="Same day shipping is included on all orders"
        image="/free-shipping.svg"
      />
      <SellingPoint
        header="30-day Guarantee"
        text="Covers any damage that renders your tights unwearable"
        image="/30-day.svg"
      />
      <SellingPoint
        header="Strength Tested"
        text="Rated 5 stars by thousands of happy customers"
        image="/strength.svg"
      />
    </div>
  );
}

export default SellingPoits;
