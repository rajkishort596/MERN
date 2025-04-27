import { useState } from "react";
import post_img from "./assets/profile.jpg";
import "./Post.css";
const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  const toogleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <img src={post_img} onDoubleClick={toogleLike} draggable={false} />
      <div className="flex">
        <p className="caption">Lorem ipsum dolor sit amet.</p>
        <p onClick={toogleLike} className="like-btn">
          {isLiked ? (
            <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </p>
      </div>
    </div>
  );
};

export default Post;
