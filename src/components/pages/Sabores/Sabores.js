import React from 'react';
import "./Sabores.css";
import CardSabor from './CardSabor/CardSabor'

function Sabores() {
  return (
    <div className='sabores'>
      <div className='sabores--bannerLimitador'>
        <h1>NOSSOS SABORES</h1>
      </div>
      <div className='sabores--bannerSabores'>
        <h3>SABORES DE SORVETE</h3>
        <div className='bannerSabores--cards'>
          <CardSabor 
            src="../../../assets/sabor-oreo.png"
            alt="Oreo"
            title="Oreo"
            titulo="Sorvete de Oreo"
            texto="Delicioso sorvete sabor Oreo. Uma explosão de sabor." />
          <CardSabor 
            src="../../../assets/sabor-pistache.png"
            alt="Pistache"
            title="Pistache"
            titulo="Sorvete Pistache"
            texto="Cremoso sorvete sabor pistache com pedacinhos de semente." />
          <CardSabor 
            src="../../../assets/sabor-cookies-avela.png"
            alt="Cookies & Avelã"
            title="Cookies & Avela"
            titulo="Sorvete de Cookies & Avelã"
            texto="O nosso melhor sorvete. Você vai adorar o sabor." />
        </div>
        <div className='bannerSabores--cards'>
        <CardSabor 
            src="../../../assets/sorbet-kiwi.png"
            alt="Kiwi"
            title="Kiwi"
            titulo="Sorvete de Kiwi"
            texto="Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C." />
          <CardSabor 
            src="../../../assets/sorbet-morango.png"
            alt="Morango"
            title="Morango"
            titulo="Sorvete de Morango"
            texto="Sorvete de Morango gourmet. Tradicional e saboroso." />
          <CardSabor 
            src="../../../assets/sorbet-limao.png"
            alt="Limão Siciliano"
            title="Limão Siciliano"
            titulo="Sorvete de Limão Siciliano"
            texto="O incrível sorvete gourmet de limão siciliano vai te encantar." />
        </div>
      </div>
    </div>
  )
}

export default Sabores