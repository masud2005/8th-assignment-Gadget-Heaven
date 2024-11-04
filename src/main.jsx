import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import { CartProvider } from './utility/cartContext.jsx'
// import { CartProvider } from './utility/cartContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>

      <RouterProvider router={routes} />
    </CartProvider>
    {/* <CartProvider> */}

    {/* </CartProvider> */}
    {/* <App /> */}
  </StrictMode>,
)
