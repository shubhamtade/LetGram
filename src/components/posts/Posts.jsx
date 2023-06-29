import React from "react";
import "./Posts.css";
import Post from "../post/Post";
import { postData } from "../../components/data/PostData";

const Posts = () => {
  return (
    <div className="posts">
      {postData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
