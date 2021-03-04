import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "./home";
import SignIn from "./signIn";
import SignUp from "./signUp";
import MyPosts from "./myposts";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/myposts" component={MyPosts} />
      </Layout>
    </Router>
  );
};

export default Pages;
