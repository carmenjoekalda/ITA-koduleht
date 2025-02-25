import React, { useState } from "react";
import { Container } from "react-bootstrap";

function EventsCalendar() {
  const [activePage, setActivePage] = useState(2);

  return (
    <div className="custom-padding">
      <Container fluid className="mt-3">
        <div className="d-flex justify-content-between">
          <h1>Sündmuste kalender</h1>
          <div className="d-flex ml-auto">
            <button
              onClick={() => setActivePage(1)}
              style={{
                width: "10rem",
                borderTopLeftRadius: "0.4rem",
              }}
            ></button>
            <button
              onClick={() => setActivePage(2)}
              style={{
                width: "8rem",
                borderTopRightRadius: "0.4rem",
              }}
            ></button>
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
