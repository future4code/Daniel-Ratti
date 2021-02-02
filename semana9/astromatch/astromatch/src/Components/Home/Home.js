import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ClearIcon from "@material-ui/icons/Clear";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;

const Photo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  > img {
    height: 50vh;
    max-width: 100%;
    padding: 10px;
  }
`;

const Infos = styled.div`
  width: 80%;
  text-align: justify;
  margin: 0 20px;
  > h2 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ButtonLike = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 1px solid #762D93;
  outline: none;
  color:#762D93;
  :hover {
    cursor: pointer;
    animation: jelly 0.5s;
  }
  @keyframes jelly {
    0%,
    100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;
const ButtonDeslike = styled.button`
   border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 1px solid #48A498;
  outline: none;
  color:#48A498;
  :hover {
    cursor: pointer;
    animation: jelly 0.5s;
  }
  @keyframes jelly {
    0%,
    100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ratti/person"
      )
      .then((response) => {
        setProfiles(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const choosePerson = () => {
    const body = {
      id: profiles.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ratti/choose-person",
        body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const like = () => {
    getProfile();
    choosePerson();
  };

  return (
    <div>
      <Profile>
        <Photo>
          <img src={profiles.photo} />
        </Photo>
        <Infos>
          <h2>
            {profiles.name}, {profiles.age}
          </h2>
          <p>{profiles.bio}</p>
        </Infos>
      </Profile>
      <Buttons>
        <ButtonDeslike onClick={() => getProfile()}>
          <ClearIcon />
        </ButtonDeslike>
        <ButtonLike onClick={() => like()}>
          <FavoriteBorderIcon />
        </ButtonLike>
      </Buttons>
    </div>
  );
};

export default Home;
