import React from "react";

const Partners = () => {
  return (
    <section className="bg-[#EDEBE4] flex py-[45px] justify-center items-baseline gap-20">
      <div>
        <img src={require("../img/partner1.png")} alt="" />
      </div>
      <div className="text-center text-[#94928B]">
        <img src={require("../img/partner2.png")} alt="" />
        <p className="font-garamond font-bold uppercase">bookstore</p>
      </div>
      <div className="text-center text-[#94928B]">
        <img src={require("../img/partner3.png")} alt="" />
        <p className="font-lora">Bookdoor</p>
      </div>
      <div className="text-center text-[#94928B]">
        <img src={require("../img/partner4.png")} alt="" />
        <p className="font-montserrat font-bold uppercase">library</p>
      </div>
      <div className="text-center text-[#94928B]">
        <img src={require("../img/partner5.png")} alt="" />
        <p className="font-merriweather font-bold uppercase">Flaprise</p>
      </div>
    </section>
  );
};

export default Partners;
