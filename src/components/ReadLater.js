import React from "react";

const ReadLater = () => {
  return (
    <div className="readLaterDiv flex flex-col md:w-6/12 w-full mb-4 mr-0 md:ml-2">
      <h2 className="mx-4 my-3 text-4xl w-7/12 border-b border-[#606c76] text-[#606c76] font-light leading-10 ">
        Read Later
      </h2>
      <ul className="list-disc list-inside text-gray-500 p-5">
        <li className="text-2xl text-[#606c76]">Sample news title</li>
      </ul>
    </div>
  );
};

export default ReadLater;
