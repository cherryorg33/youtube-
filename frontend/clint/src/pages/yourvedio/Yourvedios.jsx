import React from 'react'
import Leftsidebar from '../../component/leftsidebar/Leftsidebar.jsx';
import Showvediogrid from '../../component/showvediogrid/showvediogrid.jsx';
import v from '../../component/vedio/WhatsApp Video 2023-11-09 at 10.19.19 AM.mp4';
import './Yourvedios.css'

function yourvedios() {
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
    <div className='container_page_App'>
        <Leftsidebar />
      <div className="container2_page_App">
        <div className="navigation_cont">
          <div className="your_vediopage">
          <h2>your vedios</h2>
        <Showvediogrid vids={vids} /> {/* Use "showvediogrid" with a lowercase "s" */}
      </div>
      </div>
    </div>
    </div>
  )
}

export default yourvedios
