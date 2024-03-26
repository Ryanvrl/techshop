import FooterDefault from "../components/footerDefault"
import Header from "../components/header"
import SliderProdutos from "../components/sliderProdutos"
import { products } from "../data/productsData"
import ProductCard from "../components/productCard"
import { ChangeEvent, useEffect, useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { FaSearch } from "react-icons/fa"

interface FilterProps {
  price: string[]
  storage: string[]
  color: string[]
  name: string
}

const AllProduts = () => {
  const [productsReveal, setProductsReveal] = useState(products)
  const [price, setPrice] = useState<string[]>([])
  const [storage, setStorage] = useState<string[]>([])
  const [color, setColor] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const [filterReveal, setFilterReveal] = useState<boolean>(true)

  const handleClickRevealFilters = () => {
    setPrice([])
    setStorage([])
    setColor([])
    setFilterReveal(!filterReveal)

  }

  const handleClickStorage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (storage.includes(value)) {
      const filtered = storage.filter((valor) => {
        return valor != value
      })
      return setStorage(filtered)
    }
    setStorage((prevState) => [...prevState, value])
  }

  const handleClickPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (price.includes(value)) {
      const filtered = price.filter((valor) => {
        return valor != value
      })
      return setPrice(filtered)
    }
    setPrice((prevState) => [...prevState, value])
  }
  
  const handleClickColor = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (color.includes(value)) {
      const filtered = color.filter((valor) => {
        return valor != value
      })
      return setColor(filtered)
    }

    setColor((prevState) => [...prevState, value])
  }

  function filters({ price, storage, color, name }: FilterProps) {
    let filtered = products

    const valueMinInitial: number[] = []
    const valueMaxInitial: number[] = []
    price.forEach((item) => {
      const priceSplit: string[] = item.split('-')
      valueMinInitial.push(parseInt(priceSplit[0]))
      valueMaxInitial.push(parseInt(priceSplit[1]))
    })
    const valueMinOrganized: number[] = valueMinInitial.sort()
    const valueMaxOrganized: number[] = valueMaxInitial.sort()   

    if (price.length > 0) {
      filtered = filtered.filter((item) => {
        let reveal = false
        for (let i = 0; i < valueMaxOrganized.length; i++) {
          if (item.price > valueMinOrganized[i] &&
            item.price < valueMaxOrganized[i]) {
            reveal = true
          }
        }
        return reveal
      })
    }

    if (color.length > 0) {
      filtered = filtered.filter((item) => {
        return color.some((value) => {
          return item.color!.toLowerCase().includes(value.toLocaleLowerCase())
        })
      })
    }

    if (storage.length > 0) {
      filtered = filtered.filter((item) => {
        return storage.some((value) => {
          return item.description!.toString().toLocaleLowerCase().includes(value.toLowerCase())
        })
      })
    }

    if (name) {
      filtered = filtered.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase())
      })
    }

    setProductsReveal(filtered)
  }

  useEffect(() => {
    filters({ price, storage, color, name })
  }, [price, storage, color, name])

  return (
   
      <div className="flex flex-col justify-center items-center">
        <Header />
        <section className="bg-secondary-bg w-full">
          <h2 className="text-center py-5 font-bold text-3xl">Novidades</h2>
          <SliderProdutos firstProduct={12} lastProduct={18}/>

          <h2 className="text-center mt-[32px] font-bold text-3xl bg-color-logo p-2 text-white">Todos os produtos</h2>

          <div className="flex justify-center items-center my-2 gap-1">
            <input type="text" className="w-[90%] afterPhone:w-[350px]  rounded-md p-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FaSearch className="text-color-logo" />
          </div>

          {filterReveal &&
            <div className=" flex justify-center items-center">
              <div className="p-1 sm:p-2 flex justify-evenly gap-1 flex-wrap " id="container-filters max-w-[1440px]">
                <div className="bg-primary-bg max-w-max flex flex-col p-2 rounded-md min-w-[140px]">
                  <h3 className="font-bold mb-2">Cor</h3>

                  <label>
                    <input type='checkbox' name='cor' value='Preto' onChange={(e) => handleClickColor(e)} className="mr-1" />
                    Preto
                  </label>

                  <label>
                    <input type='checkbox' name='cor' value='Cinza' onChange={(e) => handleClickColor(e)} className="mr-1" />
                    Cinza
                  </label>

                  <label>
                    <input type='checkbox' name='cor' value='Branco' onChange={(e) => handleClickColor(e)} className="mr-1" />
                    Branco
                  </label>

                  <label>
                    <input type='checkbox' name='cor' value='Laranja' onChange={(e) => handleClickColor(e)} className="mr-1" />
                    Laranja
                  </label>
                </div>

                <div className="bg-primary-bg max-w-max flex flex-col p-2 rounded-md min-w-[140px]">
                  <h4 className="font-bold mb-2">Armazenamento</h4>
                  <label>
                    <input
                      type='checkbox'
                      name='armazenamento'
                      value='64'
                      onChange={(e) => handleClickStorage(e)} className="mr-1"
                    />
                    64 GB
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='armazenamento'
                      value='128'
                      onChange={(e) => handleClickStorage(e)} className="mr-1"
                    />
                    128 GB
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='armazenamento'
                      value='256'
                      onChange={(e) => handleClickStorage(e)} className="mr-1"
                    />
                    256 GB
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='armazenamento'
                      value='512'
                      onChange={(e) => handleClickStorage(e)} className="mr-1"
                    />
                    512 GB
                  </label>
                  <label>
                    <input
                      type='checkbox'
                      name='armazenamento'
                      value='1Tb'
                      onChange={(e) => handleClickStorage(e)} className="mr-1"
                    />
                    1 TB
                  </label>
                </div>

                <div className="bg-primary-bg max-w-max flex flex-col p-2 rounded-md min-w-[140px]">
                  <h4 className="font-bold mb-2">Preço</h4>

                  <label>
                    <input type='checkbox' name='preco' value='0-1000' onChange={(e) => handleClickPrice(e)} className="mr-1" />
                    R$ 0 - R$1000
                  </label>
                  <label>
                    <input type='checkbox' name='preco' value='1001 - 2000' onChange={(e) => handleClickPrice(e)} className="mr-1"
                    />
                    R$ 1.001 - R$ 2.000
                  </label>
                  <label>
                    <input type='checkbox' name='preco' value='2001 - 3000' onChange={(e) => handleClickPrice(e)} className="mr-1"
                    />
                    R$ 2.001 - R$ 3.000
                  </label>
                  <label>
                    <input type='checkbox' name='preco' value='3001-4000' onChange={(e) => handleClickPrice(e)} className="mr-1" />
                    R$ 3.001 - R$ 4.000
                  </label>
                  <label>
                    <input type='checkbox' name='preco' value='4001-5000' onChange={(e) => handleClickPrice(e)} className="mr-1" />
                    R$ 4.001 - R$ 5.000
                  </label>
                  <label>
                    <input type='checkbox' name='preco' value='5001-6000' onChange={(e) => handleClickPrice(e)} className="mr-1" />
                    R$ 5.001 - R$ 6.000
                  </label>
                  <label>
                    <input type='checkbox' name='preco' value='6001-9999' onChange={(e) => handleClickPrice(e)} className="mr-1" />
                    R$ 6.001 - R$ 9.999
                  </label>
                </div>
              </div>
            </div>
          }
          <div className="flex justify-center">
            <button className="p-2 flex justify-center items-center hover:text-color-logo" onClick={handleClickRevealFilters}>
              Filtros
              {filterReveal && <IoIosArrowUp />}
              {!filterReveal && <IoIosArrowDown />}

            </button>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 afterPhone:grid-cols-3 lg:grid-cols-4 gap-2 py-7 px-2 max-w-[1440px] lg:gap-14">
              {
                productsReveal.map((product) =>
                  <ProductCard product={product} key={product.id} />
                )
              }
            </div>
          </div>

          {productsReveal.length == 0 &&
            <div className="flex justify-center items-center p-4 pb-8">
              Não encontramos nenhum produto 😭
            </div>
          }

        </section>
        <FooterDefault />
      </div>
      )
}






      export default AllProduts