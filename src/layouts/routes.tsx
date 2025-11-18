// import { createBrowserRouter } from "react-router";
import React from "react";
import {
  useLoaderData,
  createBrowserRouter,
} from "react-router";
import { NavLink } from "react-router";

import Home from '../pages/Home.js'
import Projects from '../pages/Projects.js'
import PlanetGenerator from "../pages/PlanetGenerator.js";
import SandwichMaker from "../pages/SandwichMaker.js";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />
      },    
      {
        children: [
          {
            path: '/projects/planet-generator',
            element: <PlanetGenerator />,
          },
          {
            path: '/projects/sandwich-maker',
            element: <SandwichMaker />,
          },
        ]
      },
    ]
  },
]);

export default router;