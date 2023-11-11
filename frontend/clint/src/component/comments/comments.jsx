import React, { useState } from 'react';
import './comments.css';
import Displaycomments from './displaycomments';

function Comments() {
  const [comment, setComment] = useState(''); // Renamed state variable for clarity

  const submitHandle = (e) => {
    e.preventDefault();
    
  };

  const Commentslist =[
    {
      ctid:"1",
      Comments:"hellow",
      userComment:"rich",
    },
    {
        ctid:"2",
        Comments:"ram",
        userComment:"italics",
    },
    {
        ctid:"3",
        Comments:"charan",
        userComment:"beear",
    },
    {
        ctid:"4",
        Comments:"ram charan",
        userComment:"bold",
    },
    {
        ctid:"5",
        Comments:"charan tej",
        userComment:"italic",
    },
    
]

  return (
    <div>
      <form className="comment_sub_form" onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="Add comments...."
          className="comment_box"
        //   value={comment} // Use the value attribute to display the current input value
          onChange={(e) => setComment(e.target.value)}
        />
        <input type="submit" value="Add" className="add_button" />
      </form>
      <div className="display_comment">
        {
            Commentslist.map((m)=>{
                return(
                    <Displaycomments 
                    ctid={m.ctid}
                    Comments={m.Comments}
                    userComment={m.userComment}

                    />
                )
            })
        }
      </div>
    </div>
  );
}

export default Comments;

