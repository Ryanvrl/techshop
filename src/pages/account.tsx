import { useContext, useState } from 'react'
import FooterDefault from '../components/footerDefault'
import Header from '../components/header'
import { AdressContext } from '../components/contexts/adressContext'
import imgPerfil from '../assets/foto-perfil.png'
import { FavoritesContext } from '../components/contexts/favoritesContext'
import ProductCard from '../components/productCard'

const getNameFromLocalStore = () => {
    if (localStorage.getItem('name') == null) {
        let name: string | null = null
        return name
    }
    const name = JSON.parse(localStorage.getItem('name') || '')
    return name
}

const Account = () => {
    const { cep } = useContext(AdressContext)
    const [name, setName] = useState(getNameFromLocalStore)
    const [valueInput, setValueInput] = useState<string | null>(null)
    const { favorites } = useContext(FavoritesContext)

    const handlePressEnter = (e: React.KeyboardEvent) => {
        if (e.key == 'Enter') {
            setName(valueInput)
        }
    }
    console.log(favorites);


    localStorage.setItem("name", JSON.stringify(name))
    return (
        <div className='flex flex-col justify-center items-center'>
            <Header />
            <main className='bg-secondary-bg p-4 w-full flex justify-center items-center flex-col'>
                <div className='flex justify-center items-center flex-col mt-3'>
                    <h2 className='text-center font-bold text-3xl'>Conta</h2>
                    <div className='my-3 p-3 flex flex-col justify-center items-center'>
                        <img src={imgPerfil} alt="Imagem de perfil" className='w-[200px] rounded-full' />
                        {name == null &&
                            <div className='m-7'>

                                <input type="text" placeholder='Digite seu nome' className='p-1 rounded-md' maxLength={20} onChange={(e) => setValueInput(e.target.value)} id='name-input' onKeyUp={handlePressEnter} />

                                <button className='bg-green-500 ml-1 text-white p-1 rounded-md' onClick={() => setName(valueInput)}>Confirmar</button>
                            </div>
                        }

                        {name != null &&
                            <div className='flex mt-5'>
                                Nome:
                                <h4 className='first-letter:capitalize ml-1 font-bold'>{name}</h4>
                            </div>
                        }
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-center font-bold text-3xl'>Endereço</h3>
                    {cep.logradouro != '' &&
                        <div className='flex flex-col justify-center items-center min-h-[150px]'>
                            <p className='mt-1'>{cep.logradouro}</p>
                            <p className='mt-1'>Bairro: {cep.bairro}</p>
                            <p className='mt-1'>CEP: {cep.cep}</p>
                            <p className='mt-1'>Cidade: {cep.localidade}</p>
                            <p className='mt-1'>Estado: {cep.uf}</p>
                        </div>
                    }
                    {cep.logradouro == '' &&
                        <div className='p-4 flex justify-center items-center max-w-[300px] text-center'>
                            Nenhum endereço cadastrado, pressione o botão na parte superior da tela.
                        </div>
                    }
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-center font-bold text-3xl my-9'>Favoritos</h3>

                    {favorites.length > 0 &&
                        <div className='grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4'>
                            {favorites
                                .map((product: any) =>
                                    <div className='' key={product.id}>
                                        <ProductCard product={product} key={product.id} />
                                    </div>
                                )}
                        </div>
                    }

                    {favorites.length == 0 &&
                        <div className='flex justify-center items-center pb-6'>
                            <p>Nenhum produto selecionado como favorito 😭</p>
                        </div>
                    }
                
        </div>
            </main >

    <FooterDefault />
        </div >
    )
}
export default Account