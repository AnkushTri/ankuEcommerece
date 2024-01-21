import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="./images/hero.jpg" alt="my logo img" width={90} height={60} style={{borderRadius:"50%"}}/>
            </NavLink>
            <NavBar />
        </MainHeader>
    );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export default Header;