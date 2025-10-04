// import { createBrowserRouter } from "react-router";
import React from "react";
import {
  useLoaderData,
  createBrowserRouter,
} from "react-router";
import { NavLink } from "react-router";

import Home from '../pages/Home.jsx'
import PlanetGenerator from "../pages/PlanetGenerator.jsx";
import Projects from '../pages/Projects.jsx'

import App from '../App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />
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