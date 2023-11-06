import React from "react";
import { FaSearch } from "react-icons/fa";
import "./searchlist.css";

function Searchlist({ TitleArray, setsearchquary }) {
  return (
    <>
      <div className="container_Searchlist">
        {TitleArray.map((m) => {
          return (
            <p key={m} onClick={(e) => setsearchquary(m)} className="titleitem">
              <FaSearch />
              {m}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Searchlist;
