import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired,
  inputValues:PropTypes.any.isRequired,
  onChange:PropTypes.func.isRequired
};

const Form = styled.form`
  height: 100vh;
  text-align: center;
  margin-top: 25px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 150px;
  font-size: 18px;
`;

const PostFormView = ({
  buttonText,
  onClick,
  inputValues,
  onChange,
  titleInputValue,
  contentInputValue,
  urlImageInputValue,
}) => {
  return (
    <Form onSubmit={onClick} data-testid="form">
      <div>
        <label htmlFor="title">Title: </label>
        <Input
          value={inputValues.title?? titleInputValue}
          required
          id="title"
          name="title"
          onChange={onChange}

          data-testid="inputTitle"
        />
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <Input
          value={inputValues.content?? contentInputValue}
          id="content"
          name="content"
          onChange={onChange}

          data-testid="inputContent"
        />
      </div>
      <div>
        <label htmlFor="urlImage">Image (Optional): </label>
        <Input
          value={inputValues.urlImage?? urlImageInputValue}
          id="urlImage"
          name="urlImage"
          onChange={onChange}

          data-testid="inputUrlImage"
        />
      </div>
      <Button
        type="submit"
      >
        {buttonText}
      </Button>
    </Form>
  );
};

PostFormView.propTypes = propTypes;

export default PostFormView;
