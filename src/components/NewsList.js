import React from "react";

const NewsList = ({ id, title, section, date, url }) => {
  return (
    <div className="">
      {/* box */}
      <div
        className="border border-gray-400 border-opacity-40 mx-4 w-80 md:w-96 p-5 rounded-md shadow-md"
        style={{
          boxShadow:
            "-6px 0px 8px -6px rgba(0, 0, 0, 0.3), 0px 4px 6px -4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {" "}
        <h3 className="text-2xl text-[#606c76]">{title}</h3>
        <ul className="list-disc list-inside text-gray-500 p-5">
          <li className="text-sm font-bold pb-3">
            Section Name: <span className="font-normal">{section}</span>{" "}
          </li>
          <li className="text-sm font-bold pb-3">
            Publication Date: <span className="font-normal">{date} </span>
          </li>
        </ul>
        {/* buttons */}
        <div className="flex flex-row justify-between">
          <button className=" text-white bg-[#9b4dca] hover:bg-[#606c76] border border-[#9b4dca] rounded-md px-7 py-2">
            <a href={url} target="_blank" rel="noreferrer">
              <span className="text-xs font-bold">FULL ARTICLE</span>
            </a>
          </button>
          <button className="text-[#9b4dca] border hover:text-[#606c76] border-[#9b4dca] hover:border-[#606c76] rounded-md px-7 py-2">
            <span className="text-xs font-bold">READ LATER</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
