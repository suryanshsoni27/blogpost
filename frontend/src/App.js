//show all title , pagination , only title showing up , page size is 5 all rest pages show next
//click on title , show page where will have title, and blog ,and previous button, go to main page after clicking it.

import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./Blogs";
import Detail from './Detail'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}
