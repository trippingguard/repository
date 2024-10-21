// eslint-disable-next-line no-unused-vars
import React from "react";
import { newsContent } from "./data";

const News = () => {
  return (
    <div className="w-full p-8 text-slate-700 bg-slate-300">
      <div className="mb-5 md:w-[980px] w-full mx-auto">
        <h1 className="mb-3 text-2xl font-semibold text-slate-800">
          Latest News
        </h1>
        <div className="flex flex-col gap-5">
          {newsContent.map((content) => (
            <div
              key={content.id}
              className="flex items-center gap-4 p-2 border border-red-200 rounded-md cursor-pointer bg-red-50"
            >
              <img src={content.url} className="h-auto rounded-md w-80" />
              <div className="">
                <div className="flex gap-4 my-1 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-red-400 size-3"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                    <p>{content.author}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-slate-50 size-3"
                    >
                      <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
                    </svg>
                    <p>{content.date}</p>
                  </div>
                </div>
                <h1 className="mb-1 font-semibold md:text-base lg:text-lg hover:text-sky-700">
                  {content.heading}
                </h1>
                <p className="mb-2 md:text-sm lg:text-md">{content.content}</p>
                <p className="font-semibold text-sky-500 hover:underline hover:underline-offset-4">
                  Read More
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        <button className="p-3 text-lg rounded-lg text-sky-50 bg-sky-500 hover:bg-slate-700">
          See more news
        </button>
      </div>
    </div>
  );
};

export default News;
