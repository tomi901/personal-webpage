import React from 'react';
import './App.scss';
import picture from './picture.png';

function App() {
  const particles: JSX.Element[] = [];
  for (let i = 0; i < 100; i++) {
    particles.push(<div className="particle" key={i}></div>);
  }

  return (
    <div className="App">
      <header>
        <div className="particle-container">{particles}</div>
        <div className="content">
          <img src={picture} className="picture" alt="Tomás Rinaldi's avatar" />
          <h1>Tomás Rinaldi</h1>
          <h2>Developer</h2>
        </div>
        <p className="see-more">↓ Scroll down to see more ↓</p>
      </header>
      <section className="App-content">
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
