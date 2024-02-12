import "../styles/App.css";
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root";
import ErrorPage from "./error-page";
import Home from "../routes/home";
import BlockedAccess from "../routes/blocked-access";
import About from "../routes/about";
import Tours from "./Tours";
import Contact from "./Contact";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/tours",
    element: <Tours />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/BlockedAccess",
    element: <BlockedAccess />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
