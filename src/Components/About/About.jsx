import React from "react";
import "./About.css";
import about_img from "../../assets/bg_color.png";
import play_icon from "../../assets/logo_bl.png";

function About() {
  return (
    <>
      <div className="about-right w-full m-2 mx-auto">
        <h2 className="text-red-500 text-2xl font-bold mb-3 text-center">
          Judiciary of Tanzania
        </h2>
        <div className="flex gap-3 text-slate-500 w-full">
          <div className="border border-t-4 border-red-300 shadow-myShadow w-full">
            <h3 className="mb-1 font-semibold text-center bg-red-200 p-2">
              Vision
            </h3>
            <p className="text-md italic text-center p-3">
              " To carry out the administration of Justice to the general public
              in dealing with disposal of cases effectively and efficiently ".
            </p>
          </div>
          <div className="border border-t-4 border-red-300 shadow-myShadow w-full">
            <h3 className="mb-1 font-semibold text-center bg-red-200 p-2">
              Mission
            </h3>
            <p className="text-md italic text-center p-3">
              " Timely and Accessible Justice for All ".
            </p>
          </div>
          <div className="border border-t-4 border-red-300 shadow-myShadow w-full">
            <h3 className="mb-1 font-semibold text-center bg-red-200 p-2">
              Major Function
            </h3>
            <p className="text-md italic text-center p-3">
              " Interpreting diverse Laws and execution administrative
              decisions. Hearing and deciding cases filed before the courts of
              law ".
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
