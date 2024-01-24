import './App.css';
import React from 'react';
import { useEffect } from 'react';
import Granim from "granim";
import logo from './logo.webp';
import background from './background.jpg';
import AOS from 'aos';

function App() {
  useEffect(() => {
    new Granim ({
      element: "#canvas",
      direction: "radial",
      image: {
        source: background,
        blendingMode: "multiply",
        stretchMode: ["stretch-if-bigger", "stretch-if-bigger"],
      },
      states: {
        "default-state": {
          gradients: [
            ["#7C3BBE", "#3BBE7C"],
            ["#3BBE7C", "#BE7C3B"],
            ["#BE7C3B", "#7C3BBE"],
          ],
          transitionSpeed: 2000
        }
      }
    });
  }, []);
  
  AOS.init();

  return (
    <div className="App">
      <canvas id="canvas" className="canvas"></canvas>
      <img className="logo-mask" src={logo} alt="logo" />
      <div className="App__text-content">
        <header className="App__title">ChronoSphere</header>
        <p className="App__subtitle">Time Tours</p>
      </div>
    </div>
  );
}

export default App;
