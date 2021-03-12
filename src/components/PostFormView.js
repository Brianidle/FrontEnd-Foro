import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  buttonText: PropTypes.object.isRequired,
  requestTrigger:PropTypes.func.isRequired,
  inputValues:PropTypes.array.isRequired,
  onChange:PropTypes.func.isRequired
};

const Layout = styled.div`
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
  requestTrigger,
  inputValues,
  onChange,
  titleInputValue,
  contentInputValue,
  urlImageInputValue,
}) => {
  return (
    <Layout>
      <div>
        <label htmlFor="title">Title: </label>
        <Input
          value={titleInputValue}
          required
          id="title"
          name="title"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <Input
          value={contentInputValue}
          id="content"
          name="content"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="urlImage">Image (Optional): </label>
        <Input
          value={urlImageInputValue}
          id="urlImage"
          name="urlImage"
          onChange={onChange}
        />
      </div>
      <Button
        onClick={() => {
          requestTrigger({ variables: { ...inputValues } });
        }}
      >
        {buttonText}
      </Button>
    </Layout>
  );
};

PostFormView.propTypes = propTypes;

export default PostFormView;
