// Image
import Book1 from "../assets/1.png";
import Book2 from "../assets/2.png";
import Book3 from "../assets/3.png";
import Book4 from "../assets/4.png";
import Book5 from "../assets/5.png";
import Book6 from "../assets/6.png";
import Book7 from "../assets/7.png";
import Book8 from "../assets/7.png";

const PopularBook = () => {
  return (
    <section className="flex flex-col items-center justify-center py-28">
      <h3 className="text-[#7A7A7A] text-[13px] tracking-wider font-medium uppercase">
        Some Quality Items
      </h3>
      <h2 className="text-[#111] text-5xl mt-5">Popular Books</h2>
      <nav className="mt-[57px]">
        <ul className="flex items-center gap-10 font-medium text-[#7a7a7a]">
          <li>All Genre</li>
          <li>Business</li>
          <li>Technology</li>
          <li>Adventure</li>
          <li>Romantic</li>
          <li>Fictinal</li>
        </ul>
      </nav>
      <div className="mt-[57px] flex flex-wrap gap-10 items-center justify-center">
        <img src={Book1} alt="book" />
        <img src={Book2} alt="book" />
        <img src={Book3} alt="book" />
        <img src={Book4} alt="book" />
        <img src={Book5} alt="book" />
        <img src={Book6} alt="book" />
        <img src={Book7} alt="book" />
        <img src={Book8} alt="book" />
      </div>
    </section>
  );
};

export default PopularBook;
