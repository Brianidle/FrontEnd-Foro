import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { NEW_POST } from "../gql/mutation";

import PostFormView from "./PostFormView";
import { withRouter } from "react-router-dom";

const PostFormContainer = (props) => {
  const [values, setValue] = useState([]);

  const onChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  const [newPost] = useMutation(NEW_POST, {
    onCompleted: () => {
      props.history.push("/");
    },
  });

  return (
    <PostFormView
      buttonText="Create Post"
      requestTrigger={newPost}
      onChange={onChange}
      inputValues={values}
    ></PostFormView>
  );
};

export default withRouter(PostFormContainer);
