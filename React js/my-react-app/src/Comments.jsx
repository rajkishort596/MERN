import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comments.css";
const Comments = () => {
  const [comments, setComments] = useState([
    {
      username: "@Raj",
      remarks: "Nice place",
      rating: 5,
    },
  ]);
  const AddComments = (comment) => {
    setComments((currcomments) => [...currcomments, comment]);
  };
  return (
    <div>
      <h1>All Comments</h1>
      {comments.map((comment, ind) => {
        return (
          <div className="comments" key={ind}>
            <p>{comment.remarks}</p>
            <p>{comment.username}</p>
            <p>Rating- {comment.rating}</p>
          </div>
        );
      })}
      <CommentForm AddComments={AddComments} />
    </div>
  );
};

export default Comments;
