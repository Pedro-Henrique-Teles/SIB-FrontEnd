const PaginaMapa = () => {




    return (
        <div>
            <div className="flex items-center justify-center text-9x1 h-[400px]">
                MAPA
            </div>
            <div className="bg-black h-[300px] text-white flex items-center justify-center gap-[40px]">
                <div className="w-[612px] h-[140px] flex flex-col items-center justify-center border border-solid border-white ">
                    <h1>Contato</h1>
                    <p>☎️(32) 3215-9276</p>
                </div>
                <div className="w-0 h-[170px] border border-white"></div>
                <div className="w-[612px] h-[140px] flex flex-col items-center justify-center border border-solid border-white ">
                    <h1>Endereço</h1>
                    <p>🏠R. Barão de São Marcelino, 426 - Passos, Juiz de Fora</p>
                </div>
            </div>
        </div>
    )
}

export default PaginaMapa