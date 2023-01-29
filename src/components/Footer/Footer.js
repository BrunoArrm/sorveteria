import React from 'react';
import './Footer.css';
import RodapeCard from './RodapeCard/RodapeCard';

function Footer() {
  return (
    <footer className='rodape'>
        <div className='rodapeAgrupador'>
            <RodapeCard 
                img="../../assets/logo.png"/>
            <RodapeCard 
                titulo="ENDEREÇO"
                texto1="Av. Bernardino de Campos, 98"
                texto2="São Paulo, SP 12345-678"/>
            <RodapeCard 
                titulo="CONTATO"
                texto1="info@meusite.com"
                texto2="Tel: (11)3456-7890" />
            <RodapeCard 
                titulo="HORÁRIOS"
                texto1="ABERTO TODOS OS DIAS"
                texto2="10:00 - 22:00"/>
        </div>
        <p>Gelateria. Orgulhosamente desenvolvido por Bruno Arruda </p>
    </footer>
  )
}

export default Footer;