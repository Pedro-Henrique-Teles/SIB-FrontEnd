import React from 'react';

const Card = ({ title, icon, text, background }) => {
  const backgroundColors = {
    black: 'bg-black text-white',
    white: 'bg-white text-black',
    GradianteVinho: 'bg-gradient-to-r from-[#571f1f] to-[#2b0717] text-white',
  };

  const barColor = background === 'white' ? 'bg-black' : 'bg-white';

  return (
    <section className={`py-20 px-4 ${backgroundColors[background] || ''}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="flex items-start gap-6 relative">
          
          <div className="flex flex-col items-center">
            <div className={`w-2 h-2 ${barColor} rounded-full mb-1`}></div>
            <div className={`w-px ${barColor} flex-1 min-h-[200px]`}></div>
            <div className={`w-2 h-2 ${barColor} rounded-full mt-1`}></div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">• {title}:</h2>
            <img src={icon} alt={`${title} ícone`} className="w-28 md:w-32" />
            <p className="text-lg leading-relaxed whitespace-pre-line">{text}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Card;
