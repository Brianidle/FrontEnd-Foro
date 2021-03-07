import React, { useEffect } from "react";
import styled from "styled-components";

import GeneralForm from "../components/GeneralForm";
import {useMutation} from "@apollo/client";
import {SIGN_UP} from '../gql/mutation';

const Layout = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const SignUp = () => {
  useEffect(() => {
    document.title = "SignUp Page";
  });

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: data => {
    }
  });

  return (
    <Layout>
      <GeneralForm buttonText="Sign Up" formType="signup" action={signUp}/>
    </Layout>
  );
};

export default SignUp;
