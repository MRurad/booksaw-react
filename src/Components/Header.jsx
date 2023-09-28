// icons
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-[#F3F2EC]">
      <nav className="flex justify-between items-center  py-5 border-b border-b-[#E0E0E0] px-[250px]">
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
      <p className="font-prata">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        optio rem beatae. Quisquam, et laborum reprehenderit molestias iure
        dolore voluptatem placeat ea eaque impedit optio rem deserunt, ex
        consequatur nam.
      </p>
    </div>
  );
};

export default Header;
