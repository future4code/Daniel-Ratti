import react from "react";
import AddPlayList from "./components/AddPlayList";
import AllPlayLists from "./components/AllPLayLists";
import styled from "styled-components";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

const Button = styled.button`
  margin-top: 20px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends react.Component {
  state = {
    verLista: false,
  };

  onClickVerLista = () => {
    this.setState({ verLista: true });
  };

  onClickRetorna = () => {
    this.setState({ verLista: false });
  };

  render() {
    const renderViewLista = () => {
      return this.state.verLista === true ? (
        <AllPlayLists onClickRetorna={this.onClickRetorna} />
      ) : (
        <ContainerForm>
          <AddPlayList />
          <Button onClick={this.onClickVerLista}>
            Visualizar Minhas Playlist
          </Button>
        </ContainerForm>
      );
    };

    return (
      <Main>
        <h1>LABEFY</h1>
        {renderViewLista()}
      </Main>
    );
  }
}

export default App;
