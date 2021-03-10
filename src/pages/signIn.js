import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GeneralForm from "../components/GeneralForm";
import { SIGN_IN } from "../gql/query";
import { useLazyQuery } from "@apollo/client";

const Layout = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const SignIn = (props) => {
  const [error, setError] = useState("");

  const [signIn, { data }] = useLazyQuery(SIGN_IN, {
    onCompleted: () => {
      if (data.signIn && data.signIn !== "UNSUCCESSFUL_SIGNIN") {
        localStorage.setItem("token", data.signIn);
        props.history.push("/");
      } else {
        setError(data.signIn);
      }
    },
  });

  useEffect(() => {
    document.title = "SignIn Page";
  });

  return (
    <Layout>
      <GeneralForm
        buttonText="Sign In"
        requestTrigger={signIn}
        errorCode={error}
      />
    </Layout>
  );
};

export default SignIn;
