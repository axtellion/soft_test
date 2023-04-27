import { GlobalStyle } from "./GlobalStyle";
import { Cases } from "./components/Cases/Cases";
import { Hero } from "./components/Hero/Hero";
import { Specificity } from "./components/Specificity/Specificity";

function App() {
  return (
    <>
      <Hero />
      <Specificity />
      <Cases />
      <GlobalStyle />
    </>
  );
}

export default App;
