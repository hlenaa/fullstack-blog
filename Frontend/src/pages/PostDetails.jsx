import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import Loading from "../utils/Loading"; 
import "../styles/PostD.css";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        setLoading(true); 
        const response = await axios.get(`http://localhost:5050/posts/${id}`);
        if (response.data) {
          setPostData(response.data);
        }
      } catch (error) {
        setError("There was an error loading the post."); 
        console.error("Error fetching post:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Loading />; 
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="post-details-container">
      {postData ? (
        <Post postData={postData} />
      ) : (
        <p className="text-center">Post not found.</p>
      )}
    </div>
  );
};

export default PostDetails;
