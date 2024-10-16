import Header from "../components/Header"

import '../styles/HomeCSS.css'

import LadyBug from "../assets/HomeIMG/LadyBug.svg"
import CardAnt from "../assets/HomeIMG/CardAnt.svg"
import CardBug from "../assets/HomeIMG/CardBug.svg"
import CardSpider from "../assets/HomeIMG/CardSpider.svg"
import GrassHopperFront from "../assets/HomeIMG/GrassHopperFront.svg"
import GrassHopper from "../assets/HomeIMG/GrassHopper.svg"
import Footer from "../components/Footer"


const Home = () => {
    return (
        <>
            {/* Seção com imagem de fundo */}
            <div className="container-fluid HomeMain d-flex align-items-center">
                <div className="row w-100">
                    <div className="col-12">
                        <Header />
                        <div className="txtTitle display-4 fw-bold text-start text-white mb-3 text-wrap w-50">
                            Descubra como identificar insetos!
                        </div>
                        <div className="txtSubtitle fs-5 text-start text-white w-75 mb-4">
                            Explore a biodiversidade dos insetos e tire suas dúvidas na
                            comunidade EntomoKey. Utilizando chaves dicotômicas ilustrativas
                            que facilitarão e tornarão agradável o processo de identificação.
                        </div>
                        <button className="btn btn-custom text-white mb-3">Cadastre-se</button>
                    </div>
                </div>
            </div>

            {/* Outras seções sem imagem de fundo */}
            <div className="container-fluid HomeEnto">
                <div className="row w-100">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center" style={{ height: '100%' }}> {/* Centraliza a imagem na coluna */}
                        <img
                            src={LadyBug}
                            className="img-fluid"
                            style={{ maxWidth: '60%', height: 'auto' }}
                            alt="LadyBug"
                        />
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-start " style={{ paddingTop: '20px' }}> {/* Mantém o texto alinhado ao topo */}
                        <div className="h1 text-white mb-3">ENTOMOLOGIA</div>
                        <p className="fs-5 text-white">
                            Descubra o fascinante universo da entomologia: estude os insetos que moldam nosso ecossistema e aprenda como eles influenciam a vida na Terra!
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="container-fluid HomeCard ">
                <div className="container ">
                    <div className="row text-center ">

                        <div className="col-12 col-md-4 d-flex flex-column align-items-center mt-5">
                            <div className="icon-wrapper">
                                <img src={CardBug} alt="Ícone Comunidade" />
                            </div>
                            <h3 className="text-white">Comunidade</h3>
                            <p className="text-white">
                                Descubra de maneira intuitiva a como saber das ancestralidades dos insetos.
                            </p>
                        </div>

                        <div className="col-12 col-md-4 d-flex flex-column align-items-center mt-5">
                            <div className="icon-wrapper">
                                <img src={CardAnt} alt="Ícone Localização" />
                            </div>
                            <h3 className="text-white">Localização</h3>
                            <p className="text-white">
                                Saiba em quais ambientes e onde são localizados os insetos.
                            </p>
                        </div>

                        <div className="col-12 col-md-4 d-flex flex-column align-items-center mt-5">
                            <div className="icon-wrapper">
                                <img src={CardSpider} alt="Ícone Ilustração" />
                            </div>
                            <h3 className="text-white">Ilustração</h3>
                            <p className="text-white">
                                O site irá fornecer imagens para a identificação dos insetos.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <button className="custom-btn text-decoration-underline mb-3">Saber Mais</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Line 1 */}
            <div className="container-fluid HomeCardLine1" style={{ backgroundColor: '#0f2622', padding: '40px 0' }}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* Imagem à esquerda */}
                        <div className="col-12 col-md-6 order-md-1 order-2 d-flex align-itens-center justify-content-center">
                            <img
                                src={GrassHopperFront}
                                className="img-fluid"
                                alt="Libélula"
                                style={{ borderRadius: '10px', maxWidth: '80%', height: 'auto', marginBottom: '20px' }} // Ajuste para diminuir a imagem
                            />
                        </div>
                        {/* Texto e botão à direita */}
                        <div className="col-12 col-md-6 text-white mb-4 mb-md-0 order-md-1 order-2 text-center text-md-start">
                            <h2>Libélula</h2>
                            <p>
                                As libélulas (Odonata: Anisoptera) são predadores com ciclo bifásico, essenciais no
                                controle de invertebrados.
                            </p>
                            <button className="btn custom-btn btn-primary mt-3 text-decoration-underline" style={{ backgroundColor: '#1f3936', border: 'none' }}>
                                Saber Mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid HomeCardLine2" style={{ backgroundColor: '#0f2622', padding: '40px 0' }}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* Texto e botão à esquerda */}
                        <div className="col-12 col-md-6 text-white mb-4 mb-md-0 order-md-1 order-2 text-center text-md-start" style={{ paddingRight: '20px' }}>
                            <h2>Louva-Deus</h2>
                            <p>
                                Os louva-a-deus (Mantodea) são predadores especializados, conhecidos por sua habilidade de emboscar presas com rapidez e precisão.
                            </p>
                            {/* Botão centralizado em telas pequenas */}
                            <div className="d-flex justify-content-center justify-content-md-start">
                                <button className="btn custom-btn mt-3 text-decoration-underline" style={{ backgroundColor: '#1f3936', border: 'none' }}>
                                    Saber Mais
                                </button>
                            </div>
                        </div>

                        {/* Imagem à direita */}
                        <div className="col-12 col-md-6 order-md-2 order-1 d-flex align-items-center justify-content-center">
                            <img
                                src={GrassHopper}
                                className="img-fluid"
                                alt="Louva-Deus"
                                style={{ borderRadius: '10px', maxWidth: '80%', height: 'auto', marginBottom: '20px' }} // Ajuste para diminuir a imagem
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;