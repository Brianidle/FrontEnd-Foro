import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 300px;
  height: 30px;
`;

const Button = styled.button`
  width: 150px;
  font-size:18px;
`;

const GeneralForm = (props) => {
  return (
    <form>
      <div >
        <label htmlFor="username">Username: </label>
        <Input
          id="username"
          style={{ marginBottom: 15 }}
          placeholder="username"
        ></Input>
      </div>

      {props.formType==="signup" && <div>
        <label htmlFor="email">Email: </label>
        <Input
          id="email"
          style={{ marginBottom: 15 }}
          type="email"
          placeholder="email"
        ></Input>
      </div>}
      
      <div>
        <label htmlFor="password">Password: </label>
        <Input
          id="password"
          style={{ marginBottom: 15 }}
          type="password"
          placeholder="password"
        ></Input>
      </div>
      
      <Button>{props.buttonText}</Button>
    </form>
  );
};

export default GeneralForm;
