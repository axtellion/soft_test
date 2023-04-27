import { GlobalStyle } from "./GlobalStyle";
import { Blog } from "./components/Blog/Blog";
import { Cases } from "./components/Cases/Cases";
import { Hero } from "./components/Hero/Hero";
import { Specificity } from "./components/Specificity/Specificity";
import { Team } from "./components/Team/Team";

function App() {
  return (
    <>
      <Hero />
      <Specificity />
      <Cases />
      <Blog />
      <Team />
      <GlobalStyle />
    </>
  );
}

export default App;
