import React, { useEffect } from "react";
import styled from "styled-components";

import GeneralForm from "../components/GeneralForm";
import { SIGN_IN } from "../gql/query";
import { useLazyQuery } from "@apollo/client";

const Layout = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const SignIn = () => {
  const [signIn, { loading, data }] = useLazyQuery(SIGN_IN, {
    onCompleted: () => {
      //guardar key en el estado redux
      console.log("DATA SIGNIN");
      console.log(data);
    },
  });

  useEffect(() => {
    document.title = "SignIn Page";
  });

  if (loading) return <p>Loading...</p>;

  return (
    <Layout>
      <GeneralForm buttonText="Sign In" action={signIn} />
    </Layout>
  );
};

export default SignIn;
