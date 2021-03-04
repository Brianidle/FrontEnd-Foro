import React, { useEffect } from "react";
import styled from "styled-components";

import GeneralForm from "../components/GeneralForm";

const Layout = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const SignIn = () => {
  useEffect(() => {
    document.title = "SignIn Page";
  });

  return (
    <Layout>
      <GeneralForm buttonText="Sign In" />
    </Layout>
  );
};

export default SignIn;
