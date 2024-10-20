import About from "./About/About";
import Hero from "./Hero/Hero";
import Judgment from "./Judgements/Judgments";
import Links from "./Links/Links";
import News from "./News/News";

const Home = () => {
  return (
    <main>
      <Hero />
      <Judgment />
      <News />
      <Links />
      <About />
    </main>
  );
};

export default Home;
