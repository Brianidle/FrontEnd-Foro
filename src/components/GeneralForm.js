import React, { useState } from "react";
import GeneralFormView from "./GeneralFormView";

const GeneralForm = ({ buttonText, requestTrigger, errorCode, formType }) => {
  const [inputValues, setValue] = useState();

  const onChangue = (event) => {
    setValue({ ...inputValues, [event.target.name]: event.target.value });
  };

  return (
    <GeneralFormView
      buttonText={buttonText}
      requestTrigger={requestTrigger}
      errorCode={errorCode}
      onChangue={onChangue}
      formType={formType}
      inputValues={inputValues}
    ></GeneralFormView>
  );
};

export default GeneralForm;
