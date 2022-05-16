import React from 'react';
import './styles/main.scss'
import Toolbar from "./components/navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './screens/Home'
import Search from'./screens/Search'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Toolbar/>    
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
