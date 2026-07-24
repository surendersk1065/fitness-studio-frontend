import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseDataProvider from './usecontextdata/UseDataProvider.jsx'
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseDataProvider>
      <App /> 
    </UseDataProvider>
    
  </StrictMode>,
)
