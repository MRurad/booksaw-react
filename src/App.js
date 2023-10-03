//Components
import Container from "../src/Components/Container";
import BestSellingBook from "./Components/BestSellingBook";
import Header from "./Components/Header";
import PopularBook from "./Components/PopularBook";
import QuoteOfTheDay from "./Components/QuoteOfTheDay";

const App = () => {
  return (
    <Container>
      <Header />
      <BestSellingBook />
      <PopularBook />
      <QuoteOfTheDay />
    </Container>
  );
};

export default App;
