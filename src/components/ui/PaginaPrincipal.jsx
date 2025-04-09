import {Button} from "@heroui/react";

export default function PaginaPrincipal() {


    return (
        <div>
            <div className="h-[600px] flex flex-col items-center justify-center bg-gradient-to-r from-[#571f1f] to-black text-white font-black text-center text-5xl font-[arial] gap-10">
                <h1>Deus é por <br/> você, <br/>e nós também.</h1>
                <div className="flex items-center justify-center gap-10">
                    <Button className="bg-white font-black w-60">Cultos</Button>
                    <Button className="bg-white font-black w-60">Endereço</Button>
                    <Button className="bg-white font-black w-60">Doação</Button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-32 p-28">
                <h2 className="text-5xl text-center font-black">junte-se a nós na <br /> igreja no próximo  <br />culto!</h2>
                <div className="w-1/3 text-lg">
                    <h3 className="font-black">Nossos horários:</h3>
                    <p>Nossos cultos de fim de semana duram uma hora. Mal podemos esperar para conhecê-lo!</p>
                    <p><span className="font-black">Domingo</span> - EBD: 9h / Culto: 10h15 e 19h.</p>
                    <p><span className="font-black">Quarta</span> - Culto: 19:30h.</p>
                </div>
            </div>
        </div>
    )
}