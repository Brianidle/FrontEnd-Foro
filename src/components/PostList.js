import React from 'react';

import PropTypes from 'prop-types';

import Post from "./Post";

const propTypes = {
  posts: PropTypes.array.isRequired
};

const PostList = ({posts}) => {
  return (
    <div>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  );
};

PostList.propTypes = propTypes;

export default PostList;
