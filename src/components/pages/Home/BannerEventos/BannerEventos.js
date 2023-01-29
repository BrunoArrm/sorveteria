import React from 'react';
import './BannerEventos.css';

function BannerEventos() {
  return (
    <div className='bannerEventos'>
        <div className='bannerEventos--divisor' id='bannerEventos--divisor--1'>
            {/* Imagem inserida via CSS */}
        </div>
        <div className='bannerEventos--divisor' id='bannerEventos--divisor--2'>
            <h1>NOSSOS EVENTOS</h1>
            <h3>Delicias com sorvete!</h3>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
        </div>
    </div>
  )
}

export default BannerEventos;