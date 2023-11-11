import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAddCheck } from "react-icons/md";
import { RiPlayListAddFill, RiShareForwardLine } from "react-icons/ri";
import { RiHeartAddFill } from "react-icons/ri";
import { AiOutlineLike, AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

import "./likedvediolatersavebtn.css";

function LikewatchLaterSaveBtns() {
  const [Savevedios, setSavevedios] = useState(true);
  const [Like, setLike] = useState(false);
  const [Dislike, setDislike] = useState(false);



  const tooglesavedvedio =()=>{
    if(Savevedios){
      setSavevedios(false)
    }else{
      setSavevedios(true)
    }
  }
  const  toogleDislike =()=>{
    if(Dislike){
      setDislike(false)
    }else{
      setDislike(true)
    }
  }
  const  tooglelike =()=>{
    if(Like){
      setLike(false)
    }else{
      setLike(true)
    }
  }

  return (
    <div className="btns_cont_vediopage">
      <div className="btn_videopage">
        <BsThreeDots />
      </div>
      <div className="btn_videopage">
        <div className="like_vediopage" onClick={()=>tooglelike()}>
          {Like ? (
            <>
              <AiFillLike size={22} className="btns_vediopage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_vediopage" />
            </>
          )}
          <b>1</b>
        </div>
        <div className="like_vediopage" onClick={()=>toogleDislike()}>
          {Dislike ? (
            <>
              <AiFillDislike size={22} className="btns_vediopage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_vediopage" />
            </>
          )}
          <b>Dislike</b>
        </div>
        <div className="like_vediopage">
          <RiHeartAddFill size={22} className="btns_vediopage" />
          <b>Thanks</b>
        </div>
        <div className="like_vediopage">
          <RiShareForwardLine size={22} className="btns_vediopage" />
          <b>Share</b>
        </div>
        <div className="like_vediopage" onClick={()=>tooglesavedvedio()}>
          {Savevedios ? (
            <>
              <RiPlayListAddFill size={22} className="btns_vediopage" />
              <b>Save</b>
            </>
          ) : (
            <>
              <MdPlaylistAddCheck size={22} className="btns_vediopage" />
              <b>Saved</b>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LikewatchLaterSaveBtns;
