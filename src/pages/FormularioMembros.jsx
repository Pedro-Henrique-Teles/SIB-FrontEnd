import { Button, Checkbox, Input } from "@heroui/react";

export const FormularioMembros = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">EU SOU NOVO</h1>
          <p className="text-sm">Queremos conhecer mais de você!</p>
        </div>
        <form className="space-y-2">
          <div>
            <label htmlFor="nome" className="block mb-1 text-white">
              Nome Completo
            </label>
            <Input
              id="nome"
              placeholder="Digite seu nome completo"
              variant="bordered"
              color="default"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-white">
              Email
            </label>
            <Input
              id="email"
              placeholder="Digite seu e-mail"
              type="email"
              variant="bordered"
              color="default"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block mb-1 text-white">
              Telefone
            </label>
            <Input
              id="telefone"
              placeholder="Digite seu telefone"
              variant="bordered"
              color="default"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="observacao" className="block mb-1 text-white">
              Observações
            </label>
            <Input
              id="observacao"
              placeholder="Digite suas observações"
              variant="bordered"
              color="default"
              className="w-full"
            />
          </div>
          <Checkbox defaultSelected>
            <p className="text-white">Quero ser membro</p>
          </Checkbox>
          <Button className="w-full mt-4 bg-white text-black font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};
