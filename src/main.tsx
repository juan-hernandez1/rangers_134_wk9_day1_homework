import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@mui/material/styles"


// internal imports 
import { Home, Shop, Garage } from './components'
import './index.css'
import { theme } from './Theme/themes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme = { theme }>
      <Router>
        <Routes>
          <Route path='/' element={<Home title = {"The Shop"}/>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/garage' element={<Garage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)