function FooterBlock({ header, links }) {
  return (
    <div className="mb-10 lg:mr-16">
      <h5 className="text-2xl mb-4">{header}</h5>
      <ul>
        {links.map((link) => (
          <li className="text-sm">
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterBlock;
