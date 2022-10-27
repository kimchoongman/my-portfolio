import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <div className='title'>Choongman's Portfolio</div>
      <ul className='nav-bar'>
        <li className='category'>Intro</li>
        <li className='category'>Info</li>
        <li className='category'>About</li>
        <li className='category'>Project</li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  padding: 30px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
  font-size: 1rem;
  font-family: "Merriweather Sans", sans-serif;

  .nav-bar {
    width: 25%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default Nav;
