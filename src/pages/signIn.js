import React, { useEffect } from "react";

import GeneralForm from "../components/GeneralForm";

const SignIn = () => {
  useEffect(() => {
    document.title = "SignIn Page";
  });

  return (
    <div style={{marginTop:15,height:"100vh",textAlign:"center"}}>
      <GeneralForm buttonText="Sign In" />
    </div>
  );
};

export default SignIn;
