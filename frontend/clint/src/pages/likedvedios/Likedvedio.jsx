import React from 'react'
import Whl from '../../component/WHL/whl';
import v from '../../component/vedio/WhatsApp Video 2023-11-09 at 10.19.19 AM.mp4'

function Likedvedio() {
    const likedvedios = [
      {
        _id: 1,
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
      
    ]
    return (
      <div>
         
        <Whl page={"likedvedios"} vediolist={likedvedios}/>
      </div>
    )
  }

export default Likedvedio
