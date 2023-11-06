import React from "react";
import "./Drawerleftsidebar.css";
import { Link, NavLink } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
function Drawersidebar({ toggleDrawer, toggleDrawersidebar }) {
  return (
    <div className="container_drawer_leftsidebar" style={toggleDrawersidebar}>
      <div className="container2_drawer_leftsidebar">
        <div className="drawer_leftsidebar">
          <Link to={"/"} className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">HOME</div>
            </p>
          </Link>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>

          <NavLink to={"/library"} className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </NavLink>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineSubscriptions
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Subscriptions</div>
            </p>
          </div>
        </div>
        <div className="libraryBtn_drawerleftsidebar">
          <NavLink to={"/Libary"} className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </NavLink>
          <NavLink to={"/History"} className="icon_sidebar_div">
            <p>
              <FaHistory
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </p>
          </NavLink>
          <NavLink to={"/yourvedio"} className="icon_sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Your vedios</div>
            </p>
          </NavLink>
          <NavLink to={"/watchlater"} className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch later</div>
            </p>
          </NavLink>
          <NavLink to={"/likedvedios"} className="icon_sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Liked vedios</div>
            </p>
          </NavLink>
        </div>
        <div className="subscriptions_lsdbar">
          <h3>Your subsctiptions</h3>
          <div className="chanel_lsbar">
            <p>c</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsbar">
            <p>c</p>
            <div>Chanel</div>
          </div>
        </div>
      </div>
      <div
        className="container3_drawer_leftsidebar"
        onClick={() => toggleDrawer()}
      ></div>
    </div>
  );
}

export default Drawersidebar;
