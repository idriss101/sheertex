import React from "react";

function FooterBlock({ header, links }) {
  return (
    <div className="mb-10">
      <h5 className="text-2xl mb-4">{header}</h5>
      <ul>
        {links.map((link) => (
          <li className="text-sm">{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterBlock;
