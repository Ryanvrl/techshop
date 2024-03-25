
import { FaCartPlus } from 'react-icons/fa6'
import { productsProps } from '../types/productsTypes'
import { useContext } from 'react'
import { CartContext } from './contexts/cartContext'

const ProductCard = ({product}: any) => {
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
    return (
        <div className="p-2 afterPhone:p-3 sm:p-4 rounded-md my-0 mx-auto bg-[#F9F9F9]  flex flex-col justify-between">
            <h3 className="font-bold">
                {product.name}
            </h3>
            <img src={product.img} alt={product.name} className="w-[130px] h-[150px]  md:w-[230px] md:h-[230px] my-3" />
            <div className="flex justify-between mt-2">
                <span >R$ {product.price}</span>
                <FaCartPlus className="hover:text-color-logo cursor-pointer p-1" size={'30px'} onClick={() => handleClickAddProduct(product)} />
            </div>
        </div>
    )
}

export default ProductCard