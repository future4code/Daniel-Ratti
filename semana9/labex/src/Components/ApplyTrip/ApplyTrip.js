import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import styled from "styled-components";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  MuiThemeProvider,
} from "@material-ui/core";
import { CountryList } from "./CountryList";
import { useForm } from "../../Hooks/useForm";
import { useTrips } from "../../Hooks/TripsInfos";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  margin-top: 40px;
  background-color: white;
  border-radius: 1%;
  width:31%;
`;

const Title = styled.h1`
margin-top: 50px;
`;

const ApplyForm = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 30vw;
  background-color: white;
  border-radius: 5px;
`;

const ApplicationFormPage = () => {
  const { form, changeState, clearInput } = useForm({
    name: "",
    age: "",
    tripValue: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const list = useTrips();

  const sendForm = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
      trip: form.tripValue,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ratti-epps/trips/${form.tripValue}/apply`,
        body
      )
      .then((res) => {
        alert(
          ` ${form.name} parabens! sua inscrição foi enviada agora é só esperar.`
        );
        clearInput();
      })
      .catch((err) => {
        alert("vish! alguma coisa deu errada tente novamente.");
      });
  };

  return (
    <div>
      <Header />
      <MainContainer>
        <Title variant="h3">Formulário de Inscrição</Title>
        <ApplyForm onSubmit={sendForm}>
          <TextField
            label="Nome"
            name="name"
            required
            variant="standard"
            value={form.name}
            onChange={changeState}
            inputProps={{
              pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}",
            }}
          />
          <TextField
            variant="standard"
            label="Idade"
            name="age"
            type="number"
            required
            value={form.age}
            onChange={changeState}
            inputProps={{ min: "18", step: "1" }}
          />
          <TextField
            multiline
            label="Por que você deseja ir?"
            name="applicationText"
            required
            variant="standard"
            value={form.applicationText}
            onChange={changeState}
            inputProps={{
              pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{30,}",
            }}
          />
          <TextField
            variant="standard"
            label="Profissão"
            name="profession"
            required
            value={form.profession}
            onChange={changeState}
          />
          <FormControl variant="standard">
            <InputLabel>País</InputLabel>
            <Select
              required
              label="País"
              name="country"
              value={form.country}
              onChange={changeState}
            >
              <MenuItem value="Brasil">Brasil</MenuItem>
              {CountryList}
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel>Viagens</InputLabel>
            <Select
              required
              label="Viagem"
              name="tripValue"
              value={form.trip}
              onChange={changeState}
            >
              <MenuItem value="">Selecione uma viagem abaixo.</MenuItem>
              {list.map((trip) => {
                return (
                  <MenuItem value={trip.id}>
                    {trip.name} - {trip.planet}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <MuiThemeProvider>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#00aaf0",
                color: "white",
              }}
            >
              Aplicar
            </Button>
          </MuiThemeProvider>
        </ApplyForm>
      </MainContainer>
    </div>
  );
};

export default ApplicationFormPage;
