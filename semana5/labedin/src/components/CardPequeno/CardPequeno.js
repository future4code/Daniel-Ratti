import React from "react"
import "./CardPequeno.css"

function CardPequeno(props) {
    return(
        <div className="container-small">
            <img src= {props.imagem} />
            <h4>{props.titulo}</h4>
            <div>
                <p>{props.email}</p>
                <p>{props.endereco}</p>
            </div>
        </div>
    )
}
export default CardPequeno