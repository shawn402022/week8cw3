import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Students from './components/Students';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pokemon from './components/pokemon';
import Blog from './views/Blog';
import BlogSingle from './views/BlogSingle';

/* create two components 
/about
/contact
*/


export default function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/counter'>Counter</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/students'>Students</Link></li>
            <li><Link to='/pokemon'>Pokemon</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/students" element={<Students />} />
          <Route path="/pokemon" element={<Pokemon />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/blog">
            <Route path=":id" element={BlogSingle} />
            <Route path="" element={<Blog/>} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}


