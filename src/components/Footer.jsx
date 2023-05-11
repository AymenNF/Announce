import React from "react";

const Footer = (props) => {
  return props.isNotLoggedIn ? (
    <div></div>
  ) : (
    <div className=" bg-[#c7e1f3] inset-x-0 bottom-0 flex justify-center items-center py-8 font-titleFont sticky">
      © Copyright
    </div>
  );
};

export default Footer;
