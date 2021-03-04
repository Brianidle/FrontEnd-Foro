import React, { useEffect } from "react";
import styled from "styled-components";

import GeneralForm from "../components/GeneralForm";

const Layout = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const SignUp = () => {
  useEffect(() => {
    document.title = "SignUp Page";
  });

  return (
    <Layout>
      <GeneralForm buttonText="Sign Up" formType="signup" />
    </Layout>
  );
};

export default SignUp;
