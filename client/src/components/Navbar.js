import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/vocolog.png";
import { FacebookIcon, TiktokIcon, InstagramIcon, SearchIcon } from "../assets/icons";

function NavigationBar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Container fluid className="custom-padding">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center gap-3">
            <FacebookIcon height="2rem" width="2rem"/>
            <TiktokIcon height="2rem" width="2rem"/>
            <InstagramIcon height="2rem" width="2rem"/>
          </div>

          <div className="d-flex align-items-center">
              <span className="fw-normal me-4 fs-5">ENG</span>
              <div className="position-relative" style={{ width: "300px" }}>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control rounded-pill border"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="position-absolute" style={{right: "15px", top: "50%", transform: "translateY(-50%)"}}>
                  <SearchIcon height="1.5rem" width="1.5rem"/>
                </div>
              </div>
            </div>
          </div>
      </Container>
      
      <Container fluid className="custom-padding bg-dark">
        <div className="d-flex align-items-center py-2 justify-content-between">
          <img src={logo} alt="Logo" className="vocologo" />
          <div className="d-flex ms-auto">
            <a href="/tunniplaan">Tunniplaan</a>
            <a href="#konsultatsioonid">Konsultatsioonid</a>
            <a href="#praktika">Praktika</a>
            <a href="#erialad">Erialad</a>
            <a href="#kutse">Kutsemeistrivõistlused</a>
            <a href="#tunnustused">Tunnustused</a>
            <a href="#kontaktid">Kontaktid</a>
          </div>
        </div>
      </Container>
    </>
  );
}

export default NavigationBar;
