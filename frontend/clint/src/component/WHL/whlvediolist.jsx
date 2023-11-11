import React from 'react'
import Showvediolist from '../showvediolist/showvediolist'

function whlvediolist({page,vediolist}) {
  return (
    <>
    {
        vediolist.map((m)=>{
            return(
                <>
                <Showvediolist 
               vedioId={m._id} key={m._id}
               /></>

            )
        })
    }
      
    </>
  )
}

export default whlvediolist
