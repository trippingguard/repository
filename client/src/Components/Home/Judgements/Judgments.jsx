// eslint-disable-next-line no-unused-vars
import React from "react";
import { contents } from "./data";

const Judgment = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-red-300 via-red-100 to-red-200">
      <div className="mb-5 md:w-[980px] w-full mx-auto">
        <h1 className="mb-3 text-2xl font-semibold">Latest Judgments</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {contents.map((content) => (
            <div key={content.id} className="p-4 cursor-pointer bg-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-slate-500 size-4"
                >
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
                </svg>
                <p>{content.date}</p>
              </div>

              <p className="mb-2 font-semibold hover:underline hover:underline-offset-4 hover:text-sky-700">
                {content.parties}
              </p>
              <div className="flex items-center gap-2">
                <p>{content.caseNo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[980px] mx-auto">
        <button className="p-3 text-lg text-sky-5 hover:bg-red-700">
          See more judgments
        </button>
      </div>
    </div>
  );
};

export default Judgment;
