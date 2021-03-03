import React from "react";
import Header from '../Header/Header'
import styled from 'styled-components'
import ContentTrips from "../InfoTrip/InfoTripHome"

const HomeContainer = styled.div`
`
const ContainerDeslogado = styled.div`
`
const ContainerLogado = styled.div`
`




const Home = () => {
  const token = localStorage.getItem("token");
  
  return (
    <HomeContainer>
      {!token && (
        <ContainerDeslogado>
        <Header />
        <ContentTrips />
        </ContainerDeslogado>
      )}
      {token && (
        <ContainerLogado>
        <Header />
         <ContentTrips />
         </ContainerLogado>
      )}
    </HomeContainer>
  );
};

export default Home;


