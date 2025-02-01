import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const CreatePost = ({ setEntries }) => {
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    category: "",
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

    setNewEntry({ date: "", title: "", image: "", content: "", category: "" });
    setFormSubmitted(true);
  };

  return (
    <div className="w-[88vw] md:w-[90vw] lg:w-[min(1290px,90vw)] mx-auto py-12">
      {!formSubmitted ? (
        <>
          <h3 className="font-bold text-3xl mb-5">Create Post</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 w-full"
          >
            <div className="w-full col-span-1 md:col-span-3 lg:col-span-4 flex flex-col gap-3">
              <input
                type="text"
                name="title"
                value={newEntry.title}
                onChange={handleChange}
                placeholder="Title"
                className="input input-bordered w-full"
              />
              <textarea
                name="content"
                value={newEntry.content}
                onChange={handleChange}
                rows="6"
                placeholder="Type your message here..."
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div className="w-full col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-3">
              <input
                type="date"
                name="date"
                value={newEntry.date}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                className="input input-bordered w-full"
              />
              <select
                name="house"
                value={newEntry.category}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="">Select...</option>
                <option value="ravenclaw">Ravenclaw</option>
                <option value="gryffindor">Gryffindor</option>
                <option value="hufflepuff">Hufflepuff</option>
                <option value="slytherin">Slytherin</option>
              </select>
              <select
                name="category"
                value={newEntry.category}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="">Select...</option>
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
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-5 flex justify-start mt-2 gap-1">
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
        <h3 className="font-bold text-lg">
          Your post has been added successfully!
        </h3>
      )}
    </div>
  );
};

export default CreatePost;
