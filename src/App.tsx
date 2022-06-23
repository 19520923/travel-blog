import React, { useState } from "react";
import "./styles/main.scss";
import Toolbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Search from "./screens/Search";
import CreatePost from "./screens/CreatePost";

function App() {
  const [isNewBlog, setIsNewBlog] = useState(false);
  const onDisPlayNewBlog = () => {
    setIsNewBlog(!isNewBlog);
  };

  return (
    <div>
      <BrowserRouter>
        <Toolbar />

        <div className="btn-ft add-post" onClick={onDisPlayNewBlog}>
          <i className="fa-solid fa-plus"></i>
        </div>
        {isNewBlog && <CreatePost onCLose={onDisPlayNewBlog} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
