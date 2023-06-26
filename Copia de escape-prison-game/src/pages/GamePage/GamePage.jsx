import React from 'react';
// import './GamePage.css';
import Navbar from '../../components/Navbar/Navbar';
import Board from '../../components/Board/Board';

const GamePage = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <main className="page-content">
          <section className="game-board-section">
            <h2 className="section-title">Tablero de Juego</h2>
            <Board />
          </section>
        </main>
      </div>
    </>
  );
};

export default GamePage;
