import React, { useEffect } from "react";
import styled from "styled-components";

import PostList from "../components/PostList";

const HomeLayout = styled.div`
  padding-top: 25px;
  padding-right: 25px;
  padding-left: 25px;
  display: flex;
  justify-content: center;
`;

const AsideContainer = styled.aside`
  margin-left: 30px;
  border-radius: 5px;
`;

const PostsContainer = styled.main``;

const AboutLinksContainer = styled.div`
  width: 310px;
  height: 400px;
  border-radius: 5px;
  background-color: white;
`;

const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  });

  return (
    <HomeLayout>
      <PostsContainer>
        <PostList />
      </PostsContainer>
      <AsideContainer>
        <AboutLinksContainer>ABOUT PANEL</AboutLinksContainer>
      </AsideContainer>
    </HomeLayout>
  );
};

export default Home;
