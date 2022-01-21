import React from "react";

function FooterImage() {
  return (
    <div className="border-t-2 mt-16 flex flex-col items-center justify-center w-full p-5 text-center">
      <img src="/footer-sustainably.svg" alt="" />
      <p className="w-36 uppercase text-xs font-bold">
        Sustainably made in montreal,canada
      </p>
    </div>
  );
}

export default FooterImage;
