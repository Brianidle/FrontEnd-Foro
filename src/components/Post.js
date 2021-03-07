import React from 'react';

import PropTypes from 'prop-types';

import styled from "styled-components";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const propTypes = {
  post: PropTypes.object.isRequired
};

const PostPanel = styled.div`
  min-width: 640px;
  max-width: 640px;
  width: 640px;
  display: flex;
  flex-direction: row;
  background-color: white;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 14px;

  :hover {
    border-width: 0.2px;
    border-style: solid;
    border-color: black;
  }
`;

const UpDownPointsPanel = styled.div`
  width: 40px;
  background-color: #ff1a1a;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const PostInfoPanel = styled.div`
  width: 690px;
  padding-top: 8px;
`;

const TopOfThePostPanel = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  border-top-right-radius: 5px;
  margin-bottom: 8px;
  margin-right: 8px;
  margin-left: 8px;
`;

const ImagenSubForoContainer = styled.div`
  width: 30px;
  height: 100%;
`;

const UserAndSubForoNameContainer = styled.div`
  width: 500px;
  background-color: white;
  margin: auto 0;
`;

const PostContentContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const BottomOfThePostPanel = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  min-width: 100%;
  border-bottom-right-radius: 5px;
  margin-left: 8px;
  margin-top:4px;
`;

const SubForoName = styled.a`
  padding-left: 6px;
  text-decoration: none;
  font-weight: 600;
  color: black;

  :hover {
    text-decoration: underline;
  }
`;

const UserName = styled.a`
  text-decoration: none;
  color: #787c7e;

  :hover {
    text-decoration: underline;
  }
`;

const UserImage = styled.img`
  border-radius: 50%;
  height: 28px;
  width: 28px;
  margin: auto 0;
`;

const TitleContainer = styled.div`
  margin-left: 8px;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
`;

const ArrowsAndPointsContainer = styled.div`
  text-align: center;
  margin-top: 5px;
`;

const PointUpButton = styled.button`
  background: transparent;
  padding: 0;
  border:0;
  color:white;
  cursor:pointer;
  border-radius:20%;
  outline:none;

  :hover {
    background: white;
    color:orange;
  }
`;

const PointDownButton = styled.button`
  background: transparent;
  padding: 0;
  border:0;
  color: white;
  cursor:pointer;
  border-radius:20%;
  outline:none;
  
  :hover {
    background: white;
    color:orange;
  }
`;

const Post = ({post}) => {
  return (
    <PostPanel>
      <UpDownPointsPanel>
        <ArrowsAndPointsContainer>
          <PointUpButton>
            <KeyboardArrowUpIcon style={{ fontSize: 25 }} />
          </PointUpButton>
          <span style={{ fontWeight: 650, color:"white" }}>154</span>
          <PointDownButton>
            <KeyboardArrowDownIcon style={{ fontSize: 25 }} />
          </PointDownButton>
        </ArrowsAndPointsContainer>
      </UpDownPointsPanel>

      <PostInfoPanel>
        <TopOfThePostPanel>
          <ImagenSubForoContainer>
            <a href="https://www.google.com">
              <UserImage
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="userImage"
              />
            </a>
          </ImagenSubForoContainer>
          <UserAndSubForoNameContainer>
            <SubForoName href="https://www.youtube.com">f/tenis</SubForoName>
            <span style={{ color: "#787c7e" }}> . </span>
            <span style={{ color: "#787c7e" }}>Posted by </span>
            <UserName href="https://www.reddit.com">u/casnojk </UserName>
            <span style={{ color: "#787c7e" }}>14 hours ago</span>
          </UserAndSubForoNameContainer>
        </TopOfThePostPanel>

        <TitleContainer>
          <span>{post.title}</span>
        </TitleContainer>

        <PostContentContainer>
          {post.content}
        </PostContentContainer>

        <BottomOfThePostPanel>
          <ModeCommentIcon style={{ paddingTop: 5, fontSize: 21 }} />
          <strong style={{ paddingLeft: 5, paddingTop: 5 }}>46 Comments</strong>
        </BottomOfThePostPanel>
      </PostInfoPanel>
    </PostPanel>
  );
};

Post.propTypes = propTypes;

export default Post;
