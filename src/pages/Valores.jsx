import iconeValores from "../../public/img/icons/iconeValores.png";
import Card from "../components/Card";

export const Valores = () => {
  return (
    <Card
      title="Valores"
      icon={iconeValores}
      text={
        "• Liderança Crível – Igreja Expositiva\n• Membresia Saudável – Igreja Missional"
      }
      background="white"
    />
  );
};
