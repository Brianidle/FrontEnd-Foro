import { gql } from "@apollo/client";

const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

const NEW_POST = gql`
  mutation newPost(
    $title: String!
    $content: String
    $urlImage: String
  ) {
    newPost(
      title: $title
      content: $content
      urlImage: $urlImage
    ) {
      title
      content
      urlImage
    }
  }
`;

const EDIT_POST = gql`
  mutation EditPost(
    $idPost: ID!
    $newTitle: String
    $newContent: String
    $newUrlImage: String
  ) {
    editPost(
      idPost: $idPost
      newTitle: $newTitle
      newContent: $newContent
      newUrlImage: $newUrlImage
    )
  }
`;

export { SIGN_UP, NEW_POST, EDIT_POST };
