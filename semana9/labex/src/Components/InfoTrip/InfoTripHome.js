import React from "react";
import { useHistory } from "react-router-dom";
import { useTrips } from "../../Hooks/TripsInfos";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  goToApplicationFormPage,
  goToTripDetailsPage,
} from "../Router/Coordinator";
import {
  DivButton,
  ButtonDetails,
  DivTrips,
  CardTrip,
  ImageTrip,
  Image,
  Description,
  Title,
} from "./InfoTripsStyled";
import { Button } from "@material-ui/core";


const ContentTrips = () => {
  const history = useHistory();
  const list = useTrips();
  useProtectedPage();
  const token = localStorage.getItem("token");

  return (
    <div>
      {!token && (
        <div>
          <Title>Nossas Viagens</Title>
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
                        style={{
                          color: "black",
                        }}
                        onClick={() => goToTripDetailsPage(history, trip.id)}
                      >
                        More Info
                      </ButtonDetails>
                      <Button
                        onClick={() => goToApplicationFormPage(history)}
                        variant="contained"
                        style={{
                          backgroundColor: "#00aaf0",
                          color: "white",
                        }}
                      >
                        Aplicar
                      </Button>
                    </DivButton>
                  </Description>
                </CardTrip>
              );
            })}
          </DivTrips>
        </div>
      )}
      {token && (
        <div>
          <Title>Nossas Viagens</Title>
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
                        style={{
                          color: "black",
                        }}
                        onClick={() => goToTripDetailsPage(history, trip.id)}
                      >
                        More Info
                      </ButtonDetails>
                      <Button
                        onClick={() => goToApplicationFormPage(history)}
                        variant="contained"
                        style={{
                          backgroundColor: "#00aaf0",
                          color: "white",
                        }}
                      >
                        Aplicar
                      </Button>
                    </DivButton>
                  </Description>
                </CardTrip>
              );
            })}
          </DivTrips>
        </div>
      )}
    </div>
  );
};

export default ContentTrips;
