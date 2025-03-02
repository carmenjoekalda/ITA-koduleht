import React, { useState, useEffect } from "react";
import "./EventsCalendar.css";

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
              <h2>{months[monthIndex]}</h2>
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
        <h1 className="page2-text">{currentYear}</h1>
      </div>
      <CalendarTable currentDate={currentDate} />
    </div>
  );
};

const CalendarTable = ({ currentDate }) => {
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
                .map((day, colIndex) => (
                  <td
                    key={colIndex}
                    className={`strong-border ${
                      day.isCurrentMonth ? "current-month" : "non-current-month"
                    }`}
                    style={{
                      height: "100px",
                      position: "relative",
                    }}
                  >
                    <div className="date-number">{day.day}</div>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarPage;
