import React from "react";
import { useHistory } from "react-router-dom";
import { useTrips } from "../../Hooks/TripsInfos";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { goToTripDetailsPage } from "../Router/Coordinator";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import axios from "axios";

const DivButton = styled.div`
  display: flex;
  margin-left: 50%;
  margin-bottom: 10px;
`;

const ButtonDetails = styled.button`
  border: none;
  color: #00aaf0;
  outline: none;
  background-color: white;
`;

const DivTrips = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(${(props) => props.lines}, 1fr);
  gap: 50px;
  column-gap: 100px;
  justify-content: center;
  padding: 15px;
`;

const CardTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 1%;
`;

const ImageTrip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  border-radius: 1%;
  margin: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Description = styled.div`
  width: 100%;
  padding: 0 10px;
  text-align: left;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentTripsManage = () => {
  const history = useHistory();
  const list = useTrips();
  useProtectedPage();

  const deleteTrip = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ratti-epps/trips/${id}`
      )
      .then((res) => {
        alert("Viagem deletada, atualize a página.");
      })
      .catch((err) => {
        alert("Erro ao deletar!");
      });
  };

  return (
    <div>
      <Title>Lista de viagens</Title>
      <DivTrips lines={Math.ceil(list.length / 4)}>
        {list.map((trip) => {
          const urlImage = `https://picsum.photos/300/200`;
          return (
            <CardTrip key={trip.id}>
              <ImageTrip>
                <Image src={urlImage} />
              </ImageTrip>
              <Description>
                <h3>{trip.name}</h3>
                <p>{trip.description}</p>
                <p>
                  <strong>Planeta: </strong>
                  {trip.planet}
                </p>
                <p>
                  <strong>Duração: </strong>
                  {trip.durationInDays}
                </p>
                <p>
                  <strong>Data:</strong> {trip.date}
                </p>
                <DivButton>
                  <ButtonDetails
                    onClick={() => goToTripDetailsPage(history, trip.id)}
                  >
                    More Info
                  </ButtonDetails>
                  <Button
                    onClick={() => deleteTrip(trip.id)}
                    variant="contained"
                    color="secondary"
                  >
                    Deletar
                  </Button>
                </DivButton>
              </Description>
            </CardTrip>
          );
        })}
      </DivTrips>
    </div>
  );
};

export default ContentTripsManage;
