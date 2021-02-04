import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header"
import { useTrips } from "../../Hooks/TripsInfos"
import styled from "styled-components";
import ContentTrips from "../InfoTrip/InfoTrip"



const ListTripsPage = () => {
  return (
    <div>
      <Header />
      <ContentTrips />
      </div>
  );
};

export default ListTripsPage;