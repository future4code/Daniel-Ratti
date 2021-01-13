import React from "react";
import axios from "axios";
import styled from "styled-components";

const Forms = styled.div`
  display: flex;
  flex-direction: column    ;
  padding: 50px;
  box-sizing: border-box;
  margin: 30px auto;
  width: 20%;
  border: 2px solid black;
  justify-content:center;
  align-items:center;
`;

const Label = styled.label`
padding:10px;
`

const Button = styled.button`
margin-top:10px;
width:30%;
padding:5px;
background-color:blue;
color:white;
outline:none;
border:none;
font-size:large;
`;

const Input = styled.input`
width:80%;
`

class CreateUser extends React.Component {
  state = {
    name: "",
    email: "",
  };

  onChangename = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeemail = (event) => {
    this.setState({ email: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "daniel-ratti-epps",
          },
        }
      )
      .then((response) => {
        console.log(response);
        return alert("CADASTRADO COM SUCESSO!");
      })
      .catch((error) => {
        console.log(error);
        return alert("EMAIL OU NOME INVALIDO!");
      });
  };

  render() {
    return (
      <Forms>
        <Label>Nome:</Label>
        <Input value={this.state.name} onChange={this.onChangename}></Input>

        <Label>Email:</Label>
        <Input value={this.state.email} onChange={this.onChangeemail}></Input>
        <Button onClick={this.createUser}>Salvar</Button>
      </Forms>
    );
  }
}

export default CreateUser;
