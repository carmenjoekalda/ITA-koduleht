import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/vocolog.png";
import {
  FacebookIcon,
  TiktokIcon,
  InstagramIcon,
  SearchIcon,
} from "../assets/icons";
import { useAuth } from "../AuthContext";

function NavigationBar() {
  const [query, setQuery] = useState("");
  const { isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <Container fluid className="custom-padding">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center gap-3">
            <a href="https://www.facebook.com/tartuvoco/">
              <FacebookIcon height="2rem" width="2rem" />
            </a>
            <a href="https://www.tiktok.com/@tartuvoco">
              <TiktokIcon height="2rem" width="2rem" />
            </a>
            <a href="https://www.instagram.com/tartuvoco/">
              <InstagramIcon height="2rem" width="2rem" />
            </a>
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
              <div
                className="position-absolute"
                style={{
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <SearchIcon height="1.5rem" width="1.5rem" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container fluid className="custom-padding bg-dark">
        <div className="d-flex align-items-center py-2 justify-content-between">
          <a href="#/" className="vocologo">
            <img src={logo} alt="Logo" className="vocologo" />
          </a>
          <div className="d-flex ms-auto">
            <a href="#/tunniplaan">Tunniplaan</a>
            <a href="#/praktika">Praktika</a>
            <a href="#/erialad">Erialad</a>
            <a href="#/tegija">Kutsemeistrivõistlused</a>
            <a href="#/tunnustused">Tunnustused</a>
            <a href="#/kontaktid">Kontaktid</a>
            {isAuthenticated && (
              <>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default NavigationBar;
