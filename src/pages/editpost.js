import React, { useState } from "react";

import PostFormView from "../components/PostFormView";

import { EDIT_POST } from "../gql/mutation";
import { useMutation } from "@apollo/client";

const EditPost = () => {
  let postString = sessionStorage.getItem("post");
  let post=JSON.parse(postString);
  
  const [editPost, { data }] = useMutation(EDIT_POST,{variables:{idPost:post.id}});

  const [inputValues, setValues] = useState([]);

  const onChangue = (event) => {
    setValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };
  
  return (
    <PostFormView
      buttonText="Edit Post"
      inputValues={inputValues}
      onChange={onChangue}
      requestTrigger={editPost}
      titleInputValue={post.title}
      contentInputValue={post.content}
      urlImageInputValue={post.urlImage}
    ></PostFormView>
  );
};

export default EditPost;
