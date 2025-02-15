import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Hero from "../components/Hero";
import "../Styles/App.css";
import "../Styles/Nav.css";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = ["news", "characters", "lifestyle"];

  useEffect(() => {
    axios
      .get("http://localhost:5050/posts") // You can change it here to your Port Number
      .then((response) => {
        setEntries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const toggleCategory = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className="dark">
      <Hero />
      <div className="category-container">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-folder 
              ${
                activeCategory === null
                  ? "visible"
                  : activeCategory === category
                  ? "active"
                  : "hidden"
              }`}
          >
            <div
              className={`folder-header cursor-pointer ${category}-bg`}
              onClick={() => toggleCategory(category)}
            >
              <div className="folder-text">
                <h2>
                  {category.charAt(0).toUpperCase() + category.slice(1)} Posts
                </h2>
                <p>Explore {category} related posts.</p>
              </div>
            </div>

            {activeCategory === category && (
              <div className="category-posts">
                <div
                  className="close-btn"
                  onClick={() => setActiveCategory(null)}
                >
                  <button>X</button>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {entries
                    .filter((entry) => entry.category === category)
                    .map((entry) => (
                      <Card key={entry.id} entry={entry} />
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {activeCategory === null && (
        <div className="all-categories-container">
          <h2>Select a category to view posts.</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
