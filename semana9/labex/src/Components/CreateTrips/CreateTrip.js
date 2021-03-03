import React, { useState } from "react";
import axios from "axios";
import { useForm } from "../../Hooks/useForm";
import Header from "../Header/Header"
import styled from "styled-components";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  MuiThemeProvider,
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale";

const CreateTripContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border:1px solid black;
  margin-top:40px;
  background-color:white;
  border-radius:1%;
`;

const Title = styled.h1`
  margin-top: 50px;
`;

const CreateTripForm = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 30vw;
  background-color: white;
  border-radius: 5px;
`;

const CreateTripPage = () => {
  useProtectedPage();
  const { form, changeState, clearInput } = useForm({
    name: "",
    planet: "",
    description: "",
    duration: "",
  });
  const [date, setDate] = useState(Date.now);

  const onChangeDate = (date) => {
    setDate(date);
  };

  const createTrip = (event) => {
    event.preventDefault();
    const newDate = new Date(date);
    const body = {
      name: form.name,
      planet: form.planet,
      date: newDate.toLocaleDateString(),
      description: form.description,
      durationInDays: form.duration,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ratti-epps/trips",
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        window.alert(
          "Viagem cadastrada com sucesso!"
        );
        clearInput();
      })
      .catch((err) => {
        window.alert("Opps alguma coisa deu errada!");
      });
  };

  const planets = [
    "Mercurio",
    "Vênus",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Netuno",
  ];
  const planetSistem = planets.map((planet, id) => (
    <MenuItem key={id} value={planet}>
      {planet}
    </MenuItem>
  ));

  return (
    <div>
      <Header />
      <CreateTripContainer>
        <MainContainer>
          <Title variant="h3">Cadastre uma viagem: </Title>
          <CreateTripForm onSubmit={createTrip}>
            <TextField
              label="Nome da Viagem"
              name="name"
              required
              variant="standard"
              value={form.name}
              onChange={changeState}
              inputProps={{
                pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{5,}",
              }}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
              <DatePicker
                value={date}
                onChange={onChangeDate}
                label="Data da viagem"
                name="date"
                format="dd/MM/yyyy"
              />
            </MuiPickersUtilsProvider>
            <TextField
              multiline
              label="Descrição da viagem"
              name="description"
              required
              variant="standard"
              value={form.description}
              onChange={changeState}
              inputProps={{
                pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{30,}",
              }}
            />
            <TextField
              variant="standard"
              label="Duração da viagem"
              name="duration"
              type="number"
              required
              value={form.duration}
              onChange={changeState}
              inputProps={{ min: "50", step: "1" }}
            />
            <FormControl variant="standard">
              <InputLabel>Planetas</InputLabel>
              <Select
                label="Planeta"
                name="planet"
                value={form.planet}
                onChange={changeState}
              >
                <MenuItem value="">Selecione um dos Planetas abaixo.</MenuItem>
                {planetSistem}
              </Select>
            </FormControl>
            <MuiThemeProvider>
              <Button type="submit" variant="contained" style={{
                backgroundColor: "#00aaf0",
                color:"white",  
              }}>
                Enviar
              </Button>
            </MuiThemeProvider>
          </CreateTripForm>
        </MainContainer>
      </CreateTripContainer>
    </div>
  );
};

export default CreateTripPage;
