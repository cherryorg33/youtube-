import React, { useState } from "react";
import "./displaycomments.css";

function Displaycomments({ ctid,Comments, userComment }) {
  const [Edit, setEdit] = useState(false);
  const [Comment, setComment] = useState("");

  const handleEdit=(ctid,Comments)=>{
     setEdit(true)
     setComment(true)
  }

  const submitHandle=(e)=>{
    e.preventDefault();
    setEdit(false)
  }
  return (
    <>
      {Edit ? (
        <>
          <form
            className="comment_sub_form"
             onSubmit={submitHandle}
          >
            <input
              type="text"
              placeholder="edit comments...."
              className="comment_box"
               value={Comments} // Use the value attribute to display the current input value
              onChange={(e) => setComment(e.target.value)}
            />
            <input type="submit" value="change" className="add_button" />
          </form>
        </>
      ) : (
        <>
          <p className="comment_body">{Comments} </p>
        </>
      )}
      <p className="usercommentd">- {userComment} commented</p>
      <p className="editdel_diaplaycomment">
        <i onClick={()=>handleEdit(ctid,Comments)}>Edit</i>
        <i>Delete</i>
      </p>
    </>
  );
}

export default Displaycomments;
