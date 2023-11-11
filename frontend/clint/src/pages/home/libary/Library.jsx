import React from "react";
import Leftsidebar from "../../../component/leftsidebar/Leftsidebar";
import "./Library.css";
import Whlvediolist from '../../../component/WHL/whlvediolist'
import {FaHistory} from 'react-icons/fa'
import {MdOutlineWatchLater} from 'react-icons/md'
import v from '../../../component/vedio/WhatsApp Video 2023-11-09 at 10.19.19 AM.mp4'
import { AiOutlineLike } from "react-icons/ai";

function Library() {
  const vids = [
    {
      _id: 1,
      video_src: v,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploder: "PANDYS",
      description: "description of video 1",
    },
    {
      _id: 9,
      video_src: v,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploder: "PANDYS",
      description: "description of video 1",
    },
    {
      _id: 2,
      video_src: v,
      Chanel: "cdd",
      title: "video 2",
      Uploder: "HARDIK",
      description: "description of video 2",
    },
    {
      _id: 3,
      video_src: v,
      Chanel: "add",
      title: "video 3",
      Uploder: "RONALD",
      description: "description of video 3",
    },
    {
      _id: 4,
      video_src: v,
      Chanel: "add",
      title: "video 3",
      Uploder: "Abc",
      description: "description of video 3",
    },
    
  ];
  return (
    <div className="container_page_App">
      <Leftsidebar />
      <div className="container2_page_App">
        <div className="conainer_librarypage">

            <h1 className="title_container_librarypage">
             <b>
              <FaHistory/>
             </b>
             <b>History</b>
            </h1>
            <div className="container_vediolist_librarypage">
              <Whlvediolist
              page={"history"}
              vediolist={vids}
              />
            </div>
          </div>
          <div className="conainer_librarypage">

            <h1 className="title_container_librarypage">
             <b>
              <MdOutlineWatchLater/>
             </b>
             <b>Watch later</b>
            </h1>
            <div className="container_vediolist_librarypage">
              <Whlvediolist
              page={"watch later"}
              vediolist={vids}
              />
            </div>
          </div>
          <div className="conainer_librarypage">

            <h1 className="title_container_librarypage">
             <b>
              <AiOutlineLike/>
             </b>
             <b>liked vedios</b>
            </h1>
            <div className="container_vediolist_librarypage">
              <Whlvediolist
              page={"Liked vedios"}
              vediolist={vids}
              />
            </div>
          </div>
          
        </div>
      </div>
  );
}

export default Library;
