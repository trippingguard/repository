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
    <div className="w-full mb-16 md:mb-24">
      <div className="md:w-[980px] mx-auto w-full px-5">
        <h1 className="mb-5 md:text-3xl text-2xl font-semibold md:text-center">
          Organizational Structure
        </h1>
        <div className="mb-16 md:text-2xl textl-lg md:text-center">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            dignissimos recusandae quae eos hic sequi quisquam architecto aut
            consequuntur, at odio tempora, suscipit aspernatur laborum, rem
            tempore maiores impedit! Suscipit!
          </p>
          <div className="flex items-center gap-2 underline md:ml-4 underline-offset-4 hover:cursor-pointer text-sky-600">
            <p>Find out more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-8 h-5 fill-sky-600"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center gap-1">
        {pictures.map((picture) => (
          <div
            key={picture.id}
            className="h-auto text-center border-b-4 border-red-500 rounded-lg w-60 -rotate-1 hover:transition-transform hover:scale-105 hover:ease-in-out hover:duration-700"
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
