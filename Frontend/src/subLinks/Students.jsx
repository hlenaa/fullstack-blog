import { useEffect, useState } from "react";
import "../Styles/subLinks.css";
import Loading from "../utils/Loading"; 
import { useTheme } from "../Context/ThemeContext";  

const Students = () => {
  const { darkMode } = useTheme();  
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);  
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
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
        backgroundColor: darkMode ? "#2c2c2c" : "#fff", 
        color: darkMode ? "#fff" : "#000", 
        minHeight: "100vh", 
        padding: "20px", 
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          color: darkMode ? "#fff" : "#000", 
        }}
      >
        Hogwarts Students
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {students.map((student) => (
          <div
            key={student.id}
            className="card"
            style={{
              backgroundColor: darkMode ? "#444" : "#fff", 
              color: darkMode ? "#fff" : "#000", 
              boxShadow: darkMode
                ? "0px 4px 10px rgba(255, 255, 255, 0.2)" 
                : "0px 4px 10px rgba(0, 0, 0, 0.2)", 
              padding: "15px", 
              borderRadius: "10px", 
              textAlign: "center",
            }}
          >
            <img
              src={student.image}
              alt={student.name}
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
              {student.name}
            </h2>
            <p>
              <strong>House:</strong> {student.house || "Unknown"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
