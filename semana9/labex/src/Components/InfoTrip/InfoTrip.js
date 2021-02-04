import React from "react";
import { useHistory } from "react-router-dom";
import { useTrips } from "../../Hooks/TripsInfos";
import {useProtectedPage } from "../../Hooks/useProtectedPage"
import {
  goToApplicationFormPage,
  goToTripDetailsPage,
} from "../Router/Coordinator";

const ContentTrips = () => {
  const history = useHistory();
  const list = useTrips();
  useProtectedPage();

  return (
    <div>
      <h1>Lista de viagens</h1>
      <div>
        {list.map((trip) => {
          const urlImage = `https://picsum.photos/300/200`;
          return (
            <div key={trip.id}>
              <div>
                <img src={urlImage} />
              </div>
              <div>
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
              </div>
              <div>
              <button onClick={() => goToTripDetailsPage(history)}>
              More Info
            </button>
              <button onClick={() => goToApplicationFormPage(history)}>
              aplicar
            </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentTrips;
