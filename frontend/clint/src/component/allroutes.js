import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Library from "../pages/home/libary/Library";
import History from "../pages/history/History";
import Likedvedio from "../pages/likedvedios/Likedvedio";
import Yourvedios from "../pages/yourvedio/Yourvedios";
import Watchlater from "../pages/watchlater/Watchlater";
function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Libary" element={<Library />} />
      <Route path="/History" element={<History />} />
      <Route path="/likedvedios" element={<Likedvedio />} />
      <Route path="/yourvedio" element={<Yourvedios />} />
      <Route path="/watchlater" element={<Watchlater />} />
    </Routes>
  );
}

export default Allroutes;
