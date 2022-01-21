import React from "react";
import SellingPoint from "./SellingPoint";

function SellingPoits() {
  return (
    <section className="flex flex-col items-center pt-32 bg-neutral-100 sm:flex-row sm:items-center sm:justify-around">
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
        style={{ marginBottom: "20px" }}
      />
    </section>
  );
}

export default SellingPoits;
