import { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store"; // Use the correct context

const CreatePost = () => {
  const { addPost } = useContext(PostListContext); // Access context, not provider

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";


    
    addPost({ userId, postTitle, postBody, reactions, tags });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userID" className="form-label">User ID</label>
        <input type="text" className="form-control" id="userId" ref={userIdElement} placeholder="Your User ID" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="title" ref={postTitleElement} placeholder="How are you feeling today" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Body</label>
        <input type="text" className="form-control" id="body" ref={postBodyElement} placeholder="Tell us more about it" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="number" className="form-control" id="reactions" ref={reactionsElement} placeholder="Number of reactions" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" id="tags" ref={tagsElement} placeholder="Enter tags separated by spaces" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreatePost;
