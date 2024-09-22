import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";

const Post = ({ post }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reaction}
            <span className="visually-hidden">unread messages</span>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">
          {post.body}
        </p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary">{tag}</span>
        ))}
        <div className="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    reaction: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Post;