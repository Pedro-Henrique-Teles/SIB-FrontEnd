import { Button } from "@heroui/react";
import Cabecalho from "../../components/NavBar";

function Home() {
  return (
    <div>
      <Cabecalho />
      <h1 className="text-6xl text-center bg-black text-white p-7 mt-5">Teste</h1>
      <Button className="mt-2 text-lg bg-primary" variant="light">
        Ghost
      </Button>
    </div>
  );
}

export default Home;
