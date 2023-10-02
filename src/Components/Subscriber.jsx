//! Images
import Rectangle from "../Images/rectangle.png"
import Vector from "../Images/Vector17.png"
import Aquarius from "../Images/Aquarius.png"

//! Icons
import { BiLogoTelegram } from "react-icons/bi";

const Subscriber = () => {
  return (
    <>
    <div className="flex max-w-full max-h-full bg-[#EDEBE4] justify-center ">
<img className="w-[250px] h-[250px]" src={Rectangle} /> 
<div className="flex flex-col">
<p className="w-[353px] my-[145px] h-[130px] mb-[10px] capitalize leading-normal font-normal mr-[20px] text-[#111] text-5xl">subscribe to our newsletter</p>
<img className="w-[46px] h-[5px]" src={Vector}/>
</div>
<div className="flex flex-col"> 
  <p className=" w-[559px] mb-[45px] h-[66px] my-[138px] font-normal leading-[33.28px] tracking-[0.32px] text-base text-[#7A7A7A]">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
  <p className="text-[#7A7A7A] border-b-2 border-[#6F6F6F] flex">
     Enter Your Email Address Here
      <span className="ml-[140px] w-[45px] h-[20px] text-base uppercase text-[#111] tracking-[0.32px] font-medium">send</span>
   <span> <BiLogoTelegram/> </span></p>
</div>
<img className="w-[150px] mt-[239px] h-[150px]" src={Aquarius}/>
</div>
</>
)
}

export default Subscriber