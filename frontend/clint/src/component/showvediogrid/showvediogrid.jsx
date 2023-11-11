import React from 'react'
import Showvedio from './showvedio'
import './showvediogrid.css'

function showvediogrid({vids}) {
  return (
    <div className='container_showvediogrid'>
      {
        vids?.map(vi=>{
            return(
                <div key={vi._id} className="vedio_box">
                    <Showvedio vid={vi}/>
                </div>
        )
        })
      }
    </div>
  )
}

export default showvediogrid
