import "./Cabecalho.css"

const Cabecalho = () => {


    return (
        <header>
            <div className="containerHeader">
                <img src="/cabecalhoImgs/logoSibBranca.png" alt="" className="logoSib"/>
                <ol className="listaHeader">
                    <li><a href="">Programação</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Visão</a></li>
                    <li><a href="">Missão</a></li>
                    <li><a href="">Valores</a></li>
                    <li><a href="">História</a></li>
                    <li><a href="">Contato</a></li>
                </ol>
                <div className="souNovo">
                    <img src="/cabecalhoImgs/instagramIcon.png" alt="" />
                    <button>Eu sou novo</button>
                </div>
            </div>
        </header>
    )
}

export default Cabecalho