
const PaginaPrincipal = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#571f1f] to-black h-[600px] text-white flex flex-col justify-center items-center font-black font-[arial] gap-[100px]">
                <h1 className="text-[60px] w-[510px] h-[260px] text-center">Deus é por você, e nós tambem.</h1>
                <div className="flex items-center justify-center gap-[30px]">
                    <button className="bg-white text-black w-[235px] h-[40px] hover:border-[2px] border-[#571f1f]">Cultos</button>
                    <button className="bg-white text-black w-[235px] h-[40px] hover:border-[2px] border-[#571f1f]">Endereço</button>
                    <button className="bg-white text-black w-[235px] h-[40px] hover:border-[2px] border-[#571f1f]">Doação</button>
                </div>
            </div>
            <div className="flex items-center justify-center font-[arial] p-[100px]">
                <h2 className="font-black text-[50px] w-[555px] h-[220px] text-center">junte-se a nós na igreja no próximo culto!</h2>
                <div className="w-[600px]">
                    <h3 className="text-[35px] font-black">Nossos horários:</h3>
                    <p>Nossos cultos de fim de semana duram uma hora. Mal podemos esperar para conhecê-lo!</p>
                    <p><span className="font-black">Domingo</span> - EBD: 9h / Culto: 10h15 e 19h.</p>
                    <p><span className="font-black">Quarta</span> - Culto: 19:30h.</p>
                </div>
            </div>
        </>
    )
}

export default PaginaPrincipal