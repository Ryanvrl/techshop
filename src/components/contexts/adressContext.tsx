import { createContext, useState } from "react";
import { cepProps } from "../../types/productsTypes";

const AdressContext = createContext<any>([])

const getCepFromLocalStore = () => {
    if (localStorage.getItem('cep') == null) {
        let cep: cepProps | null = {
            logradouro: '',
            cep: '',
            localidade: '',
            bairro: '',
            uf: ''
        }
        return cep
    }

    const cep = JSON.parse(localStorage.getItem('cep') || '')
    return cep
}

const AdressProvider = (props: any) => {
    const [cep, setCep] = useState(getCepFromLocalStore)

    localStorage.setItem("cep", JSON.stringify(cep))
    return (
        <AdressContext.Provider value={{ cep, setCep }}>
            {props.children}
        </AdressContext.Provider>
    )
}

export { AdressProvider, AdressContext }