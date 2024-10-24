/* eslint-disable no-unused-vars */
import React from "react";

function About() {
  const contents = [
    {
      id: 1,
      heading: "Vision",
      icon: "/assets/light-bulb.png",
      description: `" To carry out the administration of Justice to the general public
              in dealing with disposal of cases effectively and efficiently ".`,
    },
    {
      id: 2,
      heading: "Mission",
      icon: "/assets/mission.png",
      description: `" Timely and Accessible Justice for All ".`,
    },
    {
      id: 3,
      heading: "Major Function",
      icon: "/assets/gears.png",
      description: `" Interpreting diverse Laws and execution administrative
              decisions. Hearing and deciding cases filed before the courts of
              law ".`,
    },
  ];
  return (
    <div className="max-w-[980px] w-full mx-auto mb-16 md:mb-24 p-5">
      <div className="about-right">
        <h2 className="mb-5 text-2xl font-bold text-center text-red-700">
          Judiciary of Tanzania
        </h2>
        <div className="flex flex-col w-full gap-3 md:flex-row">
          {contents.map((content) => (
            <div
              key={content.id}
              className="flex flex-col items-center justify-center w-full p-5 text-center border border-slate-300 bg-paper"
            >
              <img
                src={content.icon}
                alt="{content.heading} logo"
                className="mb-3 size-10"
              />
              <h3 className="mb-3 text-xl font-semibold">{content.heading}</h3>
              <p className="text-md">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
