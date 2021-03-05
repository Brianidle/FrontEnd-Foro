import React, { useEffect } from "react";
import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 150px;
  font-size: 18px;
`;

const NewPost = () => {
  useEffect(() => {
    document.title = "New Post";
  });

  return (
    <Layout>
      <form>
        <div>
          <label htmlFor="title">Title: </label>
          <Input required id="title" name="title" />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <Input required id="content" name="content" />
        </div>
        <div>
          <label htmlFor="image">Image (Optional): </label>
          <Input id="image" name="image" />
        </div>
        <Button type="submit">Create Post</Button>
      </form>
    </Layout>
  );
};

export default NewPost;
