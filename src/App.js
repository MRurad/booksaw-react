//Components
import Container from "../src/Components/Container";
import BestSellingBook from "./Components/BestSellingBook";
import Header from "./Components/Header";
import PopularBook from "./Components/PopularBook";

const App = () => {
  return (
    <Container>
      <Header />
      <BestSellingBook />
      <PopularBook />
    </Container>
  );
};

export default App;
