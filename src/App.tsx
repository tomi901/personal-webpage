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
    <section>
      <h1>About me</h1>
      <p>
        My name is Tomás <span className="small">(Or Tom)</span> Rinaldi.
      </p>
      <p>
        I'm a full stack developer, having worked on applications using different languagues like <strong>JavaScript</strong> and <strong>C#</strong>, using technologies like <strong>Express.js</strong>, <strong>React</strong>, <strong>Firebase</strong>, <strong>Unity</strong> and <strong>Unreal Engine</strong>.
      </p>
      <p>
      </p>
      <hr></hr>
      <h2>How I started</h2>
      <p>
        In school, I wanted to create videogames and enter the industry. In 2016 my first complete game was <strong>The Pixel</strong>, a simple mobile arcade game where pixels start to attack you and you have to use touch controls to destroy them.
      </p>
      <YoutubeVideo src="https://www.youtube.com/embed/D5NZZCRSHqw" />
    </section>
  </section>
}

function YoutubeVideo(props: { src: string}) {
  return <div className="media-container">
    <div className="video-container">
      <iframe width="560"
        height="315"
        src={props.src}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen={true}
        >
      </iframe>
    </div>
  </div>
}


export default App;
