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
        <h2 className="text-2xl font-bold mb-5 text-center">
          Judiciary of Tanzania
        </h2>
        <div className="flex md:flex-row flex-col gap-3 text-slate-500 w-full">
          {contents.map((content) => (
            <div
              key={content.id}
              className="w-full text-center p-3 border border-red-200 bg-red-50 rounded-md flex flex-col justify-center items-center"
            >
              <img
                src={content.icon}
                alt="vision logo"
                className="size-10 mb-3"
              />
              <h3 className="font-semibold text-xl mb-3">{content.heading}</h3>
              <p className="text-md">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
