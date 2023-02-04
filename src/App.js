/* eslint-disable */
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import Categories from "./components/Status";
import "./styles/app.css";
import BookStore from "./components/BookStore";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <h1>Bookstore CMS</h1>
        <ul className="nav-links">
          <li className="link">
            {" "}
            <Link className="Books" to="/">
              Books
            </Link>
          </li>
          <li className="linked">
            {" "}
            <Link className="category" to="/Categories">
              Category
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}
export { App as default };
