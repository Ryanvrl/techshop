import { useParams } from "react-router-dom"
import FooterDefault from "../components/footerDefault"
import Header from "../components/header"
import { products } from "../data/productsData"
import { useContext, useEffect, useState } from "react"
import { FaHeart } from "react-icons/fa6"
import { CiHeart } from "react-icons/ci"
import { FavoritesContext } from "../components/contexts/favoritesContext"
import { productsProps } from "../types/productsTypes"
import { CartContext } from "../components/contexts/cartContext"

const ProductInfo = () => {
    const [id, setId] = useState<any>(null)
    const { favorites, setFavorites } = useContext(FavoritesContext)
    const [itemIsFavorite, setItemIsFavorite] = useState(false)
    const { cart, setCart } = useContext(CartContext)

    const handleClickAddProduct = ({
        id,
        name,
        description,
        color,
        img,
        price,
    }: productsProps) => {
        const existingItem = cart.find((item: productsProps) =>
            item.id === id)
        if (existingItem) {
            existingItem.quantity += 1
            const newQuantity = [...cart]
            setCart(newQuantity)
            return
        }

        const newProduct: any[] = [...cart, {
            id,
            name,
            description,
            color,
            img,
            price,
            quantity: 1
        }]
        setCart(newProduct)
    }

    const handleClickFavorite = ({
        id,
        name,
        description,
        color,
        img,
        price,
    }: productsProps) => {
        if (itemIsFavorite) {
            const index = favorites.findIndex((item: any) => item.id == id
            )
            favorites.splice(index, 1)
            const newFavorites = [...favorites]
            setFavorites(newFavorites)
            setItemIsFavorite(false)
            return
        }

        setItemIsFavorite(true)
        const newFavorites: any[] = [...favorites, {
            id,
            name,
            description,
            color,
            img,
            price,
            quantity: 1
        }]
        setFavorites(newFavorites)
    }

    const idParams = useParams()
    useEffect(() => {
        const idResult = (idParams.idProduct)
        setId(idResult)
        const checkFavorite = favorites.find((item: productsProps) =>
            item.id == id
        )
        if (checkFavorite) {
            setItemIsFavorite(true)
        }
    }, [id, favorites])

    return (
        <div className="flex flex-col items-center">
            <Header />
            <section className="bg-[#F9F9F9] w-full items-center flex flex-col py-[50px] sm:py-[100px]">
                {id != null &&
                    <div className="flex flex-col md:flex-row max-w-[1440px] md:gap-[70px] items-center justify-center">
                        <img src={products[id].img} alt={products[id].name} className="max-w-[300px] md:w-[350px] md:max-w-[350px] rounded-md afterPhone:m-2" />


                        <div className=" min-w-[280px] md:max-w-[50%] flex justify-center items-center flex-col gap-3">
                            <h3 className="font-bold text-center text-2xl">
                                {products[id].name}
                            </h3>
                            <p className="text-center md:text-xl">{products[id].description}</p>
                            <p className="font-bold">{products[id].color}</p>

                            <div className="flex justify-center  md:justify-between w-full mt-7 gap-4 afterPhone:gap-10">
                                <button onClick={() => handleClickFavorite(products[id])}>
                                    {itemIsFavorite == true
                                        &&
                                        <FaHeart size={'20px'} color="red" />
                                    }

                                    {itemIsFavorite == false &&
                                        <CiHeart size={'20px'} color="red" />

                                    }

                                </button>

                                <button className="bg-green-500 py-1 px-2 rounded-md text-white" onClick={() => handleClickAddProduct(products[id])}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>

                }

            </section>
            <FooterDefault />
        </div>
    )
}

export default ProductInfo