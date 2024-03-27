import { createContext, useState } from "react";
import { productsProps } from "../../types/types";

const FavoritesContext = createContext<any>([])

const getFavoritesFromLocalStore = () => {
    if (localStorage.getItem('favorites') == null) {
        let favorites: productsProps[] = []
        return favorites
    }

    const favorites: productsProps[] = JSON.parse(localStorage.getItem('favorites') || '')
    return favorites
}

const FavoritesProvider = (props: any) => {
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStore)

    localStorage.setItem("favorites", JSON.stringify(favorites))
    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesProvider, FavoritesContext }