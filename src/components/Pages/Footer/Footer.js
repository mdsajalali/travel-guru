import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <p className="text-center mt-5">©{date} All Rights reserved.</p>
    </div>
  );
};

export default Footer;
