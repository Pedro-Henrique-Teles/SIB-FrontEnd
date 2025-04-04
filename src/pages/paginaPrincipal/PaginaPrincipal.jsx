import "./PaginaPrincipal.css"

const PaginaPrincipal = () => {
    return (
        <>
            <div className="containerPaginaPrincipal1">
                <h1>Deus é por você, e nós tambem.</h1>
                <div className="btnsPaginaPrincipal">
                    <button>Cultos</button>
                    <button>Endereço</button>
                    <button>Doação</button>
                </div>
            </div>
            <div className="containerPaginaPrincipal2">
                <h2>junte-se a nós na igreja no próximo culto!</h2>
                <div className="horarioCultos">
                    <h3>Nossos horários:</h3>
                    <p>Nossos cultos de fim de semana duram uma hora. Mal podemos esperar para conhecê-lo!</p>
                    <p><span>Domingo</span> - EBD: 9h / Culto: 10h15 e 19h.</p>
                    <p><span>Quarta</span> - Culto: 19:30h.</p>
                </div>
            </div>
        </>
    )
}

export default PaginaPrincipal