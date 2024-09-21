import { useReducer, createContext } from "react";
import PostList from "../components/PostList";


const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);


  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

// Default posts
const DEFAULT_POST_LIST = [
  {
    id: "001",
    title: "Going to Lucknow",
    body: "Hi, I will go to Lucknow on Sunday",
    reaction: "4",
    userID: "1",
    tags: ["going", "back to college"],
  },
  {
    id: "002",
    title: "Back from College",
    body: "Just returned from college after a long day!",
    reaction: "7",
    userID: "2",
    tags: ["returning", "college"],
  },
];

export default PostList;