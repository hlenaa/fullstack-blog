import { useEffect, useState } from "react";
import "../Styles/subLinks.css";
import Loading from "../utils/Loading";
import { useTheme } from "../Context/ThemeContext"; 

const Houses = () => {  
  const [house, setHouse] = useState("Gryffindor");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const { darkMode } = useTheme(); 

  useEffect(() => {
    setLoading(true);
    fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching house characters:", error);
        setLoading(false);
      });
  }, [house]);

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
        minHeight: "100vh" 
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          color: darkMode ? "#fff" : "#000", 
        }}
      >
        Characters by House
      </h1>
      <select
        onChange={(e) => setHouse(e.target.value)}
        value={house}
        style={{
          padding: "8px",
          fontSize: "1rem",
          marginBottom: "20px",
          backgroundColor: darkMode ? "#444" : "#fff", 
          color: darkMode ? "#fff" : "#000", 
          border: `1px solid ${darkMode ? "#888" : "#ccc"}`, 
          borderRadius: "5px",
        }}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
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
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Houses;
