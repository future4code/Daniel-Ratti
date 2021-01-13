import React from "react";
import axios from "axios";
import styled from "styled-components";

const UsersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:5px;
`;

const Ul = styled.div`
  list-style-type: none;
`;

const UsersList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:solid green 1px;
`;

const Button = styled.button`
  color: red;
  outline: #f2f2f2;
  border: none;
`;

class GetAllUsers extends React.Component {
  state = {
    usersList: [],
  };

  GetAllUserss = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "daniel-ratti-epps",
          },
        }
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.GetAllUserss();
  }

  deleteItem = (id) => {
    if (window.confirm("CUIDADO!!! QUER MESMO DELETAR?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/`,
          {
            headers: {
              Authorization: "daniel-ratti-epps",
            },
          }
        )
        .then((response) => {
          return alert("DELETADO!!"), this.GetAllUserss();
        })
        .catch((error) => {
          return alert("ERRO NAO FOI DELETADO!!");
        });
    }
  };

  render() {
    return (
      <UsersDiv>
        <h2>Usuários Cadastrados:</h2>
        <Ul>
          {this.state.usersList.map((user) => {
            return (
              <UsersList>
                <li>{user.name}</li>
                <Button onClick={() => this.deleteItem(user.id)}>X</Button>
              </UsersList>
            );
          })}
        </Ul>
      </UsersDiv>
    );
  }
}

export default GetAllUsers;
