import { gql } from "@apollo/client";

const SIGN_UP = gql`
  mutation SignUp($username:String!, $email:String!, $password:String!) {
        signUp (username:$username, email:$email, password:$password)
    }
`;

const NEW_POST = gql`
  mutation newPost(
    $idAuthor: String!
    $title: String!
    $content: String
    $urlImage: String
  ) {
    newPost(
      idAuthor: $idAuthor
      title: $title
      content: $content
      urlImage: $urlImage
    ) {
      author
      title
      content
      urlImage
    }
  }
`;

export { SIGN_UP, NEW_POST };
