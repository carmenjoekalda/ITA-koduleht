import React, { useState, useEffect } from "react";
import "./EventsCalendar.css";
import { useEvents } from "./EventContext";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const months = [
    "Jaanuar",
    "Veebruar",
    "Märts",
    "Aprill",
    "Mai",
    "Juuni",
    "Juuli",
    "August",
    "September",
    "Oktoober",
    "November",
    "Detsember",
  ];
  const { events, setEvents } = useEvents();

  const handlePrev = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNext = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div className="page-container">
      <div className="page2-top d-flex justify-content-between align-items-center px-4">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <button
              className="triangle-btn left me-2"
              onClick={handlePrev}
            ></button>
            <div className="page2-month-selector mx-2">
              <h3>{months[monthIndex]}</h3>
            </div>
            <button
              className="triangle-btn right ms-2"
              onClick={handleNext}
            ></button>
          </div>
          <input
            type="text"
            placeholder="Õppegrupp..."
            className="search p-2 ms-2"
          />
        </div>
        <h1 className="page2-text p-0">{currentYear}</h1>
      </div>
      <CalendarTable currentDate={currentDate} events={events} />
    </div>
  );
};

const CalendarTable = ({ currentDate, events }) => {
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    generateCalendarDays();
  }, [currentDate]);

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    let firstDayOfWeek = firstDayOfMonth.getDay() - 1;
    if (firstDayOfWeek < 0) firstDayOfWeek = 6;

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({
        day: prevMonthLastDay - firstDayOfWeek + i + 1,
        isCurrentMonth: false,
        date: new Date(
          year,
          month - 1,
          prevMonthLastDay - firstDayOfWeek + i + 1
        ),
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    const totalCellsNeeded = 35;
    const remainingCells = totalCellsNeeded - days.length;

    for (let i = 1; i <= remainingCells; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    setCalendarDays(days);
  };

  const weekdays = [
    "Esmaspäev",
    "Teisipäev",
    "Kolmapäev",
    "Neljapäev",
    "Reede",
    "Laupäev",
    "Pühapäev",
  ];
  const stringToDate = (dateString) => {
    return new Date(dateString);
  };

  const getEventForDate = (date) => {
    const targetDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    return events.filter((event) => {
      const eventDate = stringToDate(event.date);
      return (
        eventDate.getDate() === targetDate.getDate() &&
        eventDate.getMonth() === targetDate.getMonth() &&
        eventDate.getFullYear() === targetDate.getFullYear()
      );
    });
  };

  return (
    <div>
      <table className="calendar-table">
        <thead>
          <tr>
            {weekdays.map((day) => (
              <th
                key={day}
                className="strong-border"
                style={{ background: "#757575", height: "4.25rem" }}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {calendarDays
                .slice(rowIndex * 7, (rowIndex + 1) * 7)
                .map((day, colIndex) => {
                  const eventsForDay = getEventForDate(day.date);
                  return (
                    <td
                      key={colIndex}
                      className={`strong-border ${
                        day.isCurrentMonth
                          ? "current-month"
                          : "non-current-month"
                      }`}
                      style={{
                        height: "100px",
                        position: "relative",
                      }}
                    >
                      {eventsForDay.length > 0 && (
                        <div style={{ textAlign: "left" }} className="ps-2">
                          {day.day}
                          {eventsForDay.map((event, index) => (
                            <div key={index} className="event pb-4 pe-0 m-0">
                              <h2 className="p-0">{event.heading}</h2>
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  );
                })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarPage;
