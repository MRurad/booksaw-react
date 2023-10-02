//! Images
import Rectangle38 from "../Images/Rectangle38.png"
import Rectangle44 from "../Images/Rectangle44.png"
import Rectangle45 from "../Images/Rectangle45.png"

//! Icons 
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const BookSaw = () => {
  return (
    <>
    <div className='max-w-full max-h-full '>
      <div className='flex justify-center max-w-full max-h-full  '>
            <p className='uppercase mt-[180px] text-[#7A7A7A] items-center text-[13px] mb-[20px] tracking-[1.56px] font-medium'>read our articles</p>
        </div>
        <div className='flex justify-center'>
           <p className='uppercase mt-[20px] text-[#111] text-5xl items-center tracking-[1.56px] font-medium'>Latest Articles</p>
      </div>
      <div className='flex m-[10px]  item-center mt-[20px] justify-center' >
        <div className="h-[328px] w-[438px] mr-5">
      <img className=" max-w-full max-h-full " src={Rectangle38} />
      <p className="text-[#74642F] mt-[30px] tracking-[0.9px] font-normal capitalize text-[15px]">2 aug, 2021</p>
      <p className="text-[#111] mb-3 h-[87px] leading-[43.16px] text-[26px]">Reading books always makes the moments happy</p>
                <div className="flex items-center justify-between border-t-2 "> 
                <p className="text-[#777] mt-4 text-base font-normal tracking-[1.8px] uppercase">
                    inspiration
                    </p>
                    <ul className="flex mt-4 ">
                        <li className="mr-5">
                             <FaFacebookF/>
                        </li>
                        <li className="mr-5">
                             <AiOutlineInstagram className="fill-[gray]"/>
                        </li> 
                        <li className="mr-5">
                             <BsTwitter className="fill-[gray]"/>
                        </li>
                    </ul>
                </div>
        </div>
        <div className="h-[328px] mr-5  w-[438px]" >
      <img className="max-w-full max-h-full " src={Rectangle44} />
      <p className="text-[#74642F] mt-[30px] tracking-[0.9px] font-normal capitalize text-[15px]">2 aug, 2021</p>
      <p className="text-[#111] mb-3  h-[87px] leading-[43.16px] text-[26px]">Reading books always makes the moments happy</p>
      <div className="flex items-center justify-between border-t-2 "> 
                <p className="text-[#777] mt-4 text-base font-normal tracking-[1.8px] uppercase">
                    inspiration
                    </p>
                    <ul className="flex mt-4 ">
                        <li className="mr-5">
                             <FaFacebookF/>
                        </li>
                        <li className="mr-5">
                             <AiOutlineInstagram className="fill-[gray]"/>
                        </li> 
                        <li className="mr-5">
                             <BsTwitter className="fill-[gray]"/>
                        </li>
                    </ul>
                </div>
        </div>
        <div className="h-[328px] mr-5 w-[438px]">
      <img className="max-w-full max-h-full" src={Rectangle45} />
      <p className="text-[#74642F] mt-[30px] tracking-[0.9px] font-normal capitalize text-[15px]">2 aug, 2021</p>      
      <p className="text-[#111] h-[87px] leading-[43.16px] mb-3 text-[26px]">Reading books always makes the moments happy</p>
      <div className="flex items-center justify-between border-t-2 "> 
                <p className="text-[#777] mt-4 text-base font-normal tracking-[1.8px] uppercase">
                    inspiration
                    </p>
                    <ul className="flex mt-4 ">
                        <li className="mr-5">
                             <FaFacebookF/>
                        </li>
                        <li className="mr-5">
                             <AiOutlineInstagram className="fill-[gray]"/>
                        </li> 
                        <li className="mr-5">
                             <BsTwitter className="fill-[gray]"/>
                        </li>
                    </ul>
                </div>
        </div>
      </div>
    </div>
      <div className="w-[266px] h-[61px] flex justify-center items-center p-3 border border-[#C0C0C0] mt-[230px] ml-[680px]">
          <p className="uppercase text-center text-[#111] mr-3">read all articles</p>
          <a href="#"><AiOutlineArrowRight/></a>
      </div>
        </>
  )
}

export default BookSaw