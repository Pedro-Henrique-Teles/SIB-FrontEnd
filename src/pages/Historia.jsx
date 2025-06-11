export const Historia = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-[25%] bg-black flex items-center justify-center p-4 md:p-8">
        <img
          src="../img/icons/logoSibBranca.png"
          alt="Logo da Igreja"
          className="h-32 md:h-48"
        />
      </div>

      <div className="w-full md:w-[75%] bg-gradient-to-r from-[#571f1f] via-[#2b0717] to-black flex items-center justify-center p-4 md:p-8">
        <div className="text-white text-center md:text-left text-base sm:text-xl md:text-2xl lg:text-3xl space-y-4 px-4 sm:px-8 md:px-12 lg:px-16 py-[10rem]">
          <p className="mb-4">
            A Igreja  começou com um grupo de irmãos se reunindo na casa do .... <br /> O desafio era plantar uma igreja no bairro .... <br /> O bairro <br /> No início de 19..., o grupo de irmãos abriu as atividades ao público, no bairro.
          </p>
        </div>
      </div>
    </div>
  );
};
