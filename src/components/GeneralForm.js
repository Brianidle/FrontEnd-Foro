import React, { useState } from "react";
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

  const [values, setValue] = useState();

  const onChangue = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
    
    console.log(values);
  };
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        //llamo a la función action que le pasan a NoteForm por parametro y le agrego una variable values.
        props.action({
          variables: {
            ...values
          }
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

      {props.formType === "signup" && (
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

      <Button type="submit">{props.buttonText}</Button>
    </form>
  );
};

export default GeneralForm;
