import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../../Stor/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {post.tags.map((tag, index) => (
                <span className="badge bg-primary me-1" key={index}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">Reactions: {post.reactions}</span>
              <button className="btn btn-danger" onClick={handleDelete}>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
