import React, { useEffect } from "react";
import styled from "styled-components";

import PostList from "../components/PostList";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const MyPosts = () => {
  useEffect(() => {
    document.title = "My Posts Page";
  });

  return (
    <Layout>
      <PostList />
    </Layout>
  );
};

export default MyPosts;
