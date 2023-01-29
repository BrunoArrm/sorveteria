import React from 'react';
import './CardSabor.css';

function CardSabor(props) {
  return (
    <div className='cardSabor'>
        <img className='imgSabor' src={props.src} alt={props.alt} title={props.title}></img>
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
    </div>
  )
}

export default CardSabor;

// DECLARAR:

// src = local da Imagem
// alt = Texto da Imagem
// title = Título para a Imagem
// titulo = titulo do Card
// texto = texto do card