import { GlobalStyle } from "./GlobalStyle";
import { Blog } from "./components/Blog/Blog";
import { Cases } from "./components/Cases/Cases";
import { Hero } from "./components/Hero/Hero";
import { Specificity } from "./components/Specificity/Specificity";

function App() {
  return (
    <>
      <Hero />
      <Specificity />
      <Cases />
      <Blog />
      <GlobalStyle />
    </>
  );
}

export default App;
