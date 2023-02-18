import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      {/* wrapper */}
      <div className="flex flex-col">
        {/* item */}
        <div className="flex flex-col md:flex-row mx-4">
          <div className="flex flex-col md:w-6/12 w-full mb-4 mr-0 md:mr-2">
            <label
              htmlFor="newsContentSearch"
              className="font-bold text-[#606c76] mb-2"
            >
              News content search
            </label>
            <input
              type="search"
              placeholder="News content search"
              id="newsContentSearch"
              className="border rounded-md h-9 p-4 font-light"
            />
          </div>
          {/* item */}
          <div className="flex flex-col md:w-6/12 w-full mb-4 ml-0 md:ml-2">
            {" "}
            <label
              htmlFor="sectionSelect"
              className="font-bold text-[#606c76] mb-2"
            >
              Section
            </label>
            <select
              id="sectionSelect"
              className="bg-[#ffffff] border rounded-md h-9 font-light"
            >
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="business">Business</option>
              <option value="culture">Culture</option>
              <option value="Sport">Sport</option>
            </select>
          </div>
        </div>
        {/* top section ends */}
        <div className="flex flex-col w-1/6 mx-4">
          {" "}
          <label
            htmlFor="activePageSelect"
            className="font-bold text-[#606c76] mb-2"
          >
            Active Page
          </label>
          <select
            id="activePageSelect"
            className="bg-[#ffffff] border rounded-md h-9 font-light"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
