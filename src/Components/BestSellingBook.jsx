// Image
import BestSellingBookImage from "../assets/best_selling_book.png";
import BestSellingBookUnderline from "../assets/underline.png";

// Icon
import { BsArrowRight } from "react-icons/bs";

const BestSellingBook = () => {
  return (
    <section className="bg-[#EDEBE4] px-[120px] flex gap-10 items-center justify-center">
      <img src={BestSellingBookImage} alt="best-selling-book" />
      <div>
        <h2 className="text-[#111111] text-5xl mb-[9px]">Best Selling Book</h2>
        <img src={BestSellingBookUnderline} alt="underline" />
        <h4 className="uppercase mt-[58px] text-[#888] text-[13px] tracking-wider ">
          by timur hood
        </h4>
        <h3 className="text-[#111111] mt-[30px] mb-[12px] text-[28px] capitalize">
          Birds gonna be happy
        </h3>
        <p className="text-[#7A7A7A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> eu
          feugiat amet, libero ipsum enim pharetra hac.
        </p>
        <span className="text-[#74642F] mt-[35px] mb-[58px] flex text-[23px] tracking-wider">
          $ 45.00
        </span>
        <div className=" cursor-pointer text-[#111] tracking-wider flex gap-3 items-center  ">
          Shop It Now <BsArrowRight className="pt-1" />
        </div>
      </div>
    </section>
  );
};

export default BestSellingBook;
