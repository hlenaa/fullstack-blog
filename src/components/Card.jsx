import { Link } from "react-router-dom";

const Card = ({ entry }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={entry.image} alt={entry.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <p>{entry.date}</p>
        <div className="card-actions justify-end">
          <Link to={`/post/${entry.id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
