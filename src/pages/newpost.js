import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { NEW_POST } from "../gql/mutation";

import PostFormView from "../components/PostFormView";
import {connect} from "react-redux";

const NewPost = (props) => {
  const [values, setValue] = useState([]);

  const onChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    document.title = "New Post";
  });
  
  const [newPost, { loading }] = useMutation(NEW_POST);
  
  if (loading) return <p>Loading...</p>;

  return (
    <PostFormView buttonText="Create Post" requestTrigger={newPost} onChange={onChange} inputValues={values}></PostFormView>
  );
};

const mapStateToProps=(state)=>{
  return {
    idAuthor:state.tokenState
  }
}

export default connect(mapStateToProps)(NewPost);
