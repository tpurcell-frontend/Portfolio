// import { createBrowserRouter } from "react-router";
import React from "react";
import {
  useLoaderData,
  createBrowserRouter,
} from "react-router";
import { NavLink } from "react-router";

import {Layout} from "./Layout";
import Home from '../pages/Home.js';
import Projects from '../pages/Projects';
import Dashboard from "../pages/Dashboard";
import Test from "../pages/Test";
import PlanetGenerator from "../pages/PlanetGenerator";
import SandwichMaker from "../pages/SandwichMaker";
import ToDoList from "../pages/ToDoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },    
      {
        children: [
          {
            path: '/projects/test',
            element: <Test />,
          },
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