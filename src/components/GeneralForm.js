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

const GeneralForm = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <Input
          required
          id="username"
          name="username"
          placeholder="username"
        ></Input>
      </div>

      {props.formType === "signup" && (
        <div>
          <label htmlFor="email">Email: </label>
          <Input
            required
            id="email"
            name="email"
            type="email"
            placeholder="email"
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
        ></Input>
      </div>

      <Button type="submit">{props.buttonText}</Button>
    </form>
  );
};

export default GeneralForm;
