import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import avatar from '../img/avatar.jpg'
import profile from "../img/profile2.jpg";

function Navigation({ navToggle, toggleSide }) {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={profile} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink onClick={() => toggleSide(true)} exact to="/" activeClassName="active-class">
            Home
          </NavLink>
        </li>
        {/* <li className="nav-item">
            <NavLink to='/about' activeClassName='active-class'>About</NavLink>
          </li> */}
        <li className="nav-item">
          <NavLink onClick={() => toggleSide(!navToggle)} to="/resume" activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={() => toggleSide(!navToggle)} to="/projects" activeClassName="active-class">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={() => toggleSide(!navToggle)} to="/contact" activeClassName="active-class">
            Contact
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 100%;

      object-fit: cover;
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    margin-top: 100px;

    .active-class {
      background-color: var(--primary-color);
    }

    li {
      display: block;
      margin: 10px;
      a {
        display: block;
        padding: 10px;
        position: relative;

        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.3s cubic-bezier(0.47, 0.82, 0.71, 0.7);
          opacity: 0.2;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Navigation;
