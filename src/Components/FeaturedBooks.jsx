// Components
import Book from "./Book";

//icons
import { BsArrowRight } from "react-icons/bs";

const FeaturedBooks = () => {
  return (
    <section className="px-[110px] relative mb-[160px]">
      <div className="absolute  left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#f3f2ec] flex flex-col gap-2.5 w-[400px]">
        <p className="uppercase text-center text-[13px] text-[#7a7a7a] font-[500]  ">
          Some quality items
        </p>
        <h1 className="text-4xl text-center font-prata capitalize">
          Featured Books
        </h1>
      </div>
      <div className="flex justify-center border-y py-[80px] mt-[100px] border-[##E0E0E0] gap-[30px]">
        <Book
          src={"SimpleWayOfPieceLife"}
          title={"Simple way of piece life"}
          author={"Armor Ramsey"}
          price={"40.00"}
        />
        <Book
          src={"GreatTravelAtDesert"}
          title={"Great travel at desert"}
          author={"Sanchit Howdy"}
          price={"38.00"}
        />
        <Book
          src={"TheLadyBeautyScarlett"}
          title={"The lady beauty Scarlett"}
          author={"Arthur Doyle"}
          price={"45.00"}
        />
        <Book
          src={"OnceUponATime"}
          title={"Once upon a time"}
          author={"Klien Marry"}
          price={"35.00"}
        />
      </div>
      <div className="flex items-center justify-between mt-[60px]">
        <div></div>
        <div className="flex items-center  gap-5 ">
          <span
            className={`w-3 h-3 shadow-[0px_0px_0px_5px_#f3f2ec,0px_0px_0px_6px_#7a7a7a] bg-[#74642F] rounded-full `}
          ></span>
          <span className={`w-3 h-3  bg-[#7a7a7a] rounded-full`}></span>
          <span className={`w-3 h-3  bg-[#7a7a7a] rounded-full`}></span>
        </div>
        <p className="flex font-[500] cursor-pointer justify-center items-center">
          View all products <BsArrowRight />{" "}
        </p>
      </div>
    </section>
  );
};

export default FeaturedBooks;
