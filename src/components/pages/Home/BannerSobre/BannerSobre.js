import React from 'react';
import './BannerSobre.css';

function BannerSobre() {
  return (
    <div className='bannerSobre'>
        <div className='bannerSobre--divisor' id='bannerSobre--divisor--1'>
            {/* Imagem inserida via CSS */}
        </div>
        <div className='bannerSobre--divisor' id='bannerSobre--divisor--2'>
            <h1>SOBRE NÓS</h1>
            <h3>Alegria em cada casquinha!</h3>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
        </div>
    </div>
  )
}

export default BannerSobre;