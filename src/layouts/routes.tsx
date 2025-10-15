// import { createBrowserRouter } from "react-router";
import React from "react";
import {
  useLoaderData,
  createBrowserRouter,
} from "react-router";
import { NavLink } from "react-router";

import Home from '../pages/Home.js'
import PlanetGenerator from "../pages/PlanetGenerator.js";
import Projects from '../pages/Projects.js'

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