import React, { useState } from "react";

import PostFormView from "../components/PostFormView";

import { EDIT_POST } from "../gql/mutation";
import { useMutation } from "@apollo/client";
import {withRouter} from "react-router-dom";

const EditPost = (props) => {
  let postString = sessionStorage.getItem("post");
  let post=JSON.parse(postString);
  
  const [editPost] = useMutation(EDIT_POST,
    {variables:{idPost:post.id},
    onCompleted:(data)=>{
      if(data.editPost==="EDIT_SUCESS"){
        props.history.push("/");
        //activate the "Post edited successfully" when the notification messages are implemented.
      }
    }});

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

export default withRouter(EditPost);
