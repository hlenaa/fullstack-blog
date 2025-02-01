const Post = ({ entry, handleUpdateEntries }) => {
  return (
    <div>
      <p>{entry.date}</p>
      <h2>{entry.title}</h2>
      <figure>
        <img src={entry.image} alt={entry.title} />
      </figure>
      <div>
        <p>{entry.content}</p>
      </div>
    </div>
  );
};

export default Post;
