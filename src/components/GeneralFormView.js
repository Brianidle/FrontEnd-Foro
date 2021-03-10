import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 150px;
  font-size: 18px;
`;

const GeneralFormView = ({
  requestTrigger,
  onChangue,
  inputValues,
  formType,
  buttonText,
  errorCode,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        requestTrigger({
          variables: {
            ...inputValues,
          },
        });
      }}
    >
      <div>
        <label htmlFor="username">Username: </label>
        <Input
          required
          id="username"
          name="username"
          placeholder="username"
          onChange={onChangue}
        ></Input>
      </div>

      {formType === "signup" && (
        <div>
          <label htmlFor="email">Email: </label>
          <Input
            required
            id="email"
            name="email"
            type="email"
            placeholder="email"
            onChange={onChangue}
          ></Input>
        </div>
      )}

      <div>
        <label htmlFor="password">Password: </label>
        <Input
          required
          id="password"
          name="password"
          type="password"
          placeholder="password"
          onChange={onChangue}
        ></Input>
      </div>

      <Button type="submit">{buttonText}</Button>

      {errorCode === "UNSUCCESSFUL_SIGNIN" && (
        <div>
          <br></br>
          <strong>Password or Username invalid</strong>
        </div>
      )}
    </form>
  );
};

export default GeneralFormView;
