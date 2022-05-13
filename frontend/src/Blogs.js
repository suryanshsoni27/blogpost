import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  var limit = 5;
  const [pages] = useState(Math.round(data.length / limit));
  const [selectedpage, setSelectedPage] = useState(1);

  function nextPage() {
    setSelectedPage((page) => page + 1);
  }

  function prevPage() {
    setSelectedPage((page) => page - 1);
  }

  function changePage(event) {
    const pagenum = Number(event.target.textContent);
    setSelectedPage(pagenum);
  }

  function getPaginated() {
    const startIndex = selectedpage * limit - limit;
    const endIndex = startIndex + limit;
    return data.slice(startIndex, endIndex);
  }

  function getPaginatedGroup() {
    let start = Math.floor((selectedpage - 1) / limit) * limit;
    return new Array(limit).fill().map((_, idx) => start + idx + 1);
  }

  useEffect(() => {
    const fetchdata = async () => {
       axios
        .get("http://localhost:4000")
        .then((response) => {
          console.log(response);
          setData(response.data);
        });
    };
    fetchdata();
  }, []);
  return (
    <div className="container">
      <h1 className="header">Welcome to Blog Page</h1>
      {getPaginated().map((dat) => (
        <div className="blog__container"key={dat.id}>
          <div
            key={dat.id}
            className="blog__data"
            onClick={() => {
              navigate("/detail", { state: dat });
            }}
          >
            <h1 className="flex flex-row">Title : {dat.title}</h1>
            {/* <h1 className="flex flex-row">Blog : {dat.body}</h1> */}
          </div>
        </div>
      ))}

      <div className="paginate">
        <button className="button" onClick={prevPage}>
          prev
        </button>

        {getPaginatedGroup().map((item, index) => (
          <button className="button" onClick={changePage}>
            {item}
          </button>
        ))}

        <button className="button" onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  );
}
