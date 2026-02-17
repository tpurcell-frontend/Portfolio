// import { createBrowserRouter } from "react-router";
import React from "react";
import {
  useLoaderData,
  createBrowserRouter,
} from "react-router";
import { NavLink } from "react-router";

import Home from '../pages/Home.js'
import Projects from '../pages/Projects'
import Dashboard from "../pages/Dashboard";
import PlanetGenerator from "../pages/PlanetGenerator";
import SandwichMaker from "../pages/SandwichMaker";
import ToDoList from "../pages/ToDoList";

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
            path: '/projects/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/projects/planet-generator',
            element: <PlanetGenerator />,
          },
          // {
          //   path: '/projects/sandwich-maker',
          //   element: <SandwichMaker />,
          // },
          {
            path: '/projects/todo-list',
            element: <ToDoList />,
          },
        ]
      },
    ]
  },
]);

export default router;