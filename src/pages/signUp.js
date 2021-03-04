import React, { useEffect } from "react";
import GeneralForm from '../components/GeneralForm';

const SignUp = () => {
  useEffect(() => {
    document.title = "SignUp Page";
  });

  return (
    <div style={{ marginTop: 15, height: "100vh", textAlign: "center" }}>
      <GeneralForm buttonText="Sign Up" formType="signup" />
    </div>
  );
};

export default SignUp;
