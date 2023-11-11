import React from 'react'
import v from '../../component/vedio/WhatsApp Video 2023-11-09 at 10.19.19 AM.mp4';
import './vediopage.css'
import Comments from '../../component/comments/comments';
import Likewatchlatersavebtns from './likewatchlatersavebtns'

function vediopage() {
  return (
    <>
     <div className="container_vediopage">
        <div className="container2_vediopage">
          <div className="vedio_disply_screen_vediopage">
            <video src={v} className={"vedio_showvedio_vediopage"} controls  ></video>
          <div className="vediodetails_vediopage">
            <div className="vedio_btns_title_vediopage">
              <p className='vedio_title_vediopage'>Title</p>
              <div className="views_date_btns_vediopage">
                <div className="views_vediopage">
                5 views <div className="dot"></div>uploaded 1 year
                </div>
                <Likewatchlatersavebtns/>
              </div>

            </div>
            <div className="chanel_details_vediopage">
              <b className="chanel_logo_vediopage">
                <p>C</p>
              </b>
              <p className="chanel_name_vediopage">chanel name</p>
            </div>
            <div className="comments_vediopage">
              <h2><u>Comments</u></h2>
              <Comments />

            </div>
          </div>
          </div>
          <div className="morevediobar">
            more vedio
          </div>
        </div>
     </div>
    </>
  )
}

export default vediopage
