import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./EventsCalendar.css";
import { ServerIcon, TableIcon } from "../assets/icons";
import CalendarPage from "./CalendarTable";

function EventsCalendar() {
  const [activePage, setActivePage] = useState(1);

  const EventInfo = ({ title, date, heading, description }) => {
    return (
      <div>
        <div className="d-flex">
          <div className="me-5">
            <h3>{title}</h3>
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
  };
  return (
    <div className="custom-padding">
      <Container fluid className="mt-3">
        <div className="d-flex justify-content-between">
          <h1>Sündmuste kalender</h1>
          <div className="d-flex align-items-end ml-auto">
            <button
              className="page1-btn"
              onClick={() => setActivePage(1)}
              style={{
                width: "12rem",
                borderTopLeftRadius: "0.4rem",
              }}
            >
              <ServerIcon
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
          //Page 1
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
              <EventInfo
                title="Ita 23"
                date="15.12.23"
                heading="Sündmuse nimi"
                description="Konkreetse sündmuse juures on kirjas nimetus, 
                toimumise aeg ja koht ning võimalus panna kirja  
                sündmusega seotud õppegrupi tähis  või kogu osakonnale 
                mõeldud ürituse korral märge kogu osakonnale.  "
              />
              <EventInfo
                title="Ita 23"
                date="15.12.23"
                heading="Sündmuse nimi"
                description="Konkreetse sündmuse juures on kirjas nimetus, 
                toimumise aeg ja koht ning võimalus panna kirja  
                sündmusega seotud õppegrupi tähis  või kogu osakonnale 
                mõeldud ürituse korral märge kogu osakonnale.  "
              />
              <EventInfo
                title="Ita 23"
                date="15.12.23"
                heading="Sündmuse nimi"
                description="Konkreetse sündmuse juures on kirjas nimetus, 
                toimumise aeg ja koht ning võimalus panna kirja  
                sündmusega seotud õppegrupi tähis  või kogu osakonnale 
                mõeldud ürituse korral märge kogu osakonnale.  "
              />
              <EventInfo
                title="Ita 23"
                date="15.12.23"
                heading="Sündmuse nimi"
                description="Konkreetse sündmuse juures on kirjas nimetus, 
                toimumise aeg ja koht ning võimalus panna kirja  
                sündmusega seotud õppegrupi tähis  või kogu osakonnale 
                mõeldud ürituse korral märge kogu osakonnale.  "
              />
            </div>
          </div>
        ) : (
          //Page 2
          <CalendarPage />
        )}
      </Container>

      <div className="spacer"></div>
    </div>
  );
}

export default EventsCalendar;
