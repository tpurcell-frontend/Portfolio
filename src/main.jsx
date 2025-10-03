import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import router from './layouts/routes'

import './assets/styles/index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
