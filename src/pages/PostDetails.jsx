import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import "../styles/PostD.css";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  console.log("ID outside useEffect:", id);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`http://localhost:5050/posts/${id}`);
        if (response.data) {
          setPostData(response.data);
        }
      } catch (error) {
        console.error(
          "Error fetching post:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="post-details-container">
      {postData ? (
        <Post postData={postData} />
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
