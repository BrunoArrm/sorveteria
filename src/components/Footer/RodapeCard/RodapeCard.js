import React from 'react';
import { Link } from 'react-router-dom';
import './RodapeCard.css';

function RodapeCard(props) {
  return (
    <div className='rodapeCard'>
        <h3>{props.titulo}</h3>
        <p>{props.texto1}</p>
        <p>{props.texto2}</p>
        <Link to="/"><img className="rodape--img" src={props.img}></img></Link>
    </div>
  )
}

export default RodapeCard;