import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./EventsCalendar.css";
import { ServerIcon, TableIcon } from "../assets/icons";
import CalendarPage from "./CalendarTable";
import { useAuth } from "../AuthContext";

function EventsCalendar() {
  const { isAuthenticated } = useAuth();

  const [activePage, setActivePage] = useState(1);

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

  const addEvent = () => {
    setEvents([
      ...events,
      {
        id: events.length + 1,
        group: "Ita 22",
        date: "2025-03-22",
        heading: `Sündmuse nimi ${events.length + 1}`,
        description:
          "Konkreetse sündmuse juures on kirjas nimetus, toimumise aeg ja koht ning võimalus panna kirja sündmusega seotud õppegrupi tähis või kogu osakonnale mõeldud ürituse korral märge kogu osakonnale.",
      },
    ]);
  };

  const removeEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const EventInfo = ({ id, date, heading, group, description, onRemove }) => {
    const [isEditing, setIsEditing] = useState({
      group: false,
      date: false,
      title: false,
      description: false,
    });

    const [eventData, setEventData] = useState({
      group,
      date,
      title: heading,
      description,
    });

    const handleEdit = (field) => {
      setIsEditing((prev) => ({ ...prev, [field]: true }));
    };

    const handleChange = (e, field) => {
      setEventData((prev) => ({ ...prev, [field]: e.target.value }));
    };
    const handleKeyDown = (e, field) => {
      if (e.key === "Enter") {
        setIsEditing((prev) => ({ ...prev, [field]: false }));
      }
    };

    const handleBlur = (field) => {
      setIsEditing((prev) => ({ ...prev, [field]: false }));
    };

    if (!isAuthenticated) {
      return (
        <div>
          <div className="d-flex">
            <div className="me-5">
              <h3>{group}</h3>
            </div>
            <div>
              <h3>{date}</h3>
            </div>
          </div>

          <hr className="mt-1 mb-3" />

          <h2 className="fs-3 mb-3">{heading}</h2>
          <p className="text-body mb-5">{description}</p>
        </div>
      );
    }
    return (
      <div>
        <div className="d-flex">
          <div className="me-5">
            {isEditing.group ? (
              <input
                type="text"
                value={eventData.group}
                onChange={(e) => handleChange(e, "group")}
                onKeyDown={(e) => handleKeyDown(e, "group")}
                onBlur={() => handleBlur("group")}
                autoFocus
                className="form-control"
              />
            ) : (
              <h3
                onClick={() => handleEdit("group")}
                style={{ cursor: "pointer" }}
              >
                {eventData.group}
              </h3>
            )}
          </div>
          <div>
            {isEditing.date ? (
              <input
                type="date"
                value={eventData.date}
                onChange={(e) => handleChange(e, "date")}
                onKeyDown={(e) => handleKeyDown(e, "date")}
                onBlur={() => handleBlur("date")}
                autoFocus
                className="form-control"
              />
            ) : (
              <h3
                onClick={() => handleEdit("date")}
                style={{ cursor: "pointer" }}
              >
                {eventData.date}
              </h3>
            )}
          </div>
          {isAuthenticated && (
            <div
              className="mt-5"
              style={{ position: "absolute", left: "85vw" }}
            >
              <button onClick={() => onRemove(id)} className="btn btn-danger">
                x
              </button>
            </div>
          )}
        </div>

        <hr className="mt-1 mb-3" />

        {isEditing.title ? (
          <input
            type="text"
            value={eventData.title}
            onChange={(e) => handleChange(e, "title")}
            onKeyDown={(e) => handleKeyDown(e, "title")}
            onBlur={() => handleBlur("title")}
            autoFocus
            className="form-control fs-3 mb-3"
          />
        ) : (
          <h2
            className="fs-3 mb-3"
            onClick={() => handleEdit("title")}
            style={{ cursor: "pointer" }}
          >
            {eventData.title}
          </h2>
        )}

        {isEditing.description ? (
          <input
            type="text"
            value={eventData.description}
            onChange={(e) => handleChange(e, "description")}
            onKeyDown={(e) => handleKeyDown(e, "description")}
            onBlur={() => handleBlur("description")}
            autoFocus
            className="form-control"
          />
        ) : (
          <p
            className="text-body mb-5"
            onClick={() => handleEdit("description")}
            style={{ cursor: "pointer" }}
          >
            {eventData.description}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="custom-padding">
      <Container fluid className="mt-3">
        <div className="d-flex justify-content-between">
          <h1>Sündmuste kalender</h1>
          <div className="d-flex align-items-end ml-auto">
            {isAuthenticated && (
              <button
                onClick={addEvent}
                className="page1-btn"
                style={{ width: "4rem", borderTopLeftRadius: "3px" }}
              >
                <h1>+</h1>
              </button>
            )}
            <button
              className="page1-btn"
              onClick={() => setActivePage(1)}
              style={{
                width: "12rem",
                borderTopLeftRadius: isAuthenticated ? "0rem" : "1rem",
              }}
            >
              <ServerIcon
                height={"2.5rem"}
                fill={
                  activePage === 1
                    ? "hsla(0, 0%, 12%, 1)"
                    : "hsla(0, 0%, 27%, 1)"
                }
              />
            </button>
            <button
              className={`${
                activePage === 2 ? "page2-btn-selected" : "page2-btn-selected"
              }`}
              onClick={() => setActivePage(2)}
              style={{
                width: "10rem",
                borderTopRightRadius: "0.4rem",
              }}
            >
              <TableIcon
                height={"2.5rem"}
                fill={
                  activePage === 2
                    ? "hsla(0, 0%, 98%, 1)"
                    : "hsla(0, 0%, 27%, 1)"
                }
              />
            </button>
          </div>
        </div>

        {activePage === 1 ? (
          // Page 1
          <div className="page-container">
            <div className="page1-top d-flex justify-content-between align-items-center px-4">
              <h2>Kõik õppegruppid</h2>
              <input
                type="text"
                placeholder="Õppegrupp..."
                className="search p-2"
              ></input>
            </div>

            <div className="d-flex flex-column p-4 page1-box">
              {events.map((event) => (
                <EventInfo
                  key={event.id}
                  id={event.id}
                  group={event.group}
                  date={event.date}
                  heading={event.heading}
                  description={event.description}
                  onRemove={removeEvent}
                />
              ))}
            </div>
          </div>
        ) : (
          // Page 2
          <CalendarPage />
        )}
      </Container>

      <div className="spacer"></div>
    </div>
  );
}

export default EventsCalendar;
