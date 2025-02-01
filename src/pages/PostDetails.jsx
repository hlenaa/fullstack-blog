import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Post from "../components/Post";

const PostDetails = () => {
  console.log("Entry.jsx");

  const { id } = useParams(); // Extract the entry ID from the URL
  console.log("ID outside useEffect:", id);
  const [entry, setEntry] = useState(null);
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );

  // Function to get the entry by ID from localStorage
  const getPost = (id) => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    console.log("Entries in localStorage:", entries);
    return entries.find((entry) => entry.id === id);
  };

  const handleUpdateEntries = (updatedEntries) => {
    setEntries(updatedEntries); // Update the entries state
  };

  console.log(localStorage.getItem("entries"));

  useEffect(() => {
    console.log("ID from useParams:", id);
    const fetchedEntry = getPost(id);
    console.log("Fetched Entry:", fetchedEntry);
    setEntry(fetchedEntry);
  }, [id, entries]);

  return (
    <div>
      <NavBar setEntries={setEntries} />
      {entry ? (
        <Post entry={entry} handleUpdateEntries={handleUpdateEntries} />
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
