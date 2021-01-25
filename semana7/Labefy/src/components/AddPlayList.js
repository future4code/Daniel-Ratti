import react from "react";
import axios from "axios";
import styled from "styled-components";

const Botao = styled.button`
  outline: none;
  border: none;
  background-color: blue;
  height: 46px;
  color: white;
  margin: 2px;
`;

const Input = styled.input`
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
`;

class AddPlayList extends react.Component {
  state = {
    nameValue: "",
  };

  AddPlayList = () => {
    const body = {
      name: this.state.nameValue,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "daniel-ratti-epps",
          },
        }
      )
      .then(() => {
        console.log("Playlist criada!");
        this.setState({ nameValue: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeAddPlayList = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Nome da playlist"
          value={this.state.nameValue}
          onChange={this.onChangeAddPlayList}
        />
        <Botao onClick={this.AddPlayList}>Criar Playlist</Botao>
      </div>
    );
  }
}

export default AddPlayList;
