// Punto de entrada de la aplicación.
// Busca el <div id="root"> del index.html y dibuja adentro el componente App.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/style.css'

// React.StrictMode viene con la plantilla de Vite: solo sirve en desarrollo
// para mostrar avisos de posibles errores. No cambia cómo se ve la página.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
