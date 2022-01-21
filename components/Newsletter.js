function Newsletter() {
  return (
    <section>
      <div className="bg-sheertex-green p-4">
        <h3 className="mb-3">Get 15% off - Join our mailing list</h3>
        <p className="mb-7">
          Be the first to get updates on special offers, product launches, and
          insider exclusives
        </p>
        <input
          type="text"
          placeholder="Your Email"
          className="mb-6 pb-2 bg-sheertex-green border-b border-black w-full placeholder:uppercase"
        />
      </div>
    </section>
  );
}

export default Newsletter;
