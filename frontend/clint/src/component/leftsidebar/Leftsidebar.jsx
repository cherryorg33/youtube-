import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import "./Leftsidebar.css";
import { NavLink } from "react-router-dom";

function Leftsidebar() {
  return (
    <div>
      <div className="container_leftsidebar">
        <NavLink to={"/"} className="icon_sidebar_div">
          <AiOutlineHome size={22} className="icon_sidebar" />
          <div className="text_sidebar_icon">Home</div>
        </NavLink>
        <NavLink to={"/explore"} className="icon_sidebar_div">
          <MdOutlineExplore size={22} className="icon_sidebar" />
          <div className="text_sidebar_icon">Explore</div>
        </NavLink>
        <NavLink to={"/subscriptions"} className="icon_sidebar_div">
          <MdOutlineSubscriptions size={22} className="icon_sidebar" />
          <div className="text_sidebar_icon" style={{ fontSize: "12px" }}>
            Subscriptions
          </div>
        </NavLink>
        <NavLink to={"/Library"} className="icon_sidebar_div">
          <MdOutlineVideoLibrary size={22} className="icon_sidebar" />
          <div className="text_sidebar_icon" style={{ fontSize: "12px" }}>
            Library
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Leftsidebar;
