import React from "react";

const ReadLater = () => {
  return (
    <div className="">
      <ul className="list-disc list-inside text-gray-500 p-5">
        <li className="text-2xl text-[#606c76]">Sample news title</li>
      </ul>
      <div className="flex flex-row justify-start">
        <button className=" text-[#9b4dca] hover:text-[#606c76] ml-5 px-7 py-2">
          <span className="text-xs font-bold">FULL ARTICLE</span>
        </button>
        <button className="text-[#9b4dca] hover:text-[#606c76]  px-7 py-2">
          <span className="text-xs font-bold">READ LATER</span>
        </button>
      </div>
    </div>
  );
};

export default ReadLater;
