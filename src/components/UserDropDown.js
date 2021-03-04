import React from "react";
import "../UserDropDown.css";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FiberNewIcon from "@material-ui/icons/FiberNew";

const DropDownOptionButton = styled.a`
  display: flex;
  cursor: pointer;
`;

const TextButton = styled.div`
  padding-left: 12px;
`;

const UserDropDown = (props) => {
  return (
    <div class="dropdown">
      <button class="dropbtn">
        <PersonIcon />
        <ArrowDropDownIcon />
      </button>
      <div class="dropdown-content">
        <DropDownOptionButton onClick={() => {
            props.history.push("/myposts");
          }}>
          <LibraryBooksIcon />
          <TextButton>My Posts</TextButton>
        </DropDownOptionButton>
        <DropDownOptionButton onClick={() => {
            props.history.push("/signin");
          }}>
          <VpnKeyIcon />
          <TextButton>LogIn</TextButton>
        </DropDownOptionButton>
        <DropDownOptionButton onClick={() => {
            props.history.push("/signup");
          }}>
          <FiberNewIcon />
          <TextButton>SignUp</TextButton>
        </DropDownOptionButton>
      </div>
    </div>
  );
};

export default withRouter(UserDropDown);
