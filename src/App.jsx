// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
//import Courts from "./Components/Courts/Courts";
import News from "./Components/News/News";
import Judgment from "./Components/Judgements/Judgments";
import Footer from "./Components/Footer/Footer";
import Link from "./Components/Links/Links";

const App = () => {
  return (
    <div className="bg-fixed bg-center bg-no-repeat bg-cover bg-hero text-slate-950">
      <Navbar />
      <Home />
      <Judgment />
      <News />
      <Link />
      <About />
      <Footer />
    </div>
  );
};

export default App;
