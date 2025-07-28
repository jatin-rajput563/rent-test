import React, { useState } from "react";

const accordionData = [
  {
    title: "Czym jest RentEasy.AI?",
    content:
      "RentEasy.AI to pierwszy w Polsce CRM stworzony od podstaw z myślą o firmach zarządzających najmem. To nie tylko system – to Twój cyfrowy zespół operacyjny, który działa 24/7. Automatyzuje windykację, rozliczenia, komunikację, meldunki, zarządzanie zadaniami i wiele więcej. Dzięki wirtualnej asystentce Zoe oraz modułowej strukturze, RentEasy.AI zastępuje nawet 2–3 etaty, upraszcza codzienną pracę i pozwala skalować biznes bez chaosu.",
  },
  {
    title: "Dla kogo jest ta platforma?",
    content:
      "Platforma jest przeznaczona dla właścicieli nieruchomości, zarządców oraz firm zarządzających wynajmem.",
  },
  {
    title: "Czy muszę instalować jakieś oprogramowanie?",
    content:
      "Nie, RentEasy.AI działa w przeglądarce – nie wymaga instalacji dodatkowego oprogramowania.",
  },
  {
    title: "Czy moje dane są bezpieczne?",
    content:
      "Tak, bezpieczeństwo danych to nasz priorytet. Wszystkie dane są szyfrowane i przechowywane zgodnie z najlepszymi praktykami.",
  },
];

const Najczęściej = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-dark-blue">
          Najczęściej zadawane pytania
        </h2>
        <div className="space-y-6">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border border-[#F0F0F0] rounded-xl bg-white overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-base sm:text-lg font-semibold text-dark-blue">
                  {item.title}
                </span>
                <span className="text-purple-blue text-xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-5 text-sm text-gray-700 leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Najczęściej;
