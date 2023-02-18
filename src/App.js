import React from "react";
import Header from "./components/Header";
import "./App.css";
import NewsList from "./components/NewsList";
import ReadLater from "./components/ReadLater";

const App = () => {
  return (
    <div>
      <Header />
      {/* wrapper */}
      <div className="flex justify-center">
        <div className="flex flex-col w-full  lg:w-11/12">
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
                className="bg-[#ffffff] border rounded-md h-9 font-light px-4"
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
              className="bg-[#ffffff] border rounded-md h-9 font-light px-4"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {/* active page ends */}
          <div className="flex flex-col md:flex-row">
            {/* news list */}

            <div className="flex flex-col md:w-6/12 w-full mb-4 mr-0 md:mr-2">
              <h2 className="mx-4 mt-3 mb-10 text-4xl w-7/12 border-b border-[#606c76] text-[#606c76] font-light leading-10 pb-2 ">
                News List
              </h2>
              <NewsList />
            </div>
            {/* news list ends */}
            {/* read later part */}
            <div className="readLaterDiv flex flex-col md:w-6/12 w-full mb-4 mr-0 md:ml-2">
              <h2 className="mx-4 my-3 text-4xl w-7/12 border-b border-[#606c76] text-[#606c76] font-light leading-10 pb-2">
                Read Later
              </h2>
              <ReadLater />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
