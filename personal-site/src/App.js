import './App.css';
import React from 'react';
import { useEffect } from 'react';
import Granim from "granim";
import logo from './logo.webp';
import background from './background.jpg';
import Swal from 'sweetalert2'

function App() {

  useEffect(() => {
    new Granim ({
      element: "#canvas",
      direction: "radial",
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

  const handleClick = () => {
    Swal.fire({
      title: 'Birthdate Confirmation',
      text: 'I confirm that I was born on or before 12/31/2049',
      icon: 'question',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: 'Deny',
    }).then((result) => {
      /* If user confirmed birthdate, set cookie allowing them access, otherwise open an alert informing them that they have been denied access */
      if (result.isConfirmed) {
        document.cookie = "access=true";
        window.location.href = "/home";
      }
      else {
        Swal.fire({
          title: 'Access Denied',
          text: 'Due to the Time Tourism Bill that will have been passed in 2050, you must be born on or before 12/31/2049 to access this site.',
          icon: 'error',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    });
  }

  return (
    <div className="App">
      <img className="App__background" src={background} alt="background" />
      <canvas id="canvas" className="canvas"></canvas>
      <img className="logo-mask" src={logo} alt="logo" />
      <div className="App__text-content">
        <header className="App__title">ChronoSphere</header>
        <p className="App__subtitle">Time Tours</p>
        <button className="App__button" onClick={handleClick}>Enter</button>
      </div>
    </div>
  );
}

export default App;
