import React from 'react';
import './BannerSabores.css';

function BannerSabores() {
  return (
    <div className='bannerSabores'>
        <div className='bannerSabores--divisor' id='bannerSabores--divisor--1'>
            {/* Imagem inserida via CSS */}
        </div>
        <div className='bannerSabores--divisor' id='bannerSabores--divisor--2'>
            <h1>NOSSOS SABORES</h1>
            <h3>Novos e deliciosos!</h3>
            <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>
    </div>
  )
}

export default BannerSabores;