import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const MatchesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
  border-bottom:1px solid #762D93;
  > img {
    width: 50px;
    height:50px;
    border: none;
    border-radius: 50%;
    margin-right: 15px;
  }
`

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect (() => {
    getMatches()
  }, []);

  const getMatches = () => {
    axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ratti/matches")
    .then((response) => {
        setMatches ((response).data.matches)
    })
    .catch ((error) => {
        console.log (error)
    }) 
  }


  return (
    <div>
      {matches.map((match) => {
        return (
          <MatchesContainer key={match.id}>
              <img src={match.photo} />
              <p>{match.name}</p>
          </MatchesContainer>
        )
      } 
    )}
    </div>
  );
}

export default Matches;