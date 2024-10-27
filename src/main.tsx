import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from "react-hot-toast";

import './index.css'
import MainLayout from './layout/MainLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Toaster position="top-right"/>
    <App />
  </StrictMode>,
)