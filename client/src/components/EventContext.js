import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      group: "Ita 23",
      date: "2025-03-20",
      heading: "Sündmuse nimi",
      description:
        "Konkreetse sündmuse juures on kirjas nimetus, toimumise aeg ja koht ning võimalus panna kirja sündmusega seotud õppegrupi tähis või kogu osakonnale mõeldud ürituse korral märge kogu osakonnale.",
    },
    {
      id: 2,
      group: "Ita 22",
      date: "2025-03-21",
      heading: "Sündmuse nimi 2",
      description:
        "Konkreetse sündmuse juures on kirjas nimetus, toimumise aeg ja koht ning võimalus panna kirja sündmusega seotud õppegrupi tähis või kogu osakonnale mõeldud ürituse korral märge kogu osakonnale.",
    },
  ]);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
