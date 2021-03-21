import React, { useEffect } from "react";

import PostFromContainer from "../components/PostFormContainer";

const NewPost = () => {
  useEffect(() => {
    document.title = "New Post";
  });

  return <PostFromContainer />;
};

export default NewPost;
