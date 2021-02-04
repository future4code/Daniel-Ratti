import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../Img/LabeX-logo.png";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  goToHomePage,
  goToLogin,
  goToListTripsPage,
  goToCreateTripsPage,
} from "../Router/Coordinator";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 40px;
  background-color: #f2f2f2;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Nav = styled.ul``;

const AccountIcon = styled(AccountCircleIcon)`
  transform: scale(1.6);
  color: #00aaf0;
`;

const NavItem = styled.li`
  display: inline;
  cursor: pointer;
`;

const ImgLogo = styled.img`
  height: 90%;
  color: white;
  cursor: pointer;
`;

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    goToHomePage(history);
  };

  return (
    <HeaderContainer>
      <ImgLogo src={logo} onClick={() => goToHomePage(history)} />
      {!token && (
        <Nav>
          <NavItem>
            <AccountIcon onClick={() => goToLogin(history)} />
          </NavItem>
        </Nav>
      )}
      {token && (
        <Nav>
          <NavItem>
            <button onClick={() => goToListTripsPage(history)}>
              Gerenciar Viagens
            </button>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <button onClick={logOut}>
              <ExitToAppIcon />
            </button>
          </NavItem>
        </Nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
