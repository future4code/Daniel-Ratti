import React from "react";
import styled from "styled-components";
import CreateUser from "./components/CreateUser";
import GetAllUsers from "./components/GetAllUsers";

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

  render() {
    if (this.state.section === "list") {
      return (
        <div>
          <Button onClick={this.changeSection} value="GetAllUsers">Ir para a página de registro</Button>
          <GetAllUsers getId={this.receiveId} />
        </div>
      );
    }

    return (
      <div>
        <Button onClick={this.changeSection} value="list">Ir para a página de lista</Button>
        <CreateUser />
      </div>
    );
  }
}

export default App;