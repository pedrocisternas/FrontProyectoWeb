import React from 'react';
import './LandingPage.css';
import Navbar from '../../components/Navbar/Navbar';
import handcuffs from '../../assets/icons/handcuffs.png';
import board from '../../assets/board.png';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <header className="page-header">
          {/* <img src={handcuffs} alt="Fuga de la Prisión" className="logo" /> */}
          <h1 className="page-title">Fuga de la Prisión</h1>
        </header>
        <main className="page-content">
          <h2 className="tagline">
            ¿Tienes lo que se necesita para liderar la gran evasión y burlar a los guardias en esta emocionante aventura?
          </h2>
          <img src={board} alt="Fuga de la Prisión - Imagen del juego" className="game-image" />
        </main>
      </div>
    </>
  );
};


export default LandingPage;