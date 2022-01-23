import SellingPoint from "./SellingPoint";

function SellingPoints() {
  return (
    <section className="bg-neutral-100 pt-32 lg:pt-40 lg:pb-20 ">
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-around lg:w-4/6 lg:my-0 lg:mx-auto">
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
      </div>
    </section>
  );
}

export default SellingPoints;
