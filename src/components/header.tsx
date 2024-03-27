import { BsList } from "react-icons/bs"
import { FaCartShopping } from "react-icons/fa6"
import { useContext, useState } from "react"
import { CartContext } from "./contexts/cartContext"
import { productsProps } from "../types/types"
import { FaTrashAlt } from "react-icons/fa"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"
import SideBarMain from "./navBarMain"
import CepModal from "./cepModal"


const Header = () => {
    const { cart, setCart } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [sideBar, setSideBar] = useState(false)

   

    const showSideBar = () => {
        document.body.style.overflow = "hidden"
        setSideBar(!sideBar)
    }

    const handleClickRemoveQuantity = (product: productsProps) => {
        const index = cart.findIndex((item: productsProps) => item.name == product.name)
        const item: productsProps = cart[index]
        if (item.quantity <= 1) {
            handleClickRemoveProduct(item.id)
            totalValueCart()
            return
        }
        item.quantity -= 1
        const newCart = [...cart]
        setCart(newCart)
        totalValueCart()
    }

    const handleClickAddQuantity = (product: productsProps) => {
        const index = cart.findIndex((item: productsProps) => item.name == product.name)
        const item: productsProps = cart[index]
        if (item.quantity >= 99) {
            alert('Não é possivel fazer um pedido maior que 99 itens.')
            return
        }
        item.quantity += 1
        const newCart = [...cart]
        setCart(newCart)
        totalValueCart()
    }

    const handleClickRemoveProduct = (id: number) => {
        const index = cart.findIndex((item: productsProps) => item.id === id)
        cart.splice(index, 1)
        const newCart = [...cart]
        setCart(newCart)
        totalValueCart()
    }

    const handleClickOutCartModal = (e: EventTarget) => {
        if (e === document.getElementById('cart-modal')) {
            document.getElementById('cart-modal')?.classList.remove('flex')
            document.getElementById('cart-modal')?.classList.add('hidden')
            document.body.style.overflow = "auto"
        }
    }

    const handleClickBtnClose = () => {
        document.getElementById('cart-modal')?.classList.remove('flex')
        document.getElementById('cart-modal')?.classList.add('hidden')
        document.body.style.overflow = "auto"
    }

    const totalValueCart = () => {
        let allTotal = 0
        cart.map((product: productsProps) => {
            allTotal += product.price * product.quantity
        })
        setTotal(allTotal)
    }

    const productValue = (product: productsProps) => {
        let productValue = product.price * product.quantity
        return productValue.toFixed(2)
    }

    const handleClickCartBtn = () => {
        totalValueCart()
        document.getElementById('cart-modal')?.classList.remove('hidden')
        document.getElementById('cart-modal')?.classList.add('flex')
        document.body.style.overflow = "hidden"
    }
    return (
        <>
            <header className="bg-primary-bg flex flex-col justify-center items-center px-1 md:px-4 w-full max-screen:w-[1440px]">
                <div className="py-3 text-center">
                    <a href="/" className="font-bold text-4xl ">
                        <h1 className="text-gray-600">
                            <span className=" text-color-logo inline">
                                Tech
                            </span>
                            shop
                        </h1>
                    </a>
                </div>

                <div className="flex justify-between items-center py-2 w-full ">
                    <button>
                        <BsList className="cursor-pointer  hover:bg-color-logo p-2 rounded-full hover:text-white transition ease-in-out delay-100" size={'40px'} onClick={() => showSideBar()} />
                    </button>
                    <CepModal />
                    <button className="p-2 hover:bg-color-logo hover:text-white rounded-full transition ease-in-out delay-10 cursor-pointer" onClick={handleClickCartBtn}>
                        <FaCartShopping />
                    </button>
                </div>
            </header>

            <div className="bg-black/50 z-[99] w-full h-lvh top-0 left-0 fixed justify-center items-center hidden" id="cart-modal" onClick={(e) => handleClickOutCartModal(e.target)}>
                <div className="bg-white p-3 min-h-[300px] max-h-[450px] w-[90%] md:w-[600px] rounded-md overflow-auto flex flex-col justify-between">
                    <h2 className="text-center font-bold text-2xl">Meu carrinho</h2>

                    {cart.length == 0 &&
                        <div className="flex justify-center items-center">
                            <h3>
                                Seu carrinho está vazio
                            </h3>
                        </div>
                    }

                    <div className="p-2">
                        {
                            cart.map((product: productsProps) =>
                                <div className="flex items-left my-2 flex-col afterPhone:flex-row border-black/20 border-b p-2 justify-between" key={product.id}>
                                    <div className="flex">
                                        <img src={product.img} alt="" className="h-[80px] w-[80px]" />
                                        <div className="px-3">
                                            <h3 className="font-bold">{product.name}</h3>
                                            <p>{product.description}</p>
                                            <p>{product.color}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end justify-center">
                                        <h4 className="font-bold mt-3">R$ {productValue(product)}</h4>
                                        <div className="flex gap-3 items-center">
                                            <div className="flex items-center justify-left gap-2 mt-1">
                                                <CiCircleMinus size={'25px'} className="cursor-pointer" onClick={() => handleClickRemoveQuantity(product)} />
                                                <p>{product.quantity}</p>
                                                <CiCirclePlus size={'25px'}
                                                    className="cursor-pointer" onClick={() => handleClickAddQuantity(product)} />
                                            </div>
                                            <FaTrashAlt className="text-red-500 cursor-pointer p-1" size={'25px'} onClick={() => handleClickRemoveProduct(product.id)} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div>
                        <div>
                            <h3 className="font-bold">Total</h3>
                            R$ {total.toFixed(2)}
                        </div>
                        <div className="flex justify-between my-2 items-center">
                            <button className="p-2 bg-red-500 rounded-md text-white flex items-center justify-center" onClick={() => handleClickBtnClose()}>Fechar</button>
                            <button className="p-2 bg-green-500 rounded-md text-white justify-center">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            

            {sideBar && <SideBarMain active={setSideBar} />}
        </>
    )
}

export default Header