import React from "react";
import "../App.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider";
import EventsCalendar from "../components/EventsCalendar";

function HomePage() {
  return (
    <div className="bg-light">
      <Navbar />
      <HomeSlider />
      <div className="spacer"></div>
      <div className="custom-padding">
        <p className="mb-5 fw-bold" style={{ fontSize: "4rem" }}>
          Üldinfo Tartu rakendusliku kooli kohta
        </p>
        <p style={{ fontSize: "3rem" }}>
          Tartu Rakenduslik Kolledž on Eesti suurim kutse- ja täiendusõppekeskus
          Eestis. Meie põhitegevuseks on:
        </p>
        <ul style={{ fontSize: "2rem", paddingLeft: "5rem" }}>
          <li>
            pakkuda kutseõpet põhihariduse baasil ja keskhariduse baasil
            õppijatele;
          </li>
          <li>pakkuda kutsekeskharidusõpet;</li>
          <li>
            pakkuda kutseõpet koolikohustuse ea ületanud põhihariduseta
            isikutele;
          </li>
          <li>korraldada töökohapõhist õpet koostöös tööandjatega;</li>
          <li>
            viia läbi kutsevaliku programme, kutsealast eelkoolitust ja
            kutseõpet põhikoolis ja gümnaasiumis;
          </li>
          <li>korraldada täiskasvanute täienduskoolitust;</li>
          <li>korraldada karjäärialast nõustamist;</li>
          <li>pakkuda tooteid ja teenuseid Tartu linna elanikele.</li>
        </ul>
      </div>
      <div className="spacer"></div>
      <EventsCalendar />
      <Footer />
    </div>
  );
}
export default HomePage;
