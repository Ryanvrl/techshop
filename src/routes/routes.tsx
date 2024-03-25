import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import AllProduts from "../pages/allProduts"
import Account from "../pages/account"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<AllProduts />}/>
                <Route path="/conta" element={<Account />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }