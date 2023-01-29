import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Sabores from '../pages/Sabores/Sabores';
import Sobre from '../pages/Sobre/Sobre';

const Rotas = () => (

        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/Sabores' element={ <Sabores /> } />
            <Route path='/Sobre' element={ <Sobre /> } />
        </Routes>

)

export default Rotas;