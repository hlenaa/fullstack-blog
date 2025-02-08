import "../styles/PostD.css";



const Post = ({ entry, handleUpdateEntries }) => {
  return (
    <div className="post-container">
      <p className="post-date">{entry.date}</p>
      <h2 className="post-title">{entry.title}</h2>
      <figure>
        <img className="post-image" src={entry.image} alt={entry.title} />
      </figure>
      <div>
        <p className="post-content">{entry.content}</p>
      </div>
    </div>
  );
};

export default Post;
