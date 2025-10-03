// import { createBrowserRouter } from "react-router";
import React from "react";
import {
  useLoaderData,
  createBrowserRouter,
} from "react-router";
import { NavLink } from "react-router";

import Home from '../pages/PlanetGenerator.jsx'
import PlanetGenerator from "../pages/PlanetGenerator.jsx";
import Projects from '../pages/Projects.jsx'

import Button from '../components/Button.jsx'
import App from '../App.jsx'

function Root() {
  function buttonLaunch() {

  }

  return (
    <div>
      <h1>Travis Purcell's Portfolio</h1>
      <div className="button-wrapper">
        <NavLink to="projects">
          <Button onClick={buttonLaunch()} buttonClass="animation-glow btn-homepage" text="Launch" />
        </NavLink>
      </div>
    </div>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Root />
      },
      {
        path: 'planet-generator',
        element: <PlanetGenerator />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ]
  },
]);

export default router;