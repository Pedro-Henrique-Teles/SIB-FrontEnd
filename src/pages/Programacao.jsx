export const Programacao = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-32 p-6 md:p-16 lg:p-28">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 md:mb-0">
        junte-se a nós na <br className="hidden md:block" /> igreja no próximo{" "}
        <br className="hidden md:block" />
        culto!
      </h2>
      <div className="w-full md:w-1/2 lg:w-1/3 text-base lg:text-lg space-y-4">
        <h3 className="font-bold">Nossos horários:</h3>
        <p>
          Nossos cultos de fim de semana duram uma hora. Mal podemos esperar
          para conhecê-lo!
        </p>
        <p>
          <span className="font-bold">Domingo</span> - EBD: 9h / Culto: 10h15 e
          19h.
        </p>
        <p>
          <span className="font-bold">Quarta</span> - Culto: 19:30h.
        </p>
      </div>
    </section>
  );
};
