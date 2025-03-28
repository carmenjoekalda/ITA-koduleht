import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tegija.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompFilter from "../components/CompFilter";
import TegijaTable from "../components/TegijaTable";
import { useNavigate } from "react-router-dom";
import aastateg from "../assets/aastateg.png";

const Tegija = () => {
  const navigate = useNavigate();

  const events = [
    {
      kuupaev: "04.03",
      aasta: "2021",
      aadress: "Kopli 1",
      klass: "A401",
      eriala: "Tisler",
      kirjeldus:
        "Puidust tabureti valmistamine.",
      voitjad: "I Kalle Riit, Kaspar Pavel ja Aleksander Potašenkov \n II Martin Ritsberg, Artur Keerd ja Fredy-Andri Mõttus\n III Kevin Vorsmann ja Sten Kuusk2",
    },
    {
      kuupaev: "18.01",
      aasta: "2019",
      aadress: "Kopli 3",
      klass: "A403",
      eriala: "Ehitusviimistleja",
      kirjeldus:
        "Etteantud joonise seinale kandmine ning vabatehnikas toonitud värvidega värvimine.",
      voitjad: "I Laurette Münt,\n II Jaanika Liivamägi,\n III Cassandra Pilt\n",
    },
  ];

  const [aasta, setAasta] = useState("");

  return (
    <div>
      <Navbar />

      <div className="spacer"></div>
      <div className="spacer"></div>

      <div className="custom-padding">
        <div className="tegija-page d-flex flex-column">
          <div className="d-flex flex-column align-items-center">
            <img src={aastateg} style={{ maxWidth: "100%" }} />
            <h1 className="mb-0">VOCO kutsevõistlused “Aasta Tegija 2025”</h1>

            <div className="spacer"></div>

            <div class="description">
              <h2 className="fw-bold mb-5 ms-5" style={{ fontSize: "2.5rem" }}>
                On aeg anda stardipauk kutsevõistlustele „Aasta Tegija 2025“!
              </h2>
              <p style={{ fontSize: "2rem" }} className="ms-5 ps-4">
                Ehkki esimesed võistlused alustavad juba jaanuaris ja
                veebruaris, jääb suurem osa võistlustest siiski märtsi
                esimestesse päevadesse.
              </p>
              <p style={{ fontSize: "2rem" }} className="ms-5 ps-4">
                Kutsemeistrivõistlused toimuvad 37. võistlusalal. Selguvad
                parimad noored meistrid, kellest mitmed lähevad kooli esindama
                üleriigilistele ja rahvusvahelistele võistlustele.
              </p>
              <p
                style={{ fontSize: "2rem" }}
                className="ms-5 ps-4 fw-bold mb-3"
              >
                Iga ala parim pärjatakse 7. märtsil toimuval lõpugalal tiitliga
                “Aasta Tegija 2025”.
              </p>
              <h2 className="fw-bold mb-5 ms-5" style={{ fontSize: "2.5rem" }}>
                Võistlused toimuvad mõlemas õppehoones Kopli 1 ja Põllu 11.
              </h2>
            </div>
          </div>

          <CompFilter setAasta={setAasta} />

          <TegijaTable events={events} aasta={aasta} />

          <div className="d-flex justify-content-center mb-5">
            <button onClick={() => navigate("/voistlused")}>Kuva rohkem</button>
          </div>
        </div>
        <div className="spacer"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Tegija;
