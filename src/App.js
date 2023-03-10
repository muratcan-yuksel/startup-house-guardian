import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import "./App.css";
import NewsList from "./components/NewsList";
import ReadLater from "./components/ReadLater";
import axios from "axios";
import { DataContext } from "./context";

const App = () => {
  //dates
  const today = new Date(); // Get today's date
  const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); // Subtract 30 days

  // Format the dates as strings in the format YYYY-MM-DD
  const todayFormatted = today.toISOString().slice(0, 10);
  const thirtyDaysAgoFormatted = thirtyDaysAgo.toISOString().slice(0, 10);
  const [page, setPage] = useState(1);
  const [section, setSection] = useState("all");
  const [pages, setPages] = useState(1);
  const urlAll = `https://content.guardianapis.com/search?from-date=${thirtyDaysAgoFormatted}&to-date=${todayFormatted}&order-by=newest&page=${page}&page-size=10&api-key=${process.env.REACT_APP_API_KEY}`;
  const urlSection = `https://content.guardianapis.com/search?section=${section}&from-date=${thirtyDaysAgoFormatted}&to-date=${todayFormatted}&order-by=newest&page=${page}&page-size=10&api-key=${process.env.REACT_APP_API_KEY}`;
  const [items, setItems] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [savedItems, setSavedItems] = useState([]);
  const [context, setContext] = useContext(DataContext);

  // const [items, setItems] = useState([]);
  const getSavedItems = async () => {
    try {
      const res = await axios.get(
        "https://startup-house-backend.onrender.com/api"
      );
      console.log(res.data.data);
      setSavedItems(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getItems = async () => {
    if (section === "all") {
      const res = await axios.get(urlAll);
      console.log(res.data.response.results);
      setItems(res.data.response.results);
      console.log(res.data.response.pages);
      setPages(res.data.response.pages);
    } else if (section !== "all") {
      console.log(page);
      const res = await axios.get(urlSection);
      console.log(res.data.response.results);
      setItems(res.data.response.results);
      console.log(res.data.response.pages);
      setPages(res.data.response.pages);
    }
  };

  const changePage = (e) => {
    setPage(e.target.value);
    console.log(page);
    console.log(e.target.value);
  };

  const changeSection = (e) => {
    // if (e.target.value !== "all") {
    // }
    setPage(1);
    setPages(1);
    setSection(e.target.value);
  };

  const filteredData = items.filter((item) => {
    return item.webTitle.toLowerCase().includes(filterValue.toLowerCase());
  });

  const filteredSavedItems = savedItems.filter((item) => {
    return item.title.toLowerCase().includes(filterValue.toLowerCase());
  });

  useEffect(() => {
    getItems();
    getSavedItems();
    console.log(page);
  }, [page, section, context]);

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
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
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
                onChange={changeSection}
              >
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="business">Business</option>
                <option value="culture">Culture</option>
                <option value="sport">Sport</option>
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

              {filteredData &&
                filteredData.map((item) => (
                  <NewsList
                    key={item.id}
                    id={item.id}
                    title={item.webTitle}
                    section={item.sectionName}
                    date={item.webPublicationDate}
                    url={item.webUrl}
                  />
                ))}

              {/* <NewsList /> */}
            </div>
            {/* news list ends */}
            {/* read later part */}
            <div className="readLaterDiv flex flex-col md:w-6/12 w-full mb-4 mr-0 md:ml-2">
              <h2 className="mx-4 my-3 text-4xl w-7/12 border-b border-[#606c76] text-[#606c76] font-light leading-10 pb-2">
                Read Later
              </h2>
              {filteredSavedItems &&
                filteredSavedItems.map((item) => (
                  <ReadLater
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    section={item.section}
                    date={item.date}
                    url={item.url}
                  />
                ))}
              {/* <ReadLater /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
