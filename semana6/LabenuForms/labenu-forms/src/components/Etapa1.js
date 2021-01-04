import React from "react";
import styled from 'styled-components'

const Form = styled.form `
display:flex;
align-items: center;
flex-direction:column;
justify-content: space-evenly;
height: 300px;
font-weight:bolder;
`

export class Etapa1 extends React.Component {
    state = {

    }

    render(){
        return (
            <div className="etapa1">
              <header>
                <h2>DADOS GERAIS</h2>
              </header>
              <Form>
                <label>1. Qual o seu nome?</label>
                <input></input>
        
                <label>2. Qual a sua idade?</label>
                <input type="number"></input>
        
                <label>3. Qual seu email?</label>
                <input></input>
        
                <label>4. Qual sua escolaridade?</label>
                <select>
                  <option>Ensino médio incompleto</option>
                  <option>Ensino médio completo</option>
                  <option>superior superior incompleto </option>
                  <option>superior superior completo</option>
                </select>
              </Form>
            </div>
          );
    }
}

export default Etapa1


