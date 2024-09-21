import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from '../store/Post-list-store'; // Correct import

const PostList = () => {
  const { postList } = useContext(PostListData); 
  return (
    <>
      {postList.map((post) => (
        <Post/>
      ))}
    </>
  );
};

export default PostList;
