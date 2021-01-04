import React from "react";
import styled from 'styled-components'

const Form = styled.form `
display:flex;
align-items: center;
flex-direction:column;
justify-content: space-evenly;
height: 150px;
font-weight:bolder;
`

export class Etapa2 extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="etapa2">
            <header>
              <h2>INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            </header>
      
            <Form>
              <label>5. Qual curso?</label>
              <input></input>
      
              <label>6. Qual a unidade de ensino?</label>
              <input></input>
            </Form>
          </div>
        )
    }
}

export default Etapa2