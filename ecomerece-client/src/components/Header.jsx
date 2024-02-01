import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
    return (
        <MainHeader>
                <div className="divo">
                <div><FaCartPlus /></div> 
                 <p>Ankush Kart</p>
                </div>
            <NavBar />
        </MainHeader>
    );
};
;
const MainHeader = styled.div`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .divo{
    font-size:2.5rem;
    display:flex;
    gap:1rem;
    &p{
        font-size:1.2rem;
    }
  }
`
export default Header;