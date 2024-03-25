import { useContext, useState } from 'react'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { getCep } from '../services/requestApi'
import { AdressContext } from './contexts/adressContext'



const CepModal = () => {
    const [adress, setAdress] = useState<string>('')
    const { cep, setCep } = useContext(AdressContext)
    const [error, setError] = useState<string | null>(null)

    const handlePressEnter = (e: React.KeyboardEvent) => {
        setError(null)
        if (e.key == 'Enter') {
            handleSearch()
        }
    }

    const handleSearch = async () => {
        setError(null)
        if (adress == '') {
            document.getElementById('error-cep')?.classList.remove('hidden')
            setAdress('')
            setCep({
                logradouro: '',
                cep: '',
                localidade: '',
                bairro: '',
                uf: ''
            })
            return
        }

        const response = await getCep(adress).then(data => {
            if (data.erro) {
                throw Error(' failed to fetch')
            }
            setCep(data)
            setError(null)
        }).catch((e) => {
            document.getElementById('error-fetch-cep')?.classList.remove('hidden')
            setCep({
                logradouro: '',
                cep: '',
                localidade: '',
                bairro: '',
                uf: ''
            })
            setError(e.message)
        })
        response
    }

    const handleClickRemoveAdress = () => {
        setAdress('')
        setCep({
            logradouro: '',
            cep: '',
            localidade: '',
            bairro: '',
            uf: ''
        })
        setError(null)
    }


    const handleClickCepBtn = () => {
        document.getElementById('cep-modal')?.classList.remove('hidden')
        document.getElementById('cep-modal')?.classList.add('flex')
        document.body.style.overflow = "hidden"
    }

    const handleClickOutCepModal = (e: EventTarget) => {
        if (e === document.getElementById('cep-modal')) {
            document.getElementById('cep-modal')?.classList.remove('flex')
            document.getElementById('cep-modal')?.classList.add('hidden')
            document.body.style.overflow = "auto"
        }
    }

    return (
        <>
            <button className="flex justify-center items-center hover:opacity-90 gap-1 hover:scale-105" onClick={handleClickCepBtn}>
                <span className="text-[14px] md:text-xl">
                    Insira aqui a sua localização
                </span>
                <MdLocationPin />
            </button>

            <div className="bg-black/50 z-[99] w-full h-lvh top-0 left-0 fixed justify-center items-center hidden" id="cep-modal" onClick={(e) => handleClickOutCepModal(e.target)}>
                <div className="bg-white p-3 min-h-[260px] max-h-[450px] w-[90%] md:w-[600px] rounded-md overflow-auto flex flex-col ">
                    <div className="flex items-center justify-center gap-1">
                        <input type="text" maxLength={8} placeholder="Digite seu CEP" id="adress" className="w-full border-2 p-1 rounded-md my-2 border-gray-500" value={adress} onChange={e => setAdress(e.target.value)} onKeyUp={handlePressEnter} />
                        <button >
                            <FaSearch className='text-color-logo' onClick={handleSearch} />
                        </button>
                    </div>

                    <p className='font-semibold'>Apenas numeros*</p>

                    {cep.bairro != '' &&
                        <div className='mt-5 border-color-logo border-solid border-[1px] rounded-md p-2 flex items-center justify-between'>
                            <div>
                                <p className='mt-1'>{cep.logradouro}</p>
                                <p className='mt-1'>Bairro: {cep.bairro}</p>
                                <p className='mt-1'>CEP: {cep.cep}</p>
                                <p className='mt-1'>Cidade: {cep.localidade}</p>
                                <p className='mt-1'>Estado: {cep.uf}</p>
                            </div>
                            <FaTrashAlt className='text-red-500 cursor-pointer' onClick={handleClickRemoveAdress} />
                        </div>
                    }

                    {(error && adress.length != 0) &&
                        <div className='text-red-500 flex justify-center items-center '>
                            Não encontramos esse CEP. {error}
                        </div>

                    }
                </div>
            </div>
        </>

    )
}

export default CepModal