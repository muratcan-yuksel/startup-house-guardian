import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context";

const ReadLater = ({ id, title, section, date, url }) => {
  const [context, setContext] = useContext(DataContext);

  const incrementContext = () => {
    setContext(Number(context) + 1);
  };

  const removeItem = async () => {
    try {
      const res = await axios.delete(
        `https://startup-house-backend.onrender.com/api/${id}`
      );
      console.log(res);
      incrementContext();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <ul className="list-disc list-inside text-gray-500 px-5 py-1">
        <li className="text-lg font-light text-[#606c76]"> {title} </li>
      </ul>
      <div className="flex flex-row justify-start">
        <a href={url} target="_blank" rel="noreferrer">
          <button className=" text-[#9b4dca] hover:text-[#606c76] ml-5 px-7 ">
            <span className="text-xs font-bold">Read</span>
          </button>
        </a>
        <button
          onClick={() => removeItem()}
          className="text-[#9b4dca] hover:text-[#606c76]  px-7 "
        >
          <span className="text-xs font-bold">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default ReadLater;
