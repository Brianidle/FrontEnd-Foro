import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GeneralForm from "../components/GeneralForm";
import { SIGN_IN } from "../gql/query";
import { useLazyQuery } from "@apollo/client";

import { connect } from "react-redux";
import {doChangueToken} from '../actions/actionCreators';

const Layout = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const SignIn = (props) => {
  const [error, setError] = useState("");

  const [signIn, { data }] = useLazyQuery(SIGN_IN, {
    onCompleted: () => {
      
      let token=data.signIn;
      if (token && token !== "UNSUCCESSFUL_SIGNIN") {

        localStorage.setItem("token", token);
        props.changueTokenState(token);
        props.history.push("/");
      } else {
        setError(token);
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

function mapDispatchToProps(dispatch) {
  return {
    changueTokenState: (token) => dispatch(doChangueToken(token))
  };
}

export default connect(null,mapDispatchToProps)(SignIn);
