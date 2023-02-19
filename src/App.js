import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import NewsList from "./components/NewsList";
import ReadLater from "./components/ReadLater";
import axios from "axios";

const App = () => {
  const [page, setPage] = useState(1);
  const [section, setSection] = useState("All");
  const [pages, setPages] = useState(1);
  const urlAll = `https://content.guardianapis.com/search?from-date=2023-02-06&to-date=2023-02-22&order-by=newest&page=${page}&page-size=10&api-key=501891ca-3ae4-4905-b64f-e2984c6e2251`;
  const urlSection = `https://content.guardianapis.com/search?section=${section}&from-date=2023-02-06&to-date=2023-02-22&order-by=newest&page=${page}&page-size=10&api-key=501891ca-3ae4-4905-b64f-e2984c6e2251`;
  const getItems = async () => {
    if (section === "all") {
      const res = await axios.get(urlAll);
      console.log(res.data.response.results);
      console.log(res.data.response.pages);
      setPages(res.data.response.pages);
    } else if (section !== "All") {
      const res = await axios.get(urlSection);
      console.log(res.data.response.results);
      console.log(res.data.response.pages);
      setPages(res.data.response.pages);
    }
  };

  const changePage = (e) => {
    setPage(e.target.value);
  };

  useEffect(() => {
    getItems();
  }, [page, section]);

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
                onChange={(e) => setSection(e.target.value.toLowerCase())}
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
              onChange={changePage}
            >
              {/* {pages &&
                pages.lengthmap((page) => <option value={page}>{page}</option>)} */}
              {pages &&
                Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
                  <option key={page} value={page}>
                    {page}
                  </option>
                ))}
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
