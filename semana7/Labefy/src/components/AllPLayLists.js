import react from "react";
import axios from "axios";
import TrackDetails from "./TrackDetails";
import styled from "styled-components";

const DivPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  outline: none;
  border: none;
  background-color: blue;
  color: white;
`;

class AllPlayLists extends react.Component {
  state = {
    playList: [],
    trackList: [],
    abreList: false,
    playListId: "",
  };

  getPlayList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "daniel-ratti-epps",
          },
        }
      )
      .then((resposta) => {
        this.setState({ playList: resposta.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidMount = () => {
    this.getPlayList();
  };

  getTrackList = (trackId, TrackName) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${trackId}/tracks`,
        {
          headers: {
            Authorization: "daniel-ratti-epps",
          },
        }
      )
      .then((resposta) => {
        console.log(resposta.data.result.tracks);
        this.setState({
          trackList: resposta.data.result.tracks,
          playListId: trackId,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    this.setState({ abreList: true });
  };

  deleteList = (listId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listId}`,
        {
          headers: {
            Authorization: "daniel-ratti-epps",
          },
        }
      )
      .then((resposta) => {
        alert(" A PlayList foi deletada!");
        this.getPlayList();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const renderList = this.state.playList.map((lista) => {
      return (
        <div>
          <p key={lista.id}>
            {lista.name}
            <Button onClick={() => this.getTrackList(lista.id)}>
              Abrir Playlist
            </Button>
            <Button onClick={() => this.deleteList(lista.id)}>
              Deletar Playlist
            </Button>
          </p>
        </div>
      );
    });

    return this.state.abreList === true ? (
      <TrackDetails
        trackList={this.state.trackList}
        playListId={this.state.playListId}
      />
    ) : (
      <DivPrincipal>
        <h1>SUAS PLAYLISTS :)</h1>
        {renderList}
        <Button onClick={this.props.onClickRetorna}>Voltar</Button>
      </DivPrincipal>
    );
  }
}

export default AllPlayLists;
