//Components
import Container from "../src/Components/Container";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import FeaturedBooks from "./Components/FeaturedBooks";

const App = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Partners />
      <FeaturedBooks />
    </Container>
  );
};

export default App;
