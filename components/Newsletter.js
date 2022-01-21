function Newsletter() {
  return (
    <section className="relative">
      <div className="bg-sheertex-green p-5">
        <h3 className="mb-3 text-xl">Get 15% off - Join our mailing list</h3>
        <p className="mb-7 text-sm w-80">
          Be the first to get updates on special offers, product launches, and
          insider exclusives
        </p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Your Email"
            className="mb-6 pb-2 bg-sheertex-green border-b border-black w-full placeholder:uppercase placeholder:text-gray-500"
          />
          <img
            src="/arrow.svg"
            alt=""
            style={{ marginBottom: "30px", marginLeft: "-30px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
