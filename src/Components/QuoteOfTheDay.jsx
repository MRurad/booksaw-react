// Image
import QuoteOfTheDayImage from "../assets/quote of the day.png";

const QuoteOfTheDay = () => {
  return (
    <div className="flex items-center justify-center py-28">
      <img src={QuoteOfTheDayImage} alt="quote" />
    </div>
  );
};

export default QuoteOfTheDay;
