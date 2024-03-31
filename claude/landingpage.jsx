import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>Menuitem</li>
            <li>Collections</li>
            <li>Bestsellers</li>
            <li>Dailywear</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero-section">
          <img src="hero-image.jpg" alt="Hero" />
          <div className="hero-content">
            <h2>Some cool heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="feature-section">
          <div className="feature-item">
            <img src="car-icon.png" alt="Car" />
            <p>Some text</p>
          </div>
          <div className="feature-item">
            <img src="car-icon.png" alt="Car" />
            <p>Some text</p>
          </div>
          <div className="feature-item">
            <img src="car-icon.png" alt="Car" />
            <p>Some text</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;