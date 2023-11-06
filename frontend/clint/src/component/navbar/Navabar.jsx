import React from "react";
import "./Navabar.css";
import { Link } from "react-router-dom";
import Logo from "./youtube-logo-png-photo-0.png";
import Searchbar from "../searchbar/Searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
function Navabar({ toggleDrawer }) {
  const CurrentUser = null;
  // const CurrentUser = {
  //   result: {
  //     email: "abzxy50312@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   },
  // };
  return (
    <div>
      <div className="container_Navbar">
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={() => toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={"/"} className="logo_navbar">
            <img src={Logo} alt="" />
            <p className="Logo_title_nav">You Tube</p>
          </Link>
        </div>
        <Searchbar />
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
        <div className="apps_box">
          <p className="app_box"></p>
          <p className="app_box"></p>
          <p className="app_box"></p>
          <p className="app_box"></p>
          <p className="app_box"></p>
          <p className="app_box"></p>
          <p className="app_box"></p>
          <p className="app_box"></p>
        </div>
        <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
        <div className="Auth_cont_Navbar">
          {CurrentUser ? (
            <>
              <div className="Chanel_logo_App">
                <p className="fstChar_logo_App">
                  {CurrentUser?.result.name ? (
                    <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="Auth_Btn">
                <BiUserCircle size={22} />
                <b>SIGN IN</b>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navabar;
