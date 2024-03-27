import { Swiper, SwiperSlide } from "swiper/react"
import { FaCartPlus } from "react-icons/fa6"
import { products } from "../data/productsData"
import { useContext, useState } from "react"
import { CartContext } from "../components/contexts/cartContext";
import { productsProps } from "../types/types";
import { Link } from "react-router-dom";

const SliderProdutos = ({ firstProduct, lastProduct }: any) => {
    const [slides, setSlides] = useState<number>(4)
    const { cart, setCart } = useContext(CartContext)

    window.addEventListener('load', () => {
        const widthFixed = screen.width
        const width = window.innerWidth
        if (widthFixed < 500) setSlides(2)
        if (width > 551 && width < 1039) setSlides(3)
        if (width >= 1040) setSlides(4)
    })

    window.addEventListener('resize', () => {
        const width = window.innerWidth
        if (width >= 1040) setSlides(4)
        if (width > 551 && width < 1039) setSlides(3)
        if (width < 550) setSlides(2)
    })

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
        <div className="py-2">
            {
                <Swiper
                    autoplay={false}
                    slidesPerView={slides}
                    navigation
                    className='max-w-[1440px] mx-4 p-3 '
                >
                    {
                        products
                            .slice(firstProduct, lastProduct)
                            .map((product) =>
                                <SwiperSlide className="rounded-md justify-center w-max" key={product.id}>

                                    <div className="bg-[#F9F9F9] rounded-md w-max my-0 mx-auto flex flex-col justify-between">
                                        <Link to={`/produtos/${product.id}`} className=" p-3 sm:p-4">
                                            <h3 className="font-bold">{product.name}</h3>
                                            <img src={product.img} alt={product.name} className="w-[115px] h-[135px] afterPhone:w-[130px] afterPhone:h-[150px] md:w-[230px] md:h-[230px] my-3" />
                                        </Link>
                                        <div className="flex justify-between mt-2 p-3 sm:p-4p-3 sm:p-4">
                                            <span >R$ {product.price}</span>
                                            <FaCartPlus className="hover:text-color-logo cursor-pointer p-1" size={'30px'} onClick={() => handleClickAddProduct(product)} />
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                    }
                </Swiper>
            }
        </div >
    )
}

export default SliderProdutos