import React from 'react'
import './App.css'
import "./PaginaPrincipal.jsx"
import PaginaPrincipal from './PaginaPrincipal.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  

  return (
          <BrowserRouter>
            <Routes>
              <Route path = '/' element = {<PaginaPrincipal></PaginaPrincipal>}></Route>
                  
            </Routes>
          
          
          
          </BrowserRouter>

    
  )
}

export default App
