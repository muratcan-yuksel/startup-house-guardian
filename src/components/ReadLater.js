import React from "react";

const ReadLater = () => {
  return (
    <div className="">
      <ul className="list-disc list-inside text-gray-500 px-5 py-1">
        <li className="text-xl font-light text-[#606c76]">Sample news title</li>
      </ul>
      <div className="flex flex-row justify-start">
        <button className=" text-[#9b4dca] hover:text-[#606c76] ml-5 px-7 ">
          <span className="text-xs font-bold">Read</span>
        </button>
        <button className="text-[#9b4dca] hover:text-[#606c76]  px-7 ">
          <span className="text-xs font-bold">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default ReadLater;
