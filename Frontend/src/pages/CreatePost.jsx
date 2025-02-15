import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "../Styles/CreateP.css";

const CreatePost = ({ entries, setEntries }) => {
  const { id } = useParams();

  const [postData, setPostData] = useState({
    date: "",
    title: "",
    category: "",
    house: "",
    image: "",
    content: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [postId, setPostId] = useState(null);
  const [isUpdating, setIsUpdating] = useState(!!id);
  const [postDeleted, setPostDeleted] = useState(false);



  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`http://localhost:5050/posts/${id}`);
        setPostData(response.data);
      } catch (error) {
        console.error(
          "Error fetching post:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidImageURL = (url) => {
    const regex = /^https?:\/\/[^\s$.?#].[^\s]*$/gm;
    return regex.test(url);
  };

  const isBase64Image = (image) => {
    return image && image.startsWith("data:image");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postData.image && !isValidImageURL(postData.image) && !isBase64Image(postData.image)) {
      console.error("Invalid image URL or base64 data.");
      return;
    }

    if (!postData.date) {
      postData.date = new Date().toISOString();
    }

    if (
      !postData.date ||
      !postData.title ||
      !postData.category ||
      !postData.house ||
      !postData.image ||
      !postData.content
    ) {
      console.error("All fields must be filled out.");
      return;
    }

    try {
      let response;

      if (id) {
        response = await axios.put(
          `http://localhost:5050/posts/${id}`,
          postData
        );
        if (setEntries && Array.isArray(entries)) {
          setEntries((prevEntries) =>
            prevEntries.map((entry) => (entry.id === id ? response.data : entry))
          );
        }
      } else {
        response = await axios.post("http://localhost:5050/posts", postData);
        if (setEntries && Array.isArray(entries)) {
          setEntries((prevEntries) => [response.data, ...(prevEntries || [])]);
        }
      }

      setPostId(response.data.id);
      setFormSubmitted(true);
    } catch (error) {
      console.error(
        "Error saving post:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDelete = () => {
    if (!id) return;

    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));

    setPostDeleted(true);
    setFormSubmitted(true);
  };

  return (
    <div
      className="create-post-container"
      
    >
      {!formSubmitted ? (
        <>
          <h3>{isUpdating ? "Update Post" : "Create Post"}</h3>
          <form onSubmit={handleSubmit} className="create-post-form">
            <div className="col-span-2">
              <input
                type="text"
                name="title"
                value={postData.title}
                onChange={handleChange}
                placeholder="Title"
                className="input"
              />
              <textarea
                name="content"
                value={postData.content}
                onChange={handleChange}
                rows="6"
                placeholder="Type your message here..."
                className="textarea"
              ></textarea>
            </div>
            <div className="col-span-1">
              <input
                type="date"
                name="date"
                value={postData.date}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                className="input"
              />
              <select
                name="house"
                value={postData.house}
                onChange={handleChange}
                className="select"
              >
                <option value="">Select House...</option>
                <option value="ravenclaw">Ravenclaw</option>
                <option value="gryffindor">Gryffindor</option>
                <option value="hufflepuff">Hufflepuff</option>
                <option value="slytherin">Slytherin</option>
              </select>

              <select
                name="category"
                value={postData.category}
                onChange={handleChange}
                className="select"
              >
                <option value="">Select Category...</option>
                <option value="news">News</option>
                <option value="characters">Characters</option>
                <option value="lifestyle">Lifestyle</option>
              </select>

              <input
                type="url"
                name="image"
                value={postData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="input"
              />
              {postData.image && (
                <div className="image-preview">
                  <img
                    src={isBase64Image(postData.image) ? postData.image : `http://localhost:5050/images/${postData.image}`}
                    alt="Preview"
                    style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }}
                  />
                </div>
              )}
            </div>
            <div className="create-post-submit">
              <Link to="/home" className="btn bg-gray-300 text-black">
                {isUpdating ? "Discard edits" : "Discard draft"}
              </Link>
              <button type="submit" className="btn bg-blue-500 text-white">
                {isUpdating ? "Update" : "Add"}
              </button>
              {isUpdating && (
                <button
                  type="button"
                  className="btn bg-red-500 text-white"
                  onClick={handleDelete}
                >
                  Delete Post
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <div>
          <h3>
            {postDeleted
              ? "Your post has been successfully deleted!"
              : isUpdating
              ? "Your post has been updated successfully!"
              : "Your post has been added successfully!"}
          </h3>
          {postDeleted ? (
            <Link
              to="/home"
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md inline-block"
            >
              Return to Home
            </Link>
          ) : (
            <Link
              to={`/post/${postId}`}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              View Post
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatePost;
