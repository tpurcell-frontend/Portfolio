import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './layouts/routes'
import { Analytics } from "@vercel/analytics/react"

import './assets/styles/index.scss'
import './assets/styles/styles.scss'

const container = document.getElementById('root');
if (!container) throw new Error("Root container missing in index.html");

createRoot(container).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>,
)
