import React from "react";
import YoutubeVideo from "components/YoutubeVideo";
import picture from "assets/picture.png";
import Content from "./Content";
import "./Home.scss";


function Home() {
  return (
    <div className="App">
      <HomeHeader />
      <Content />
      <footer>
      </footer>
    </div>
  );
}

export function HomeHeader() {
  const particles: JSX.Element[] = [];
  for (let i = 0; i < 300; i++) {
    particles.push(<div className="particle" key={i}></div>);
  }

  return (
    <header>
        <div className="particle-container">{particles}</div>
        <div className="content">
            <img src={picture} className="picture" alt="Tomás Rinaldi's avatar" />
            <h1>Tomás Rinaldi</h1>
            <h2>Developer</h2>
        </div>
    </header>
  );
}

export default Home;