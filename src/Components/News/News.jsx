import React from "react";
import { newsContent } from "./data";

const News = () => {
  return (
    <div className="bg-red-100 mb-16 p-5">
      <div className="w-9/12 mx-auto mb-5">
        <h1 className="text-2xl font-semibold mb-3">Latest News</h1>
        <div className="flex flex-col gap-4">
          {newsContent.map((content) => (
            <div
              key={content.id}
              className="bg-red-50 flex gap-4 items-center cursor-pointer"
            >
              <img src={content.url} className="h-auto w-80" />
              <div className="p-2">
                <h1 className="mb-1 text-lg font-semibold hover:underline hover:text-sky-700">
                  {content.heading}
                </h1>
                <p className="text-md">{content.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        <button className="border border-red-300 p-3 bg-red-200">
          See more news
        </button>
      </div>
    </div>
  );
};

export default News;
