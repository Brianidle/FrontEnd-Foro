import React,{useState} from "react";
import { render, fireEvent } from "@testing-library/react";
import PostFormView from "../components/PostFormView";

  var useStateValue;

  const setValue=(obj)=>{
    useStateValue=obj;
  }

  const onChange = (event) => {
    setValue({ ...useStateValue, [event.target.name]: event.target.value });
  };

  const newPost = ({variables}) => {
    console.log(
      "new post request sent with the next information: " +
        "title: " +
        variables.title +
        " | content: " +
        variables.content +
        " | urlImage: " +
        variables.urlImage
    );
  };

  const renderPostFormComponent=(onClick)=>{
    return render(
      <PostFormView
        buttonText="Create Post"
        onChange={onChange}
        inputValues={useStateValue}
        onClick={onClick}
      />
    );
  }

test("Input values changues", () => {
  useStateValue={};

  const { queryByTestId } = renderPostFormComponent(() => {
    if((useStateValue.urlImage || useStateValue.content) && useStateValue.title){
      newPost({ variables: { ...useStateValue } });
    }else{
      //activar una notificación para mostrar que notifique que se necesita un content o un urlImage
    }
  });

  let inputTitle= queryByTestId("inputTitle");
  let inputContent=queryByTestId("inputContent");
  let inputUrlImage=queryByTestId("inputUrlImage");

  fireEvent.change(inputTitle,{target:{value:"New way to test found. no clickbait"}});
  fireEvent.change(inputContent,{target:{value:"New way to test-Content"}});
  fireEvent.change(inputUrlImage,{target:{value:"Post Url Image"}});
  
  expect(useStateValue.title).toBe("New way to test found. no clickbait");
  expect(useStateValue.content).toBe("New way to test-Content");
  expect(useStateValue.urlImage).toBe("Post Url Image");
});

test("Send Request when the title input has a value and the content input or the imageUrl input", ()=>{
  useStateValue={};
  
  const mockNewPost = jest.fn(newPost);

  const { queryByTestId } = renderPostFormComponent(() => {
    if((useStateValue.urlImage || useStateValue.content) && useStateValue.title){
      mockNewPost({ variables: { ...useStateValue } });
    }else{
      //activar una notificación para mostrar que notifique que se necesita un content o un urlImage
    }
  });

  let inputTitle= queryByTestId("inputTitle");
  let inputContent=queryByTestId("inputContent");
  
  let form=queryByTestId("form");

  fireEvent.change(inputTitle,{target:{value:"title"}});
  fireEvent.change(inputContent,{target:{value:"content"}});
  
  fireEvent.submit(form);

  expect(mockNewPost).toHaveBeenCalledTimes(1);

})

test("Dont Send Request when the title input has a value but the content input and the imageUrl input dont", ()=>{
  useStateValue={};
  
  const mockNewPost = jest.fn(newPost);

  const { queryByTestId } = renderPostFormComponent(() => {
    if((useStateValue.urlImage || useStateValue.content) && useStateValue.title){
      mockNewPost({ variables: { ...useStateValue } });
    }else{
      //activar una notificación para mostrar que notifique que se necesita un content o un urlImage
    }
  });

  let inputTitle= queryByTestId("inputTitle");
  
  let form=queryByTestId("form");

  fireEvent.change(inputTitle,{target:{value:"title"}});
  
  fireEvent.submit(form);

  expect(mockNewPost).toHaveBeenCalledTimes(0);

})

test("Dont Send Request when the title input has not a value", ()=>{
  useStateValue={};
  
  const mockNewPost = jest.fn(newPost);

  const { queryByTestId } = renderPostFormComponent(() => {
    if((useStateValue.urlImage || useStateValue.content) && useStateValue.title){
      mockNewPost({ variables: { ...useStateValue } });
    }else{
      //activar una notificación para mostrar que notifique que se necesita un content o un urlImage
    }
  });

  let inputContent=queryByTestId("inputContent");
  let inputUrlImage=queryByTestId("inputUrlImage");
  
  let form=queryByTestId("form");

  fireEvent.change(inputContent,{target:{value:"post content"}});
  fireEvent.change(inputUrlImage,{target:{value:"Post Url Image"}});
  
  fireEvent.submit(form);

  expect(mockNewPost).toHaveBeenCalledTimes(0);

})

