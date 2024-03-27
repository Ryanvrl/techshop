import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import AllProduts from "../pages/allProduts"
import Account from "../pages/account"
import ProductInfo from "../pages/productInfo"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<AllProduts />}/>
                <Route path="/conta" element={<Account />}/>
                <Route path="/produtos/:idProduct" id="" element={<ProductInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }