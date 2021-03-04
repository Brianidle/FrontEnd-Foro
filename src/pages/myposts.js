import React, { useEffect } from "react";

const MyPosts = () => {
  useEffect(() => {
    document.title = "My Posts Page";
  });

  return <div>My Posts Page</div>;
};

export default MyPosts;
