import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerDetails = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 40%;
`;

const H3 = styled.h3`
  display: inline-block;
  margin-right: 5px;
`;

const P = styled.p`
  display: inline-block;
`;

const Label = styled.label`
  display: block;
`;

const Button = styled.button`
  margin: 25px;
  width: 15%;
  height: 30px;
  background-color:blue;
  outline:none;
  border:none;
  color:white;
`;

class DetailsUser extends React.Component {
  state = {
    user: {},
    edit: false,
    inputName: "",
    inputEmail: "",
  };

  componentDidMount () {
    this.showDetails(this.props.id);
  }

  showDetails = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "daniel-ratti-epps",
          },
        }
      )
      .then((response) => {
        console.log(response)
        return this.setState({ user: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteItem = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "daniel-ratti-epps",
            },
          }
        )
        .then((response) => {
          return alert("Usuário deletado com sucesso!"), this.props.back();
        })
        .catch((error) => {
          return alert("Usuário não foi deletado!");
        });
    }
  };

  openEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  onChangeName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  saveEdit = () => {
    if (!this.state.inputName || !this.state.inputEmail) {
      if (!this.state.inputName) {
        return alert("Digite um nome");
      }
      return alert("Digite um e-mail");
    }
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.id}`,
        body,
        {
          headers: {
            Authorization: "daniel-ratti-epps",
          },
        }
      )
      .then((response) => {
        return (
          alert("Cadastro realizado com sucesso!"),
          this.setState({ name: "", email: "", edit: false }),
          this.showDetails(this.props.id)
        );
      })
      .catch((error) => {
        console.log("Está dando erro")
        return alert("Cadastro não foi realizado!");
      });
  };

  render() {
    if (!this.state.edit) {
      return (
        <ContainerDetails>
          <h2>Detalhes do usuário</h2>
          <div>
            <H3>Nome:</H3>
            <P>{this.state.user.name}</P>
          </div>
          <div>
            <H3>E-mail:</H3>
            <P>{this.state.user.email}</P>
          </div>
          <Button onClick={this.openEdit}>Editar</Button>
          <Button onClick={() => this.deleteItem(this.props.id)}>
            Deletar item
          </Button>
          <Button onClick={this.props.back}>Voltar para lista</Button>
        </ContainerDetails>
      );
    }
    return (
      <ContainerDetails>
        <h2>Detalhes do usuário</h2>
        <div>
          <Label for="name">Nome:</Label>
          <input
            type="text"
            name="name"
            value={this.state.inputName}
            onChange={this.onChangeName}
            placeholder="Nome"
          />
        </div>
        <div>
          <Label for="email">E-mail:</Label>
          <input
            type="email"
            name="email"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
            placeholder="Email"
          />
        </div>
        <Button onClick={this.saveEdit}>Salvar</Button>
        <Button onClick={this.openEdit}>Cancelar</Button>
      </ContainerDetails>
    );
  }
}

export default DetailsUser;