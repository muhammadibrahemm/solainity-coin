import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'
import './index.css'
import { TokenContextProvider } from './components/Context/useContext.jsx'

createRoot(document.getElementById('root')).render(
  <TokenContextProvider>
  <StrictMode>
    <App />
    <ToastContainer 
      bodyClassName="toastBody"
    />
  </StrictMode>
  </TokenContextProvider>
)
