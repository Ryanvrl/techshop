import './App.css'
import { AdressProvider } from './components/contexts/adressContext'
import { CartProvider } from './components/contexts/cartContext'
import { FavoritesProvider } from './components/contexts/favoritesContext'
import { AppRoutes } from './routes/routes'

function App() {


  return (
    <>
      <CartProvider>
        <AdressProvider>
          <FavoritesProvider>
            <AppRoutes />
          </FavoritesProvider>
        </AdressProvider>
      </CartProvider>
    </>
  )
}

export default App
