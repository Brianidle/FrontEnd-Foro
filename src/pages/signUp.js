import React, { useEffect } from "react";
import styled from "styled-components";

import GeneralForm from "../components/GeneralForm";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../gql/mutation";

const Layout = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const SignUp = (props) => {
  useEffect(() => {
    document.title = "SignUp Page";
  });

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      props.history.push("/");
    },
  });

  return (
    <Layout>
      <GeneralForm
        buttonText="Sign Up"
        formType="signup"
        requestTrigger={signUp}
      />
    </Layout>
  );
};

export default SignUp;
