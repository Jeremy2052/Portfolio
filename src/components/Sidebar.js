import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

function Sidebar({ navToggle, setNav }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation navToggle={navToggle} toggleSide={setNav} />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  background-color: var(--Sidebar-dark-color);
  background: linear-gradient(#828788, #293d42);
  position: fixed;
  -webkit-box-shadow: 17px 3px 22px -6px rgba(0, 0, 0, 0.8);
  box-shadow: 17px 3px 22px -6px rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease-in-out;

  &.nav-toggle {
    @media screen and (max-width: 1200px) {
      transform: translateX(-100%);
      /* box-shadow: none; */
    }
  }
`;

export default Sidebar;
