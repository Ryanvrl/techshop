export type productsProps = {
    id: number
    name: string,
    description: string,
    color: string,
    img: string,
    price: number,
    quantity: number,
}

export type cepProps = {
    logradouro: string,
    cep: string,
    localidade: string
    bairro: string
    uf: string
}