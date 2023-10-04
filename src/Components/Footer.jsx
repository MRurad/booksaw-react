//! Images 
import Booksaw from "../Images/Booksaw.png"

//! Icons 
import {BiLogoFacebook} from "react-icons/bi"
import {FaInstagram} from "react-icons/fa" 
import {BiLogoLinkedin} from "react-icons/bi"
import {FaTwitter} from "react-icons/fa"
import  {BiLogoBlogger} from "react-icons/bi"

const Footer = () => {
  return (
    <>
    <div className="mt-[127px] flex justify-center">
        <div className="">
<img src={Booksaw} alt="" />    
        </div>
        <div className="flex ml-[150px]">
            <ul className="mr-[55px]">
                <li className="text-[28px] font-prata mb-[23px]">About us</li>
                <li className="mb-2 font-jekarta text-[#111] text-base font-medium ">VISION</li>
                <li className="mb-2 font-jekarta text-[#777]">ARTICLES</li>
                <li className="mb-2 font-jekarta text-[#777]">CAREERS</li>
                <li className="mb-2 font-jekarta text-[#777]">SERVICE TERMS</li>
                <li className="mb-2 font-jekarta text-[#777]">DONATE</li>
            </ul>
            <ul className="mr-[55px]">
                <li className="text-[28px] font-prata mb-[23px]">Discover</li>
                <li className="mb-2 font-jekarta text-[#777]">HOME</li>
                <li className="mb-2 font-jekarta text-[#777]">BOOKS</li>
                <li className="mb-2 font-jekarta text-[#777]">AUTHORS</li>
                <li className="mb-2 font-jekarta text-[#777]">SUBJECTS</li>
                <li className="mb-2 font-jekarta text-[#777]">ADVANCED SEARCH</li>
            </ul>
            <ul className="mr-[55px]">
                <li className="text-[28px] font-prata mb-[23px]">My account</li>
                <li className="mb-2 font-jekarta text-[#777]">SIGN IN</li>
                <li className="mb-2 font-jekarta text-[#777]">VIEW CART</li>
                <li className="mb-2 font-jekarta text-[#777]">MY WISHTLIST</li>
                <li className="mb-2 font-jekarta text-[#777]">TRACK MY ORDER</li>
            </ul>
            <ul className="mr-[55px] ">
                <li className="text-[28px] font-prata mb-[23px]">Help</li>
                <li className="mb-2 font-jekarta text-[#777]">HELP CENTER</li>
                <li className="mb-2 font-jekarta text-[#777]">REPORT A PROBLEM</li>
                <li className="mb-2 font-jekarta text-[#777]">SUGGESTING EDITS</li>
                <li className="mb-2 font-jekarta text-[#777]">CONTACT US</li>
            </ul>
        </div>
</div>
<div className="mt-[60px] ">
<hr />
<div className="p-5 flex item-center justify-center ">
         <p className="text-[#7A7A7A] font-jekarta mr-[740px]">© 2021 Templates Jungle. All rights reserved.</p>
         <div className="flex mr-[100px]">
         <BiLogoFacebook className="mr-3 fill-[#777]" />
         <FaInstagram className="mr-3 fill-[#777]"  />
         <BiLogoLinkedin  className="mr-3 fill-[#777]" />
         <FaTwitter className="mr-3 fill-[#777]" />
         <BiLogoBlogger className="mr-3 fill-[#777]" />
         </div>
</div>
        </div>
    </>
  )
}

export default Footer