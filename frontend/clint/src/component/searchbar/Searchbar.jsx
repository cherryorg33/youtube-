import React from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import Searchlist from "./Searchlist";
import { useState } from "react";

function Searchbar() {
  const [searchquary, setsearchquary] = useState("");
  const [searchlistA, setsearchlist] = useState(false);
  const TitleArray = [
    "vedio1",
    "vedio2",
    "animation",
    "movie",
    "songs",
    "album",
    "lovestory",
  ].filter((q) => q.toUpperCase().includes(searchquary.toUpperCase()));

  return (
    <>
      <div className="Searchbar_container">
        <div className="Searchbar_container2">
          <div className="Searchbar_div">
            <input
              type="text"
              className="iBox_Searchbar"
              placeholder="Search..."
              onChange={(e) => setsearchquary(e.target.value)}
              onClick={(e) => setsearchlist(true)}
              value={searchquary}
            />
            <FaSearch
              className="SearchIcon_Searchbar"
              onClick={(e) => setsearchlist(false)}
            />
            <BsMicFill className="Mic_Searchbar" />

            {searchquary && searchlistA && (
              <Searchlist
                setsearchquary={setsearchquary}
                TitleArray={TitleArray}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
