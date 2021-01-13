import React from "react";
import styled from "styled-components";
import "./styles.css";

const Butao = styled.button`
text-decoration:none;
border:none;
outline:none;
background-color:white;
padding:5px;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    const tarefaString = JSON.stringify(this.state.tarefas);
    localStorage.setItem("listaTarefa", tarefaString);
  }

  componentDidMount() {
    const dadosTarefas = localStorage.getItem("listaTarefa");
    const dadosObjetos = JSON.parse(dadosTarefas);
    if (dadosObjetos) {
      this.setState({
        tarefas: dadosObjetos,
      });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novasTarefas = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: novasTarefas });
  };

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    });
    this.setState({ tarefas: novaListaDeTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  removerTarefa = (index) => {
    this.state.tarefas.splice (index,1)
    this.setState({tarefas: this.setState.tarefas})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criarTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa, index) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                <Butao onClick={() => this.removerTarefa(index)}>🗑️</Butao>
              </Tarefa>

            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
