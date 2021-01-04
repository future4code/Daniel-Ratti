import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import styled from 'styled-components'

const Corpo = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  width: 40%;
  height: 50vh;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  font-family:Arial, Helvetica, sans-serif;
  font-size:larger;
`
const Butao = styled.button `
text-decoration:none;
outline:none;
border:none;
border-radius:25px;
padding: 10px 25px;
background-color:orangered;
color:white;
font-size:large;
`

export class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4: 
        return <Final />
    }
  }
  
  proximaEtapa = () => {
    let proximaEtapa = this.state.etapa + 1

    this.setState ({
      etapa: proximaEtapa
    })
  }
  
  render () {
    return (
      <Corpo>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 ? <Butao onClick ={this.proximaEtapa}>Próxima Etapa</Butao> : <div></div>}
      </Corpo>
    )
  }
}

export default App;
