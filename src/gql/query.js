import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
    }
  }
`;

const GET_AUTHOR_POSTS = gql`
  query AuthorPosts($idAuthor: ID!) {
    authorPosts(idAuthor: $idAuthor) {
      id
      title
      content
    }
  }
`;

const SIGN_IN = gql`
  query SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password)
  }
`;

export { GET_POSTS, GET_AUTHOR_POSTS, SIGN_IN };
