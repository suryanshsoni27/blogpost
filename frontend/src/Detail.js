import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const data = location.state;
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="button"
      >
        go back
      </button>
      <div className="title__detail">
        <h1>Title</h1>
        <h1>{data.title}</h1>
      </div>

      <div className="blog__detail">
        <h1>Blog</h1>
        <h1>{data.body}</h1>
      </div>
    </div>
  );
}
