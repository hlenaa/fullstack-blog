import React from "react";
import { useTheme } from "../Context/ThemeContext"; 
import { Link } from "react-router-dom";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";

const LandingPage = () => {
  const { darkMode, setDarkMode} = useTheme(); 


  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode); 
      return newMode;
    });
  };


  return (
    <div
      className="landing-container"
      style={{
        background: darkMode
          ? "linear-gradient(145deg, #1e1e1e, #333)"  
          : "linear-gradient(145deg, #f8f8f8, #e0e0e0)",  
        minHeight: "100vh",
        color: darkMode ? "#fff" : "#333",
        fontFamily: "'Harry P', sans-serif",
      }}
    >
 <button
  onClick={toggleDarkMode}
  style={{
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "6px", 
    borderRadius: "50%", 
    border: "none",
    background: darkMode ? "#222" : "#ddd", 
    color: darkMode ? "#fff" : "#333",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    width: "40px", 
    height: "40px", 
  }}
>
  <img
    src={darkMode ? moon : sun}
    alt="Theme Icon"
    className="theme-icon"
    style={{
      width: "20px",
      height: "20px",
    }}
  />
</button>


   
 
<header
  className="hero-section"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('https://medias.artmajeur.com/standard/15835846_harry-potter.jpg?v=1738626855)", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh", 
    padding: "0 20px",
    textAlign: "center",
    boxShadow: darkMode 
    ? "0 0 15px rgba(255, 255, 255, 0.3)"  
    : "0 0 15px rgba(0, 0, 0, 0.2)",     
  
  }}
>
<div
  style={{
    backgroundColor: "rgba(0, 0, 0, 0.4)", 
    padding: "40px 20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "100%",
    maxWidth: "800px",
  }}
>
  <h1
    className="hero-title"
    style={{
      fontSize: "3.5rem", 
      fontWeight: "600",
      fontFamily: "'Merriweather', serif", 
      textTransform: "none", 
      color: "#B3D9FF", 
      textShadow: darkMode
        ? "0px 0px 20px rgba(173, 216, 230, 0.8), 0px 0px 40px rgba(173, 216, 230, 0.4)" 
        : "0px 0px 20px rgba(173, 216, 230, 0.8)",
    }}
  >
    The Magic Is Real — Your Hogwarts Invitation Awaits!
  </h1>
  <p
    className="hero-subtitle"
    style={{
      fontSize: "1.6rem", 
      marginTop: "20px",
      marginBottom: "40px",
      color: "#E0E0E0", 
      fontWeight: "500", 
      fontFamily: "'Georgia', serif", 
    }}
  >
    Discover magical stories, spells, and everything Hogwarts!
  </p>
  <div className="landing-buttons">
    <Link to="/login">
      <button
        className="cta-button"
        style={{
          padding: "12px 24px",
          fontSize: "1.1rem",
          backgroundColor: "#A7C7E7", 
          color: "#333",
          border: "none",
          borderRadius: "30px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          boxShadow: darkMode
            ? "0px 4px 8px rgba(173, 216, 230, 0.6)"
            : "0px 4px 8px rgba(0, 0, 0, 0.2)", 
        }}
      >
        Log In
      </button>
    </Link>
  </div>
</div>

</header>


      <section


  className="features-section"
  style={{
    padding: "50px 20px",
    backgroundColor: darkMode ? "#222" : "#f4f4f4",
  }}
>
  <h2
    className="section-title"
    style={{
      fontSize: "2.8rem",
      textAlign: "center",
      marginBottom: "50px",
      color: darkMode ? "#fff" : "#333",
      textTransform: "uppercase",
      letterSpacing: "3px",
    }}
  >
    Why Join Us?
  </h2>
  <div
    className="features-list"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "40px",
      textAlign: "center",
      justifyItems: "center",
    }}
  >
  
    <div
      className="feature-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src="https://houseofspells.co.uk/cdn/shop/articles/blog_banner_-_HOS.jpg?v=1694149514&width=1100"
        alt=""
        style={{
          width: "100%",
          height: "300px", 
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h3 style={{ fontSize: "1.6rem", fontWeight: "600", color: darkMode ? "#fff" : "#333" }}>
        Exclusive Content
      </h3>
      <p style={{ fontSize: "1rem", color: darkMode ? "#bbb" : "#444" }}>
        Unlock hidden articles, magical facts, and more!
      </p>
    </div>


    <div
      className="feature-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/20029923/75582277.jpg.jpg?quality=90&strip=all&crop=16.45,0,67.1,100"
        alt=""
        style={{
          width: "100%",
          height: "300px", 
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h3 style={{ fontSize: "1.6rem", fontWeight: "600", color: darkMode ? "#fff" : "#333" }}>
        Magical Community
      </h3>
      <p style={{ fontSize: "1rem", color: darkMode ? "#bbb" : "#444" }}>
        Join a passionate community of fellow Potterheads!
      </p>
    </div>

    
    <div
      className="feature-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src="https://contentful.harrypotter.com/usf1vwtuqyxm/60IUoEiki4U2SkGK0AAOek/15828f75de833f4e74cd9327b615cffe/RitaSkeeter_WB_F4_RitaSkeeterMidshot_Promo_080615_Port.jpg"
        alt=""
        style={{
          width: "100%",
          height: "300px", 
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h3 style={{ fontSize: "1.6rem", fontWeight: "600", color: darkMode ? "#fff" : "#333" }}>
        Stay Updated
      </h3>
      <p style={{ fontSize: "1rem", color: darkMode ? "#bbb" : "#444" }}>
        Get the latest magical updates and news in your inbox!
      </p>
    </div>
  </div>
</section>


      
      <section
  className="testimonials-section"
  style={{
    backgroundColor: darkMode ? "#333" : "#fff",
    padding: "50px 20px",
    textAlign: "center",
  }}
>
  <h2
    className="section-title"
    style={{
      fontSize: "2.8rem",
      marginBottom: "30px",
      color: darkMode ? "#fff" : "#333",
      textTransform: "uppercase",
      letterSpacing: "3px",
    }}
  >
    What Our Readers Say
  </h2>
  <div
    className="testimonials-list"
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    }}
  >
  
    <div
      className="testimonial-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <p>"A magical place for every Harry Potter fan!"</p>
      <p>- John Doe, Potterhead</p>
    </div>

    <div
      className="testimonial-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <p>"The content is enchanting and truly magical!"</p>
      <p>- Jane Smith, Wizarding World Lover</p>
    </div>

    <div
      className="testimonial-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <p>"I can't get enough of the magical facts and insider stories!"</p>
      <p>- Sarah Potter, Magical Scholar</p>
    </div>

    <div
      className="testimonial-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <p>"The sense of community here is incredible. Truly a place for every Potterhead!"</p>
      <p>- Harry Black, Wizarding Enthusiast</p>
    </div>
   
    <div
      className="testimonial-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <p>"The updates and news always keep me excited for the next magical adventure!"</p>
      <p>- Emma Long, Harry Potter Fanatic</p>
    </div>
 
    <div
      className="testimonial-item"
      style={{
        backgroundColor: darkMode ? "#444" : "#fff",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    >
      <p>"A perfect blend of nostalgia and new magic. I love reading everything on this blog!"</p>
      <p>- Luke Evans, Wizarding World Aficionado</p>
    </div>
  </div>
</section>



      <footer
        className="footer"
        style={{
          backgroundColor: darkMode ? "#111" : "#f1f1f1",
          color: darkMode ? "#fff" : "#333",
          textAlign: "center",
          padding: "30px 20px",
        }}
      >
        <p>&copy; 2025 Wizarding World Blog. All rights reserved.</p>
       
      </footer>
    </div>
  );
};

export default LandingPage;
