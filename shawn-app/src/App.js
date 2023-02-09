import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Students from './components/Students';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pokemon from './components/pokemon';

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
            <li><Link to='/students'>Students</Link></li>
            <li><Link to='/pokemon'>Pokemon</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/students" element={<Students />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


