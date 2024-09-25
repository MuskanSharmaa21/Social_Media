import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from '../store/Post-list-store'; // Correct import
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList } = useContext(PostListContext); 
  const handleGetPostsClick=() =>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(console.log);
    setPostList(data.posts); 
  }
  return (
    <>
    {postList.length===0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;