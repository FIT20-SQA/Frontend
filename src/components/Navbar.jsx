import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
    color: white;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Movie Mate</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
