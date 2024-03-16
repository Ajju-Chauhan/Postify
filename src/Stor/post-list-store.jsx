import { createContext, useReducer,useEffect,useState } from "react";

export const PostList = createContext({
  postList: [],
  fetching:false,
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});
const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  }else if(action.type === "ADD_INITIAL_POST"){
    newPostList = action.payload.posts;

  }
  else if(action.type=== "ADD_POST"){
    newPostList = [action.payload,...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    []
  );
  const [fetching, setFetching] = useState(false);

  
  const addPost = (post) => {
    dispatchPostList({
        type: "ADD_POST",
        payload: post,
      });
  };
  const addInitialPost = (posts) => {
    dispatchPostList({
        type: "ADD_INITIAL_POST",
        payload: {
            posts,  
        },
      });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });
      return ()=>{
        controller.abort();
      }
  }, []);
  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;