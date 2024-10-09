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
    <div className="bg-red-100 mb-24 p-8">
      <div className="w-9/12 mx-auto mb-5">
        <h1 className="text-2xl font-semibold mb-3">Latest Judgments</h1>
        <div className="grid grid-cols-2 gap-5">
          {contents.map((content) => (
            <div
              key={content.id}
              className="bg-red-50 p-4 border border-red-200 rounded-md cursor-pointer"
            >
              <div className="mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-slate-500 size-4"
                >
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
                </svg>
                <p>{content.date}</p>
              </div>

              <p className="font-semibold hover:underline hover:underline-offset-4 hover:text-sky-700">
                {content.parties}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        <button className="text-lg text-sky-50 p-3 bg-sky-500 rounded-lg hover:bg-slate-700">
          See more judgments
        </button>
      </div>
    </div>
  );
};

export default Judgment;
