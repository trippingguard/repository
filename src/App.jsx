// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero/Hero";
import Home from "./Components/Home/Home";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Courts from "./Components/Courts/Courts";
import News from "./Components/News/News";
import Judgment from "./Components/Judgements/Judgments";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover bg-fixed text-slate-700">
      <Navbar />
      <Home />
      <Judgment />
      <News />
      <div className="container">
        <Title subTitle="Judiciary of Tanzania" title="LINKS" />
        <Courts />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default App;
