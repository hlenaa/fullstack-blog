import { Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/PostD.css";

const Post = ({ postData }) => {
  return (
    <div className="post-container">
      <div className="post-header flex items-center justify-between relative">
        <p className="post-date flex-1 text-center">{postData.date}</p>
        <Link
          to={`/post/edit/${postData.id}`}
          className="edit-button text-gray-600"
          title="Edit Post"
        >
          <Pencil size={20} />
        </Link>
      </div>
      <h2 className="post-title">{postData.title}</h2>
      <figure>
        <img className="post-image" src={postData.image} alt={postData.title} />
      </figure>
      <div>
        <p className="post-content">{postData.content}</p>
      </div>
    </div>
  );
};

export default Post;
