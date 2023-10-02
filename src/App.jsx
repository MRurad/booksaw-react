//! Components
import Container from "./Components/Container";
import Subscriber from "./Components/Subscriber"
import BookSaw from "./Components/BookSaw"

const App = () => {
  return (
    <Container>
      <Subscriber/>  
      <BookSaw/>  
    </Container>
  );
};

export default App;
