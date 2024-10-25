/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from "react";
//import "./Courts.css";
import { links } from "./data";

const Link = () => {
  return (
    <div className="mb-16 bg-transparent-to-r from-red-500 via-red-400 to-red-500">
      <div className="md:p-10 p-8  md:w-[980px] w-full mx-auto">
        <h1 className="mb-5 text-2xl font-bold text-center text-red-700">Related Links</h1>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 place-items-center md:gap-10">
          {links.map((link) => (
            <a href={link.url} target="_blank">
              <div className="flex flex-col items-center justify-center w-full gap-2 p-4 text-center bg-transparent">
                <img src={link.img} alt="" className="size-10 md:size-12" />
                <p className="text-sm font-semibold md:leading-6 md:text-lg hover:underline hover:underline-offset-4">
                  {link.placeholder}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    /*
    <div className="container mb-16 court">
      <ul>
        <li>
          <div className="court-text">
            <button className="btn">
              <img src={court_img} alt="" />
            </button>
          </div>
        </li>
        <li>
          <div className="court-text">
            <button className="btn">
              <img src={court_img} alt="" />
            </button>
          </div>
        </li>
        <li>
          <div className="court-text">
            <button className="btn">
              <img src={court_img} alt="" />
            </button>
          </div>
        </li>
        <li>
          <div className="court-text">
            <button className="btn">
              <img src={court_img} alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
    */
  );
};

export default Link;
