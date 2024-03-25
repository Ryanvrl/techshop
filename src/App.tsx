import './App.css'
import { AdressProvider } from './components/contexts/adressContext'
import { CartProvider } from './components/contexts/cartContext'
import { AppRoutes } from './routes/routes'

function App() {


  return (
    <>
      <CartProvider>
        <AdressProvider>
          <AppRoutes />
        </AdressProvider>
      </CartProvider>
    </>
  )
}

export default App
