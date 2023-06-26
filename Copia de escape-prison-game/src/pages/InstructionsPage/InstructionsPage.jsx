import React, { useState } from 'react';
import './InstructionsPage.css';
import Navbar from '../../components/Navbar/Navbar';
import iconChase from '../../assets/icons/chase.png';
import iconDetained from '../../assets/icons/detained.png';
import robber from '../../assets/icons/robber.png';
import hexagon from '../../assets/icons/hexagon.png';

const InstructionsPage = () => {
  const [currentInstruction, setCurrentInstruction] = useState(0);
  const instructions = [
  {
    number: 1,
    text: 'Mover reos: Mueve hasta 3 reos en el patio, un hexágono a la vez.',
    icon: robber,
  },
  {
    number: 2,
    text: 'Sacar un hexágono de celda: Retira un hexágono periférico y revela la carta de acción asociada. Si es una carta inmediata, resuelve su efecto y descártala; si es una carta para guardar, colócala en tu mano.',
    icon: hexagon,
  },
  {
    number: 3,
    text: 'Mover guardia: Lanza el dado y mueve al guardia. Hay cuatro opciones en el dado: Mover al guardia una casilla, dos casillas, tres casillas, o ninguna.',
    icon: iconDetained,
  },
  {
    number: 4,
    text: 'Usar cartas de acción (opcional): Puedes jugar una carta de acción de tu mano en cualquier momento durante tu turno.',
    icon: iconChase,
  },
];

  const handleNext = () => {
    setCurrentInstruction((prevInstruction) => (prevInstruction + 1) % instructions.length);
  };

  const handlePrevious = () => {
    setCurrentInstruction((prevInstruction) => (prevInstruction - 1 + instructions.length) % instructions.length);
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <header className="page-header">
          <h1 className="page-title">Instrucciones del Juego</h1>
        </header>
        <main className="page-content">
          <div className="instructions-container">
        <div className="instructions-header">
          <h3>{'Instrucción ' + instructions[currentInstruction].number}</h3>
        </div>
        <div className="instructions-content">
          <div className="instructions-text">
            <p>{instructions[currentInstruction].text}</p>
          </div>
          <div className="instructions-icon">
            <img src={instructions[currentInstruction].icon} alt="instruction-icon" className="instruction-icon-img" />
          </div>
        </div>
      </div>
          <div className="navigation-buttons">
            <button onClick={handlePrevious}>Anterior</button>
            <button onClick={handleNext}>Siguiente</button>
        </div>
          <div className="indicators-container">
            {instructions.map((instruction, index) => (
              <div
                key={index}
                className={`indicator ${currentInstruction === index ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default InstructionsPage;

