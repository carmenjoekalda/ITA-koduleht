import React, { useState } from "react";
import { Container } from "react-bootstrap";
import './EventsCalendar.css'
import { TableIcon, FacebookIcon, ServerIcon } from "../assets/icons";
function EventsCalendar() {
  const [activePage, setActivePage] = useState(2);

  return (
    <div className="custom-padding">
      <Container fluid className="mt-3">
        <div className="d-flex justify-content-between">
          <h1>Sündmuste kalender</h1>
          <div className="d-flex ml-auto">
            <button className="page1-btn"
              onClick={() => setActivePage(1)}
              style={{
                width: "12rem",
                borderTopLeftRadius: "0.4rem",
              }}
            >
              <ServerIcon/>
            </button>
            <button className={`${activePage === 2 ? "page2-btn-selected" : "page-2-btn-notselected"}`}
              onClick={() => setActivePage(2)}
              style={{
                width: "10rem",
                borderTopRightRadius: "0.4rem",
              }}
            >
<TableIcon fill={activePage === 2 ? "hsla(0, 0%, 98%, 1)" : "hsla(0, 0%, 27%, 1)"} />
</button>
          </div>
        </div>
        {activePage === 1 ? (
          //Page 1
          <div className="w-100 min-vh-100 bg-secondary">
            <h1>Leht 1</h1>
          </div>
        ) : (
          //Page 2
          <div className="w-100 min-vh-100 bg-secondary">
            <h1>Leht 2</h1>
          </div>
        )}
      </Container>

      <div className="spacer-20vh"></div>
    </div>
  );
}

export default EventsCalendar;
