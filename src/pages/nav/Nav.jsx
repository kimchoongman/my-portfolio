import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <div>Choongman's PortFolio</div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 30px;
  position: fixed;
  display: flex;
  border: 1px solid black;
`;

export default Nav;
