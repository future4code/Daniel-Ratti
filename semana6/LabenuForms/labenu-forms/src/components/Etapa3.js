import React from "react";
import styled from 'styled-components'

const Form = styled.form `
display:flex;
align-items: center;
flex-direction:column;
justify-content: space-evenly;
height: 200px;
font-weight:bolder;
`

export class Etapa3 extends React.Component {
    state = {

    }

    render () {
        return(
            <div className="etapa3">
            <header>
              <h2>INFORMAÇÕES GERAIS DE ENSINO</h2>
            </header>
      
            <Form>
              <label>7. Por que você não terminou o curso de graduação?</label>
              <input></input>
      
              <label>8. Você fez algum curso complementar?</label>
              <select>
                <option>Não fiz nenhum</option>
                <option>Curso Técnico</option>
                <option>Curso de inglês</option>
              </select>
            </Form>
          </div>
        )
    }
}

export default Etapa3;
