import React from "react";
import NavigationBar from './NavigationBar';
import styled from "styled-components";

const Main=styled.main`
  background-color:#dae0e6;
  display: block;
  height:100%;
  padding-top:48px;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar/>
      <Main>{children}</Main>
    </div>
  );
};
export default Layout;
