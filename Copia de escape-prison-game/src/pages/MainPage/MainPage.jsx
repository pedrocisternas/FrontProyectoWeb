import React from 'react';
import './MainPage.css';
import Navbar from '../../components/Navbar/Navbar';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <header className="page-header">
          <h1 className="page-title">Prison Escape</h1>
          <button className="start-game-btn">Comenzar partida rápida</button>
        </header>
        <main className="page-content">
          <section className="summary-section">
            <h2 className="section-title">Resumen</h2>
            <p className="summary">
              En "Fuga de la Prisión", 3-4 jugadores asumen el control de un grupo de reos que intentan escapar de una prisión mientras evitan a los guardias y buscan oportunidades para acelerar su fuga. Al igual que en "Survive: Escape from Atlantis", el objetivo es conseguir que tus reos lleguen a las zonas seguras antes de que se cierren todas las rutas de escape.
            </p>
          </section>
          <section className="components-section">
            <h2 className="section-title">Componentes</h2>
            <ul className="section-list">
              <li>32 hexágonos de celda (26 periféricos y 6 centrales)</li>
              <li>4 conjuntos de 8 reos (numerados 1-1-2-3-4-5-5-6)</li>
              <li>8 hexágonos de zona segura</li>
              <li>4 guardias iniciales (se van a gregando más a medida que avanza el juego)</li>
              <li>1 dado</li>
              <li>Cartas de acción</li>
              <li>Tablero de juego</li>
            </ul>
          </section>
          <section className="preparation-section">
            <h2 className="section-title">Preparación</h2>
            <ol className="section-list">
              <li>Coloca los hexágonos de celda en el centro del tablero formando un círculo con los 26 hexágonos periféricos alrededor de los 6 centrales.</li>
              <li>Coloca los hexágonos de zona segura en los bordes exteriores del tablero.</li>
              <li>Cada jugador elige un color y toma sus 8 reos.</li>
              <li>Los jugadores colocan sus reos en los hexágonos de celda, siguiendo el orden de los números.</li>
              <li>Coloca al guardia gordo, guardia flaco y foco en hexágonos aleatorios del patio (fuera de las celdas).</li>
              <li>Baraja las cartas de acción y colócalas boca abajo.</li>
            </ol>
          </section>
          <section className="turns-section">
            <h2 className="section-title">Turnos</h2>
            <p className="section-text">Cada turno consta de 4 fases:</p>
            <ol className="section-list">
              <li>Mover reos: Mueve hasta 3 reos en el patio, un hexágono a la vez.</li>
              <li>Sacar un hexágono de celda: Retira un hexágono periférico y revela la carta de acción asociada. Si es una carta inmediata, resuelve su efecto y descártala; si es una carta para guardar, colócala en tu mano.</li>
              <li>Mover guardia: Lanza el dado y mueve al guardia. Hay cuatro opciones en el dado: Mover al guardia una casilla, dos casillas, tres casillas, o ninguna.</li>
              <li>Usar cartas de acción (opcional): Puedes jugar una carta de acción de tu mano en cualquier momento durante tu turno.</li>
            </ol>
          </section>
          <section className="action-cards-section">
            <h2 className="section-title">Cartas de acción</h2>
            <ul className="section-list">
              <li>Cartas inmediatas: Estas cartas tienen efectos que se resuelven al momento de revelarlas (por ejemplo, mover un guardia, que aparezca un guardia en el terreno retirado, etc).</li>
              <li>Cartas para guardar: Estas cartas se añaden a tu mano y puedes usarlas en tu turno (por ejemplo, mover un reo adicional, defender a un reo del guardia etc.).</li>
            </ul>
          </section>
          <section className="characters-section">
            <h2 className="section-title">Personajes</h2>
            <ul className="section-list">
              <li>Guardia: Se mueve entre cero a tres casillas por turno.</li>
              <li>Reo: Se mueve entre una a tres casillas por turno.</li>
            </ul>
          </section>
          <section className="objective-section">
            <h2 className="section-title">Objetivo</h2>
            <p className="section-text">
              El objetivo del juego es llevar a tus reos a las zonas seguras en el borde exterior del tablero antes de que se cierren todas las rutas de escape. Cuando un jugador lleva un reo a una zona segura, anota puntos según el número del reo (1-6). Los reos que sean capturados por los guardias no anotan puntos.
            </p>
          </section>
          <section className="end-game-section">
            <h2 className="section-title">Fin del juego</h2>
            <p className="section-text">
              El juego termina cuando se han retirado todos los hexágonos de celda y no quedan rutas de escape disponibles, o cuando todos los reos han llegado a las zonas seguras o han sido capturados. El jugador con la mayor cantidad de puntos acumulados gana la partida.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default MainPage;

