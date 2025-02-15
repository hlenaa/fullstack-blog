import { useEffect, useState } from "react";
import "../Styles/subLinks.css";
import Loading from "../utils/Loading"; 
import { useTheme } from "../Context/ThemeContext";  

const Characters = () => {
  const { darkMode } = useTheme(); 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);  
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setLoading(false);  
      });
  }, []);

  if (loading) {
    return <Loading />;  
  }

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        marginTop: "150px", 
        backgroundColor: darkMode ? "#2c2c2c" : "#fff", 
        color: darkMode ? "#fff" : "#000", 
        minHeight: "100vh", 
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        All Characters
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {characters.map((char) => (
          <div
            key={char.id}
            style={{
              backgroundColor: darkMode ? "#333" : "#fff", 
              color: darkMode ? "#fff" : "#000", 
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: darkMode
                ? "0px 4px 10px rgba(255, 255, 255, 0.2)" 
                : "0px 4px 10px rgba(0, 0, 0, 0.2)", 
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{
                width: "100px",
                height: "130px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <h2
              style={{
                color: darkMode ? "#fff" : "#000",
                marginTop: "10px",
              }}
            >
              {char.name}
            </h2>
            <p><strong>House:</strong> {char.house || "Unknown"}</p>
            <p><strong>Actor:</strong> {char.actor || "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
