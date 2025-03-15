import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Erialad.css";
import { Arrow } from "../assets/icons";
import ErialaCards from "../components/ErialaCard";
function Erialad() {
  return (
    <div>
      <NavigationBar />
      <div className="custom-padding bg-light">
        <h1 className="Erialatitle">Erialad</h1>

        <div className="osakondrect">
          <div style={{ width: "20vw" }}>
            <h1 className="p-5">It-kool</h1>
          </div>
          <div className="d-flex pt-3" style={{ gap: "1rem" }}>
            <div>
              <p>Eriala nimetus |</p>
              <p>Eriala Nimetus |</p>
            </div>
            <div>
              <p>Eriala nimetus |</p>
              <p>Eriala Nimetus |</p>
            </div>
            <div>
              <p>Eriala nimetus |</p>
              <p>Eriala Nimetus |</p>
            </div>
            <div>
              <p>Eriala nimetus</p>
              <p>Eriala Nimetus</p>
            </div>
          </div>
        </div>

        <div className="osakondrect">
          <div style={{ width: "20vw" }}>
            <h1 className="p-5">Ärikool</h1>
          </div>
          <div className="d-flex pt-3" style={{ gap: "1rem" }}>
            <p>Bürooassistent | </p>
            <p>Sekretär</p>
            <p> Raamatupidaja |</p>
            <p> Väikeettevõtja</p>
          </div>
        </div>
        <div style={{ height: "184px" }} />

        <div className="d-flex flex-row justify-content-between px-4">
          <div className="filter d-flex align-items-center justify-content-between px-4">
            Haridusnõue
            <Arrow />
          </div>
          <div className="filter d-flex align-items-center justify-content-between px-4">
            Haridusnõue
            <Arrow />
          </div>
          <div className="filter d-flex align-items-center justify-content-between px-4">
            Haridusnõue
            <Arrow />
          </div>
          <button className="filter-btn">Filtreeri</button>
        </div>
        <div className="spacer" />

        <ErialaCards/>


        <div className="spacer" />
      </div>
      <Footer />
    </div>
  );
}
export default Erialad;
