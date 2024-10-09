// eslint-disable-next-line no-unused-vars
import React from "react";
//import "./Courts.css";
import court_img from "../../assets/crt_red.png";
import { links } from "./data";

const Link = () => {
  return (
    <div className="w-full mb-24 ">
      <div className="max-w-[980px] mx-auto p-10">
        <h1 className="text-2xl font-bold mb-5 text-center">Related Links</h1>
        <div className="grid grid-cols-3 place-items-center gap-10 text-slate-500">
          {links.map((link) => (
            <a href={link.url} target="_blank">
              <div className="w-full text-center p-4 border border-red-200 bg-red-50 rounded-md flex flex-col justify-center gap-2 items-center">
                <img src={link.img} alt="" className="size-12" />
                <p className="leading-6 font-semibold text-lg hover:text-sky-600 hover:underline hover:underline-offset-4">
                  {link.placeholder}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    /*
    <div className="court container mb-16">
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
