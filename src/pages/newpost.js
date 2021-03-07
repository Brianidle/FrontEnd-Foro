import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { NEW_POST } from "../gql/mutation";

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
  const [values, setValue] = useState();

  const onChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };
  const idAuthor = "603aa5f0d7955a1cf836cb4a";

  useEffect(() => {
    document.title = "New Post";
  });

  const [newPost, { loading }] = useMutation(NEW_POST, {
    variables: {
      idAuthor,
    }
  });
  
  if (loading) return <p>Loading...</p>;

  return (
    <Layout>
      <div>
        <label htmlFor="title">Title: </label>
        <Input required id="title" name="title" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <Input required id="content" name="content" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="urlImage">Image (Optional): </label>
        <Input id="urlImage" name="urlImage" onChange={onChange} />
      </div>
      <Button
        onClick={() => {
          newPost({ variables: { ...values } });
        }}
      >
        Create Post
      </Button>
    </Layout>
  );
};

export default NewPost;
