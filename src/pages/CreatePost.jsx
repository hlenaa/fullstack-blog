import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "../CreateP.css";

const CreatePost = ({ setEntries }) => {
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    category: "",
    house: "",
    image: "",
    content: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newEntry.date ||
      !newEntry.title ||
      !newEntry.category ||
      !newEntry.house ||
      !newEntry.image ||
      !newEntry.content
    )
      return;

    const newEntries = [
      { id: uuidv4(), ...newEntry },
      ...(JSON.parse(localStorage.getItem("entries")) || []),
    ];

    setEntries(newEntries);
    localStorage.setItem("entries", JSON.stringify(newEntries));

    setNewEntry({
      date: "",
      title: "",
      category: "",
      house: "",
      image: "",
      content: "",
    });
    setFormSubmitted(true);
  };

  return (
    <div className={`create-post-container`}>
      {!formSubmitted ? (
        <>
          <h3>Create Post</h3>
          <form onSubmit={handleSubmit} className="create-post-form">
            <div className="col-span-2">
              <input
                type="text"
                name="title"
                value={newEntry.title}
                onChange={handleChange}
                placeholder="Title"
                className="input"
              />
              <textarea
                name="content"
                value={newEntry.content}
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
                value={newEntry.date}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                className="input"
              />
              <select
                name="house"
                value={newEntry.house}
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
                value={newEntry.category}
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
                value={newEntry.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="input"
              />
            </div>
            <div className="create-post-submit">
              <Link to="/" className="btn bg-gray-300 text-black">
                Discard Draft
              </Link>
              <button type="submit" className="btn bg-blue-500 text-white">
                Add
              </button>
            </div>
          </form>
        </>
      ) : (
        <h3>Your post has been added successfully!</h3>
      )}
    </div>
  );
};

export default CreatePost;
