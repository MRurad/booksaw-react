//! Components
import Container from "./Components/Container";
import Subscriber from "./Components/Subscriber"
import BookSaw from "./Components/BookSaw"
import UseApp from "./Components/useApp"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <Container>
      <Subscriber/>  
      <BookSaw/>  
      <UseApp/>
      <Footer/>
    </Container>
  );
};

export default App;
