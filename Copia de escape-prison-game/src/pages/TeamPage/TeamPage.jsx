import React from 'react';
import './TeamPage.css';
import Navbar from '../../components/Navbar/Navbar';
import pedroCisternasImage from '../../assets/pedroC.jpeg';
import pedroGiesenImage from '../../assets/pedroG.jpeg';

const TeamPage = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <header className="page-header">
          <h1 className="page-title">Equipo</h1>
        </header>
        <main className="page-content">
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={pedroCisternasImage} alt="Pedro Cisternas" className="team-member-image" />
            </div>
            <div className="team-member-info">
              <h2 className="name">Pedro Cisternas</h2>
              <p className="role">Estudiante de Ingeniería con major en Software. Apasionado por el fútbol, la tecnología y los juegos de mesa. </p>
            </div>
          </div>
          <div className="team-member">
            <div className="team-member-image-container">
              <img src={pedroGiesenImage} alt="Pedro Giesen" className="team-member-image" />
            </div>
            <div className="team-member-info">
              <h2 className="name">Pedro Giesen</h2>
              <p className="role">Estudiante de Ingeniería con major en Investigación Operativa. Le gusta mucho el fútbol y es amante de los animales. A pesar de que no le gustan mucho los juegos de mesa, si le gusta desarrollarlos.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TeamPage;
