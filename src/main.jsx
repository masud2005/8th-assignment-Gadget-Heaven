import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import { CartProvider } from './utility/cartContext.jsx'
import { HelmetProvider } from 'react-helmet-async'
// import { CartProvider } from './utility/cartContext.js'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </StrictMode>,
  </HelmetProvider>
)
