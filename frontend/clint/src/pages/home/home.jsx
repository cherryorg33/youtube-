import React from 'react';
import './home.css';
import Leftsidebar from '../../component/leftsidebar/Leftsidebar.jsx';
import Showvediogrid from '../../component/showvediogrid/showvediogrid.jsx';
import v from '../../component/vedio/WhatsApp Video 2023-11-09 at 10.19.19 AM.mp4'



function Home() {
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
  const Navlist =[
    "all",
    "python",
    "c",
    "c++",
    "all",
    "java",
    "javascript",
    "react js",
    "nodejs",
    "express js",
    "mango db",
    "my sql",
    "sql",
    "django",
    "post man",
    "django rest frame work",


  ]
  return (
    <div className='container_page_App'>
        <Leftsidebar />
      <div className="container2_page_App">
        <div className="navigation_cont">
        {
          Navlist.map((m)=> 
          {
            return(
              <p key={m} className="item">{m}</p>
            )
          })
        }
        </div>
        <Showvediogrid vids={vids} /> {/* Use "showvediogrid" with a lowercase "s" */}
      </div>
    </div>
  );
}

export default Home;

