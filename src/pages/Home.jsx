import { useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import "../App.css";

const Home = () => {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );

  return (
    <div className="dark">
      <Hero />
      <div className="mx-auto max-w-[90vw] lg:max-w-[1290px] mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <Card key={entry.id} entry={entry} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;