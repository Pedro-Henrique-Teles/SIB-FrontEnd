// REMOVA ESSE IMPORT:
// import iconeValores from "../../public/img/icons/iconeValores.png";
import Card from "../components/Card";

export const Valores = () => {
  return (
    <Card
      title="Valores"
      // CORREÇÃO: Use a string do caminho
      icon={"/img/icons/iconeValores.png"}
      text={
        "Texto Pendente"
      }
      background="white"
    />
  );
};