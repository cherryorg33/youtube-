import React from 'react'
import './showvedio.css'
import { NavLink } from 'react-router-dom'

const showvedio = ({vid}) => {
  return (
    <>
    <NavLink to={`./vediopage/${vid._id}`} >
      <video src={`${vid.video_src}`} className='vedio_showvedio'>
      </video>
    </NavLink>
    <div className="vedio_description">
      <div className="Chanel_logo_App">
        <div className="fstChar_logo_App">
          <>{vid?._vid$Uploder?.charAt(0).toUppercase()}</>
        </div>
      </div>
      <div className="vedio_details">
        <p className="title_show_vedio">
          title
        </p>
        <pre className="vid_views_uploadtime">
          1-1-2001
        </pre>
        <pre className="vid_views_uploadtime">
          5 views <div className="dot"></div> vedio upload 1 year ago
        </pre>
      </div>
    </div>
      
    </>
  )
}

export default showvedio
