import React from "react";

const Judgment = () => {
  const contents = [
    {
      id: 1,
      date: "October 4, 2024",
      parties: "MeTL -v- JocPo Ltd",
    },
    {
      id: 2,
      date: "October 8, 2024",
      parties: "Pamba Jiji -v- Tanzania Football Federation (TFF)",
    },
    {
      id: 3,
      date: "October 1, 2024",
      parties:
        "AzamFC -v- Jenada Batchelor Foundation for Children (JBFC) Funds and Welfare",
    },
    {
      id: 4,
      date: "October 2, 2024",
      parties: "MeTL -v- Fountain Gate Foundation",
    },
  ];

  return (
    <div className="bg-red-100 mb-16 p-5">
      <div className="w-9/12 mx-auto mb-5">
        <h1 className="text-2xl font-semibold mb-3">Latest Judgments</h1>
        <div className="grid grid-cols-2 gap-5">
          {contents.map((content) => (
            <div
              key={content.id}
              className="bg-red-50 p-4 border border-red-200 rounded-md cursor-pointer"
            >
              <p className="mb-2">{content.date}</p>
              <p className="font-semibold hover:underline hover:text-sky-700">
                {content.parties}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        <button className="border border-red-300 p-3 bg-red-200 rounded-md">
          See more judgments
        </button>
      </div>
    </div>
  );
};

export default Judgment;
