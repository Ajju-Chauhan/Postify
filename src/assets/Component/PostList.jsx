import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

import { PostList as PostListData } from "../../Stor/post-list-store";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);
   // Empty dependencies array to run the effect only once

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Welcome />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
