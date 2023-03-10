import { Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';
import React from 'react';
import StoreBook from './components/Bookstore';
import Category from './components/Status';

function App() {
  return (
    <div>
      <nav className="nav-bar">
        <h1>Bookstore CMS</h1>
        <ul className="links">
          <li>
            {' '}
            <Link className="Books" to="/">
              Books
            </Link>
          </li>
          <li>
            {' '}
            <Link className="category" to="/Categories">
              Category
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<StoreBook />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </div>
  );
}
export { App as default };
