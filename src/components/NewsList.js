import React from "react";

const NewsList = () => {
  return (
    <div className="flex flex-col md:w-6/12 w-full mb-4 mr-0 md:mr-2">
      <h2 className="mx-4 my-3 text-4xl w-7/12 border-b border-[#606c76] text-[#606c76] font-light leading-10 ">
        News List
      </h2>
      {/* box */}
      <div className="border border-gray-400 border-opacity-40 w-10/12 p-5 rounded-md shadow-md">
        <h3 className="text-2xl text-[#606c76]">Sample news title</h3>
        <ul className="list-disc list-inside text-gray-500 p-5">
          <li className="text-sm font-bold">
            Section Name: <span className="font-normal">Sample Section</span>{" "}
          </li>
          <li className="text-sm font-bold">
            Publication Date: <span className="font-normal">06.12.2018</span>
          </li>
        </ul>
        {/* buttons */}
        <div className="flex flex-row justify-between">
          <button className=" text-white bg-[#9b4dca] border border-[#9b4dca] rounded-md px-5 py-1">
            <span className="text-xs font-bold">FULL ARTICLE</span>
          </button>
          <button className="text-[#9b4dca] border border-[#9b4dca] rounded-md px-5 py-1">
            <span className="text-xs font-bold">READ LATER</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
