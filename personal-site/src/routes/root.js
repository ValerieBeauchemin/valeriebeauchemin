import { useEffect } from "react";
import Granim from "granim";
import logo from "../logo.webp";
import background from "../background.jpg";
import BirthdateConfirmation from "../Birthdate-Confirmation";
import "../Root.css";

/** React component for the root page. */
export default function Root() {
  useEffect(() => {
    new Granim({
      element: "#canvas",
      direction: "radial",
      states: {
        "default-state": {
          gradients: [
            ["#7C3BBE", "#3BBE7C"],
            ["#3BBE7C", "#BE7C3B"],
            ["#BE7C3B", "#7C3BBE"],
          ],
          transitionSpeed: 2000,
        },
      },
    });
  }, []);

  return (
    <div>
      <img className="App__background" src={background} alt="background" />
      <canvas id="canvas" className="canvas"></canvas>
      <img className="logo-mask" src={logo} alt="logo" />
      <div className="App__text-content">
        <header className="App__title">ChronoSphere</header>
        <p className="App__subtitle">Time Tours</p>
        <BirthdateConfirmation />
      </div>
    </div>
  );
}
