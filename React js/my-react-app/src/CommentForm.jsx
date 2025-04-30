import { useState } from "react";
import "./Form.css";
const CommentForm = ({ AddComments }) => {
  const [comment, setComment] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });
  const handleInputChange = (event) => {
    setComment((currdata) => ({
      ...currdata,
      [event.target.name]: event.target.value,
    }));
  };
  const handleFormSubmit = (event) => {
    AddComments(comment);
    event.preventDefault();
    setComment({
      username: "",
      remarks: "",
      rating: "",
    });
  };
  return (
    <div className="form-container">
      <h1>Add Comment</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={comment.username}
            name="username"
            id="username"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="remarks">Remarks</label>
          <textarea
            value={comment.remarks}
            name="remarks"
            id="remarks"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            value={comment.rating}
            name="rating"
            id="rating"
            min={1}
            max={5}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
