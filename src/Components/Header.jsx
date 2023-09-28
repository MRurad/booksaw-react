// icons
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#F3F2EC]">
      <nav className="flex justify-between items-center  py-5 border-b border-b-[#E0E0E0]  px-[150px]">
        <ul className="flex items-center gap-5">
          <li>
            <a href="">
              {" "}
              <FaFacebookF className="text-[#9F9F9F]" />{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <AiOutlineInstagram className="text-[#9F9F9F]" />{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <BiLogoLinkedin className="text-[#9F9F9F]" />{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <BsTwitter className="text-[#9F9F9F]" />{" "}
            </a>
          </li>
          <li>
            <a href="">
              <FaBloggerB className="text-[#9F9F9F]" />
            </a>
          </li>
        </ul>
        <ul className="flex gap-10 items-center">
          <li>
            <a className="flex gap-2.5 items-center" href="">
              {" "}
              <BsPerson className="text-[#9F9F9F]" /> Account
            </a>
          </li>
          <li>
            <a className="flex gap-2.5 items-center" href="">
              <HiOutlineShoppingBag className="text-[#9F9F9F]" /> Cart
            </a>
          </li>
          <li>
            <a className="flex gap-2 items-center" href="">
              <BsSearch className="text-[#9F9F9F]" />
              Search
            </a>
          </li>
        </ul>
      </nav>
      <nav className="flex justify-between py-[25px]  px-[150px]">
        <h1 className="font-cormorant text-5xl ">
          <span className="font-extrabold">Book</span>
          <span className="font-[300]"></span>saw
        </h1>
        <ul className="text-[#74642F] uppercase flex gap-8 items-center">
          <li>
            <a href="">Home</a>{" "}
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li className="ml-8">
            <a href="">
              <FaBars />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
