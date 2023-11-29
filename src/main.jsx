import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './pages/Home.jsx'
import TemperaturasAdicionadas from './pages/TemperaturasAdicionadas.jsx'
import TemperaturasExcluidas from './pages/TemperaturasExcluidas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/temperaturas-adicionadas' element={<TemperaturasAdicionadas/>} />
      <Route path='/temperaturas-excluidas' element={<TemperaturasExcluidas/>} />
    </Routes>
  </BrowserRouter>,
)
