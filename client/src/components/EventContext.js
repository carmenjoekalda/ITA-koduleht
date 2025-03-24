import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      group: "KÕIK",
      date: "2025-03-11",
      heading: "EMAKEELENÄDAL VOCOS",
      description:
        "14. märts valiti emakeelepäevaks kui eesti esimese kirjaniku Kristjan Jaak Petersoni (1801-1822) sünnipäev. Kõik, kes soovivad, saavad 14. märtsil osa võtta! Lisaks toimub viktoriin kolmes astmes, mille auhinnaks on Valdur Mikita teos “Kodukäija koodeks”.",
    },
    {
      id: 2,
      group: "KÕIK",
      date: "2025-03-20",
      heading: "“AASTA TEGIJA 2025” KUTSEVÕISTLUSED ON PEETUD!",
      description:
        "“Aasta Tegija 2025” tänugala tõi VOCO kogukonna taas kokku! “Aasta Tegija” sündmus ei tähista üksnes parimaid tulemusi, aga ka ühist pingutust, oskuste väärtustamist ja koostööd.",
    },
    {
      id: 3,
      group: "KÕIK",
      date: "2025-04-10",
      heading: "VOCO AVATUD UKSED 10. APRILLIL",
      description:
        'Meie VOCO "Avatud Uste Päev" toimub sel aastal 10. aprillil 2025, ning ootame taas rohkelt põhikooliõpilasi ja nende õpetajaid, et tutvustada meie kooli erialasid, võimalusi ja õpikeskkonda.',
    },
    {
      id: 4,
      group: "KÕIK",
      date: "2025-03-21",
      heading: '"KAS SINA JUHID RAHA VÕI JUHIB RAHA SIND?" ',
      description:
        "Ettevõtlusõpetajad Maire Kask ja Mariin Alatsei kutsuvad osalema Eesti Pangaliidu veebikonverentsi ühisvaatamisele!\nToimumiskoht: Põllu õppehoone, avatud ala A209.\nKellaaeg: 12.00–14.30.",
    },
  ]);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
