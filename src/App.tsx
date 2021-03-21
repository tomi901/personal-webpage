import React from 'react';
import './App.scss';
import picture from './picture.png';



function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
      <footer>
      </footer>
    </div>
  );
}


function AppHeader() {
  const particles: JSX.Element[] = [];
  for (let i = 0; i < 300; i++) {
    particles.push(<div className="particle" key={i}></div>);
  }

  return <header>
        <div className="particle-container">{particles}</div>
        <div className="content">
          <img src={picture} className="picture" alt="Tomás Rinaldi's avatar" />
          <h1>Tomás Rinaldi</h1>
          <h2>Developer</h2>
        </div>
        <p className="see-more">↓ Scroll down to see more ↓</p>
  </header>
}

function AppContent() {
  const links: {
    displayName: string;
    link: string;
  }[] = [
    { displayName: "Curriculum Vitae", link: "https://firebasestorage.googleapis.com/v0/b/tom-rinaldi.appspot.com/o/public%2FWeb%2FCV.pdf?alt=media" },
    { displayName: "LinkedIn", link: "https://www.linkedin.com/in/tom%C3%A1s-rinaldi-50244a1a1/" },
  ];

  return <section className="App-content">
    <div className="btn-array">
      {links.map((v, i) => <a key={i} className="btn" href={v.link} rel="noreferrer" target="_blank">{v.displayName}</a>)}
    </div>
  </section>
}


export default App;
