import { GlobalStyle } from "./GlobalStyle";
import { Blog } from "./components/Blog/Blog";
import { Cases } from "./components/Cases/Cases";
import { Footer } from "./components/Footer/Footer";
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
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
