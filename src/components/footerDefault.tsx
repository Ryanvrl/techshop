import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"

const FooterDefault = () => {
    return (
        <footer className="min-h-[200px] flex flex-col justify-center items-center">

            <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-4 p-4 gap-6 md:gap-20 justify-evenly">
                
                <div className="mt-2">
                    <h3 className="font-bold text-sm sm:text-xl my-2">
                        Quem somos nós?
                    </h3>

                    <ul className="text-sm md:text-base">
                        <li className="mt-2">Sobre a Techshop</li>
                        <li className="mt-2">Informações gerais</li>
                        <li className="mt-2">Comunidade</li>
                    </ul>
                </div>

                <div className="mt-2">
                    <h3 className="font-bold text-sm sm:text-xl my-2">
                        Trabalhe conosco
                    </h3>

                    <ul className="text-sm md:text-base">
                        <li className="mt-2">Seja um revendedor</li>
                        <li className="mt-2">Anuncie seus produtos</li>
                        <li className="mt-2">Participe das entregas</li>
                    </ul>
                </div>

                <div className="mt-2">
                    <h3 className="font-bold text-sm sm:text-xl my-2">
                        Pagamento
                    </h3>

                    <ul className="text-sm md:text-base">
                        <li className="mt-2">Meios de pagamento</li>
                        <li className="mt-2">Pague com pontos</li>
                        <li className="mt-2">Cashback</li>
                    </ul>
                </div>

                <div className="mt-2">
                    <h3 className="font-bold text-sm sm:text-xl my-2">
                        Precisa de ajuda?
                    </h3>

                    <ul className="text-sm md:text-base">
                        <li className="mt-2">Conta</li>
                        <li className="mt-2">Devoluções e reembolsos</li>
                        <li className="mt-2">Ajuda</li>
                    </ul>
                </div>

            </div>

            <h3 className="mt-3">Techshop</h3>
            <div className="flex gap-4 pb-3">
                <FaInstagram className="hover:text-color-logo" size={'20px'} />
                <FaFacebook className="hover:text-color-logo" size={'20px'} />
                <FaTwitter className="hover:text-color-logo" size={'20px'} />
            </div>
        </footer>
    )
}

export default FooterDefault