import React from 'react'
import Leftsidebar from '../leftsidebar/Leftsidebar'
import './whl.css'
import Whlvediolist from './whlvediolist'

function Whl({page,vediolist}) {
  return (
    <div>
      <div className='container_page_App'>
        <Leftsidebar />
      <div className="container2_page_App">
        <p className="det">
            <div className="box_whl">
                <b>your {page} shown here</b>
                {
                  page==="history"&&
                  <div className="clear_history_btn">
                    clear history
                </div>
                }
            
            </div>
            <div className="rightside_whl">
                <h1>{page}</h1>
                <div className="whl_list">
                    <Whlvediolist
                    page={page}
                    vediolist={vediolist}/>
                </div>
            </div>
        </p>

      </div>
      </div>
    </div>
  )
}

export default Whl
