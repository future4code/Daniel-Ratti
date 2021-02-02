import React from "react";
import styled from "styled-components";
import CreateUser from "./components/CreateUser";
import GetAllUsers from "./components/GetAllUsers"; 
import DetailsUser from './components/DetailsUser'

const Button = styled.button`
margin:10px;
`

class App extends React.Component {
  state = {
    section: "",
    id: "",
  };

  changeSection = (event) => {
    this.setState({ section: event.target.getAttribute("value") });
  };

  receiveId = (idClicked) => {
    this.setState({section: "details", id:idClicked})
  }

  backToGetUser = () => {
    this.setState({section:"list", id:""})
  }

  render() {
    if (this.state.section === "list") {
      return (
        <div>
          <Button onClick={this.changeSection} value="getUser">
            Ir para a página de registro
          </Button>
          <GetAllUsers getId={this.receiveId} />
        </div>
      );
    } else if (this.state.section === "details") {
      return (
        <div>
          <DetailsUser id={this.state.id} back={this.backToGetUser}/>
        </div>
      )
    }

    return (
      <div>
        <Button onClick={this.changeSection} value="list">
          Ir para a lista de Usuários
        </Button>
        <CreateUser />
      </div>
    );
  }
}

export default App;