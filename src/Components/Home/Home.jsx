// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import { pictures } from "./data";
import news1 from "../../assets/bg0_2.png";
import news2 from "../../assets/bg0_9.png";
import news3 from "../../assets/bg0_5.png";
import home_icon from "../../assets/logo_bl.png";

const Home = () => {
  return (
    <div className="mb-16 w-full">
      <div className="w-9/12 mx-auto">
        <div className="mb-8 text-center text-xl">
          <p className="mb-3  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            dignissimos recusandae quae eos hic sequi quisquam architecto aut
            consequuntur, at odio tempora, suscipit aspernatur laborum, rem
            tempore maiores impedit! Suscipit!
          </p>
          <p className="italic animate-pulse underline underline-offset-4 hover:cursor-pointer hover:text-sky-600 text-red-500">
            Find out more!
          </p>
        </div>
      </div>
      <div className="flex gap-1 justify-center">
        {pictures.map((picture) => (
          <div
            key={picture.id}
            className="h-auto w-60 -rotate-1 text-center border-b-4 border-red-500 hover:transition-transform hover:scale-105 hover:ease-in-out hover:duration-700 rounded-lg"
          >
            <img src={picture.url} className="h-40 rounded-t-lg" />
            <div className="p-2 md:text-base lg:text-md">
              <h1 className="text-teal-800">{picture.name}</h1>
              <p className="font-bold text-orange-700">{picture.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    /*
    <div className="news">
      <div className="new">
        <img src={news1} alt="" />
        <div className="caption">
          <img src={home_icon} alt="" />
          <p>Click for more</p>
        </div>
      </div>
      <div className="new">
        <img src={news2} alt="" />
        <div className="caption">
          <img src={home_icon} alt="" />
          <p>Click for more</p>
        </div>
      </div>
      <div className="new">
        <img src={news3} alt="" />
        <div className="caption">
          <img src={home_icon} alt="" />
          <p>Click for more</p>
        </div>
      </div>
      <div className="new">
        <img src={news3} alt="" />
        <div className="caption">
          <img src={home_icon} alt="" />
          <p>Click for more</p>
        </div>
      </div>
      <div className="new">
        <img src={news3} alt="" />
        <div className="caption">
          <img src={home_icon} alt="" />
          <p>Click for more</p>
        </div>
      </div>
    </div>
    */
  );
};

export default Home;
