import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import MainScreen from "../Home/Home";
import Match from "../Matches/Matches";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import logo512 from "../../img/logo512.png"

const ButtonDelete = styled.button`
  border: none;
  outline: none;
  background-color: white;
  width: 50px;
  height: 40px;
  cursor: pointer;
  color:#48A498;
`;

const ButtonMatches = styled.button`
  border: none;
  outline: none;
  background-color: white;
  width: 50px;
  height: 40px;
  cursor: pointer;
  color:#762D93;
`;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  height: 85vh;
  width: 20vw;
  padding: 20px;
  border-radius:25px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:solid 2px #762D93;
`;

const Card = () => {
    const [profiles,] = useState([]);
    const [currentPage, setCurrentPage] = useState(true);  
  
    const changePage = () => {
      setCurrentPage(!currentPage)
    }  
  
    const clearMatches = () => {
      const body = {id: profiles.id}
      axios.put ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ratti/clear", body)
        .then ((response) => {
          console.log(response)
          alert("Matches apagados!")
        })
        .catch ((error) => {
            console.log(error)
        })
    }

  return (
    <AppContainer>
      <CardContainer>
        <Header>
          <ButtonDelete onClick={() => clearMatches()}>
            <DeleteForeverIcon />
          </ButtonDelete>
          <img src={logo512} />
          <ButtonMatches onClick={changePage}>
            <FavoriteIcon />
          </ButtonMatches>
        </Header>
        {currentPage ? <MainScreen /> : <Match />}
      </CardContainer>
    </AppContainer>
  );
};

export default Card;
