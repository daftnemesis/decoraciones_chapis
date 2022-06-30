import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppRouter } from './routes/AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </BrowserRouter>
)
