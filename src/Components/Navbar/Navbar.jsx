// eslint-disable-next-line no-unused-vars
import React from "react";
//import "./Navbar.css";
import logo from "../../assets/logo_bl.png";

const Navbar = () => {
  const menus = [
    "Home",
    "About Us",
    "Causelist",
    "Publications",
    "Legislation",
    "Judgment & Ruling",
    "Forms",
    "Public Notice",
  ];
  return (
    <header className="w-full mb-24">
      <nav className="bg-red-900">

        <div className="flex justify-between items-center p-2 w-[980px] mx-auto">
          <img src={logo} className="size-24" alt="" />
          <div className="text-slate-100 text-center text-2xl font-bold">
            <h1 className="">High Court of Tanzania</h1>
            <h2>Commercial Division</h2>
          </div>
          <img src={logo} className="size-24" alt="" />
        </div>
        </div>

      </nav>
      <ul className="flex justify-center w-full gap-3 bg-red-700 shadow">
        {menus.map((menu) => (
          // eslint-disable-next-line react/jsx-key
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            {menu}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
