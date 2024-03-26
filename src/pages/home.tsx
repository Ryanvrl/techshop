import FooterDefault from "../components/footerDefault"
import Header from "../components/header"
import SliderMain from "../components/slider"
import SliderProdutos from "../components/sliderProdutos"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">

            <Header />
            <SliderMain />
            <main className="flex flex-col bg-secondary-bg pb-5 w-full">
                <h1 className="text-4xl font-bold text-center my-5">Destaques</h1>
                <SliderProdutos firstProduct={4} lastProduct={11}/>
            </main>
            <FooterDefault />
        </div>
        
    )
}

export default Home