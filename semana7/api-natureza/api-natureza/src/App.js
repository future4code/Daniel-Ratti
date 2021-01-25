import React from "react";
import axios from "axios";
import styled from "styled-components";

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  outline: none;
  border: none;
  padding: 10px;
`;

class App extends React.Component {
  state = {
    activityData: '',
  };

  componentDidMount() {
    this.getActivity();
  }

  getActivity = () => {
    axios.get("http://www.boredapi.com/api/activity/").then((response) => {
      this.setState({ activityData: response.data });
    });
  };

  render() {
    console.log("Atividade: ", this.state.activity);
    return (
      <ActivityContainer>
        <h1>Quer algo pra fazer?</h1>
        <Button onClick={this.getActivity}>Próxima atividade</Button>
        {this.state.activityData && (
          <div>
            <p>Nome: {this.state.activityData.activity} </p>
            <p>Tipo: {this.state.activityData.type} </p>
            <p>Número de participantes: {this.state.activityData.participants}</p>
            <p>Preço: {this.state.activityData.price}</p>
          </div>
        )}
      </ActivityContainer>
    );
  }
}

export default App;
