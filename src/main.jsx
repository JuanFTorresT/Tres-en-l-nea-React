import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//crea la raiz del dom donde se van a renderizar los componentes de react y luego los renderiz con .render
createRoot(document.getElementById('root')).render(
  //stricmode renderiz tus componentes una vez más con el objetivo de encontrar errores
  <StrictMode>
    <App />
  </StrictMode>,
)
