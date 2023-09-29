//hooks
import { useState } from "react";

const Book = ({ src, title, author, price }) => {
  const [select, setSelect] = useState(null);

  const selectBook = () => {
    if (title === select) {
      setSelect(null);
    } else {
      setSelect(title);
    }
  };

  return (
    <div onClick={selectBook}>
      <div
        className={`w-[280px] relative  h-[350px] mb-5 bg-[#EFEEE8] border border-[#EAE8DF] p-[20px]`}
      >
        <img src={require(`../img/${src}.png`)} alt="" />
        <div
          className={`${
            select === title ? "opacity-1 top-[60%]" : "top-[90%] opacity-0"
          }  bg-black py-4 absolute  left-[50%] duration-300 translate-x-[-50%] w-[250px] text-white`}
        >
          {" "}
          <p className="text-center font-[500] uppercase">Add To Cart</p>{" "}
        </div>
      </div>
      <div>
        <p
          className={` ${
            select === title && "text-[#74642F]"
          } text-center capitalize font-prata text-xl mb-[5px]`}
        >
          {title}
        </p>
        <p className="text-center text-[14px] capitalize text-[#888] mb-[10px]">
          {author}
        </p>
        <p className="text-center text-[#74642F] text-[18px] font-prata">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Book;
