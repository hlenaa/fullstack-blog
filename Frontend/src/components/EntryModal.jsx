import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const EntryForm = ({ setEntries, closeModal }) => {
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

    setNewEntry({ date: "", title: "", image: "", content: "" });
    setFormSubmitted(true);
  };

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={closeModal}
        >
          ✕
        </button>

        {!formSubmitted ? (
          <>
            <h3 className="font-bold text-lg">Welcome back</h3>
            <p className="py-4">Please select a date to add a diary entry</p>
            <form onSubmit={handleSubmit} className="mb-4">
              <input
                type="date"
                name="date"
                value={newEntry.date}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="text"
                name="title"
                value={newEntry.title}
                onChange={handleChange}
                placeholder="Title"
                className="input input-bordered w-full max-w-xs mt-2"
              />
              <select
                name="category"
                value={newEntry.category}
                onChange={handleChange}
                className="select select-bordered w-full max-w-xs mt-2"
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
                className="input input-bordered w-full max-w-xs mt-2"
              />
              <textarea
                name="content"
                value={newEntry.content}
                onChange={handleChange}
                rows="4"
                placeholder="Type your message here..."
                className="input input-bordered w-full max-w-xs mt-2"
              ></textarea>
              <button type="submit" className="btn mt-2">
                Add
              </button>
            </form>
          </>
        ) : (
          <h3 className="font-bold text-lg">
            Your diary post has been added successfully!
          </h3>
        )}
      </div>
    </dialog>
  );
};

export default EntryForm;
