import { Link } from "react-router-dom";
import "../CreateP.css";

const Card = ({ entry }) => {
  const getHouseClass = () => {
    return entry.house ? `${entry.house}-card` : "";
  };

  return (
    <div
      className={`card card-compact bg-base-100 w-96 shadow-xl relative overflow-hidden ${getHouseClass()}`}
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
    
      <div className="relative">
        <div className="card-image-wrapper">
         
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full h-48 object-cover"
            style={{
              opacity: 0.7,
              borderRadius: '12px 12px 0 0', 
            }}
          />
        </div>
        
        <div className="card-body bg-white bg-opacity-90 p-4" style={{ borderRadius: '0 0 12px 12px' }}>
          <h2 className="card-title">{entry.title}</h2>
          <p>{entry.date}</p>
          <div className="card-actions justify-end">
            <Link to={`/post/${entry.id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
