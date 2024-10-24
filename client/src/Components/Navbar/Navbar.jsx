// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo_bl.png";
import emblem from "/assets/emblem.png";
// eslint-disable-next-line no-unused-vars
import Login from "../Login";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [menu, setMenu] = useState(false);

  return (
    <header className="mb-10 md:mb-16">
      <div className="shadow-lg md:bg-slate-100 bg-gradient-to-r from-red-600 to-red-600">
        <nav className="px-2">
          <div className="flex items-center md:justify-center p-2 md:w-[980px] mx-auto">
            <div className="flex items-end gap-1 md:gap-2">
              <img src={emblem} className="size-14 md:size-24" alt="" />
              <div className="font-bold text-center text-black-700 md:text-2xl">
                <h1 className="text-lg md:text-3xl">High Court of Tanzania</h1>
                <h2 className="text-base font-semibold md:text-lg lg:text-xl">
                  Commercial Division
                </h2>
              </div>
              <img src={logo} className="size-14 md:size-24" alt="" />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="ml-auto size-8 md:hidden fill-red-700"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </nav>
        <ul className="justify-center hidden w-full gap-3 p-3 bg-red-700 shadow md:flex">
          <Link to="/">
            <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
              Home
            </li>
          </Link>
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            About Us
          </li>
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            Causelist
          </li>
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            Publications
          </li>
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            Legislation
          </li>
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            Judgments & Ruling
          </li>
          <form
            action=""
            className="relative items-center hidden gap-3 md:flex"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute size-5 fill-slate-400 top-3 right-2"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full p-2 outline-none"
              />
            </div>
            <Link to="login">
              <button className="p-3 text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
                Login
              </button>
            </Link>
          </form>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
