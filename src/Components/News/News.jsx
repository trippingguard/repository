import React from "react";
import { newsContent } from "./data";

const News = () => {
  return (
    <div className="text-slate-700 bg-red-100 p-3">
      <div className="flex flex-col gap-4 p-3">
        {newsContent.map((content) => (
          <div
            key={content.id}
            className="bg-red-50 w-9/12 mx-auto flex gap-4 items-center hover:cursor-pointer"
          >
            <img src={content.url} className="h-auto w-80" />
            <div className="p-2">
              <h1 className="mb-1 text-lg font-semibold hover:underline">
                {content.heading}
              </h1>
              <p className="text-md">{content.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-9/12 mx-auto p-3">
        <button className="border border-red-300 p-3 bg-red-200">
          See more news
        </button>
      </div>
    </div>
  );
};

export default News;
