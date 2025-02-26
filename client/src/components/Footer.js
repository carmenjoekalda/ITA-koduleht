import React from "react";
import logo from "../assets/vocolog.png";
import { Container } from "react-bootstrap";

function Footer() {
  return (
      <Container fluid className="custom-padding bg-dark text-white">
        <div className="d-flex align-items-center py-5 justify-content-between">
          <img src={logo} alt="Logo" className="vocologo" />
          <div className="info">
                <h1>Kontakt</h1>
                <h4>info@voco.ee</h4>
                <h4>7 361 810</h4>
            </div>
            <div>
                <h1>Voco</h1>
                <h4>Kopli 1</h4>
                <h4>Tartu 50115 Eesti</h4>
            </div>
            <div>
                <h1>Privaatsustingimused</h1>
                <h4>Andmekaitse</h4>
                <h4>Küpsised</h4>
            </div>
        </div>
      </Container>
  );
}

export default Footer;
