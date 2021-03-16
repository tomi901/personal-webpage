import React from 'react';
import './App.scss';
import TextFileExplorer from './TextFileExplorer';

function App() {
  return (
    <div className="App">
      <header>
        <div className="content">
          <h1>Tomás Rinaldi</h1>
        </div>
        <p className="see-more">↓ Scroll down to see more ↓</p>
      </header>
      <section className="App-content">
        <TextFileExplorer></TextFileExplorer>
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
