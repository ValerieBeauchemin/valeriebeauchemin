import { useEffect } from "react";
import Granim from "granim";
import logo from "../resources/logo_spin.gif";
import "../styles/Logo-Gradient.css";

/* React component for the logo gradient. */
export default function LogoGradient() {
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
          transitionSpeed: 1500,
        },
      },
    });
  }, []);

  return (
    <div className="Logo-Gradient">
      <canvas id="canvas" className="canvas"></canvas>
      <img className="Logo-Gradient__Logo" src={logo} alt="logo" />
    </div>
  );
}
