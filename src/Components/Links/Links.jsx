// eslint-disable-next-line no-unused-vars
import React from "react";
//import "./Courts.css";
import { links } from "./data";

const Link = () => {
  return (
    <div className="mb-16 bg-sky-900">
      <div className="md:p-10 p-8  md:w-[980px] w-full mx-auto text-white">
        <h1 className="mb-5 text-2xl font-bold text-center">Related Links</h1>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 place-items-center md:gap-10">
          {links.map((link) => (
            // eslint-disable-next-line react/jsx-key
            <a href={link.url} target="_blank">
              <div className="flex flex-col items-center justify-center w-full gap-2 p-4 text-center border border-red-200 rounded-md bg-red-50">
                <img src={link.img} alt="" className="size-12" />
                <p className="text-lg font-semibold leading-6 hover:text-sky-600 hover:underline hover:underline-offset-4">
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
