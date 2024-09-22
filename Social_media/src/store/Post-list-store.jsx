import { useReducer, createContext } from "react";
import PropTypes from 'prop-types';

const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (post) => {
    dispatchPostList({ type: 'ADD_POST', payload: post });
  };

  const deletePost = (id) => {
    dispatchPostList({ type: 'DELETE_POST', payload: id });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
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

export { PostListProvider, PostListContext };