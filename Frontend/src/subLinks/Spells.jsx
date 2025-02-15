import { useEffect, useState } from "react";
import "../Styles/subLinks.css";
import Loading from "../utils/Loading"; 
import { useTheme } from "../Context/ThemeContext";  

const Spells = () => {
  const { darkMode } = useTheme();  
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    setLoading(true);  
    fetch("https://hp-api.onrender.com/api/spells")
      .then((res) => res.json())
      .then((data) => {
        setSpells(data);
        setLoading(false);  
      })
      .catch((error) => {
        console.error("Error fetching spells:", error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <Loading />;  
  }

  return (
    <div
      className="container"
      style={{
        marginTop: "150px", 
        padding: "20px",
        background: darkMode
          ? "linear-gradient(145deg, #2c2c2c, #444)" 
          : "linear-gradient(145deg, #f8f8f8, #e0e0e0)", 
        color: darkMode ? "#fff" : "#333",  
        minHeight: "100vh", 
        fontFamily: "'Harry P', sans-serif", 
      }}
    >
      <h1
        className="title"
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "30px",
          textTransform: "uppercase",
          color: darkMode ? "#fff" : "#000",
          letterSpacing: "5px",
          textShadow: darkMode ? "0px 0px 10px #fff, 0px 0px 30px #00FFFF" : "0px 0px 10px #ff00ff",
        }}
      >
        All Spells
      </h1>
      <div
        className="spell-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {spells.map((spell, index) => (
          <div
            key={index}
            className="spell-item"
            style={{
              padding: "20px",
              backgroundColor: darkMode ? "#444" : "#fff",
              color: darkMode ? "#fff" : "#000",
              borderRadius: "10px",
              boxShadow: darkMode
                ? "0px 4px 15px rgba(255, 255, 255, 0.15)"
                : "0px 4px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
              border: `1px solid ${darkMode ? "#888" : "#ccc"}`,
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "10px",
                fontWeight: "bold",
                textTransform: "capitalize",
                textShadow: darkMode ? "0px 0px 8px #ff00ff" : "0px 0px 10px #00FFFF", 
              }}
            >
              <strong>Spell Name:</strong> {spell.name}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.5",
                textAlign: "justify",
                color: darkMode ? "#ccc" : "#333",
              }}
            >
              <strong>Effect:</strong> {spell.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spells;
