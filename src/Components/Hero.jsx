//icons
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex justify-between items-center pl-[150px]  pr-[90px]">
      <div className="max-w-[500px] translate-y-[50px] relative">
        <div className="absolute top-[37%] w-10 h-10 rounded-full border border-[#ddd] flex justify-center items-center  -left-[100px]">
          <BsArrowLeft className="text-xl" />
        </div>
        <h1 className="font-prata text-[#222] text-6xl mb-[17px] capitalize">
          Life of the wild
        </h1>
        <p className="text-[#7A7A7A] mb-[75px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.
        </p>
        <button className="p-[12px_24px] flex justify-center items-center uppercase text-[#7a7a7a] border border-[#7a7a7a]">
          Read more <BsArrowRight />
        </button>
        <div className="flex items-center  gap-5 mt-[100px]">
          <span className="w-3 h-3 shadow-[0px_0px_0px_5px_#f3f2ec,0px_0px_0px_6px_#7a7a7a] bg-[#74642F] rounded-full border border-[#7a7a7a]"></span>
          <span className="w-3 h-3 bg-[#7a7a7a] rounded-full"></span>
          <span className="w-3 h-3 bg-[#7a7a7a] rounded-full"></span>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-[470px] h-[550px]"
          src={require("../img/bg pattern.png")}
          alt=""
        />
        <img
          className="absolute top-32 -left-14 w-[350px] h-[520px]"
          src={require("../img/book.png")}
          alt=""
        />
        <div className="absolute top-[50%]  w-10 h-10 rounded-full border border-[#ddd] flex justify-center items-center -right-[40px]">
          <BsArrowRight className=" text-xl " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
