import React from 'react';
import Banner from './Banner/Banner';
import BannerEventos from './BannerEventos/BannerEventos';
import BannerSabores from './BannerSabores/BannerSabores';
import BannerSobre from './BannerSobre/BannerSobre';
import './Home.css';

function Home() {
  return (
    <main className='home'>
      <Banner />
      <BannerSabores />
      <BannerEventos />
      <BannerSobre />
    </main>
  )
}

export default Home