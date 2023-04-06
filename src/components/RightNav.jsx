import React from "react";
import styled from "styled-components";

const Ul = styled.nav`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  li {
    padding: 20px 15px;
    color: white;
  }

  a {
    color: white;
  }

  a:hover {
    color: #333;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <nav>
      <Ul open={open}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Movie">Movie</a>
        </li>
        <li>
          <a href="/FoodDrink">Food & Drink</a>
        </li>
        <li>
          <a href="/Staff">Staff</a>
        </li>
        <li>
          <a href="/Staff">
            <div className="avatar"></div>
          </a>
        </li>
      </Ul>
    </nav>
  );
};

export default RightNav;
