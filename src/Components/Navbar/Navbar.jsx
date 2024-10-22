// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo_bl.png";
import Login from "../Login";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="mb-10 md:mb-16">
      <div className="md:bg-slate-100 bg-gradient-to-r from-red-300 to-red-50 shadow-lg">
        <nav className="px-2">
          <div className="flex items-center md:justify-between p-2 md:w-[980px] mx-auto">
            <div className="flex items-center gap-1 md:gap-2">
              <img src={logo} className="size-14 md:size-24" alt="" />
              <div className="flex items-center">
                <div className="md:h-20 h-10 w-2 bg-red-700"></div>
                <div className="md:h-20 h-10 w-2 bg-slate-100"></div>
                <div className="md:h-20 h-10 w-2 bg-slate-700"></div>
              </div>
              <div className="text-red-700 text-center md:text-2xl font-bold">
                <h1 className="text-lg md:text-3xl">High Court of Tanzania</h1>
                <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                  Commercial Division
                </h2>
              </div>
            </div>
            <form
              action=""
              className="relative hidden md:flex items-center gap-3"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="size-5 fill-slate-400 absolute top-3 right-2"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="p-2 w-full border border-slate-600 outline-none rounded-md"
                />
              </div>
              <Link to="login">
                <button className="bg-red-700 py-2 px-5 rounded-md text-slate-50">
                  Login
                </button>
              </Link>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-8 md:hidden fill-red-700 ml-auto"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </nav>
        <ul className="hidden md:flex justify-center w-full gap-3 bg-red-700 shadow">
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
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            Forms
          </li>
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            Public Notice
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
