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
              <p>
                 IT-süsteemide nooremspetsialist  |</p>
              <p>IT-süsteemide spetsialist        |</p>
            </div>
            <div>
              <p>
            disaini nooremspetsialist   |</p>
              <p>Kestlikud tehnoloogiad    |   </p>
            </div>
            <div>
              <p>Noorem tarkvaraarendaja |</p>
              <p>Raamatupidaja |</p>
            </div>
            <div>
              <p>
              Turvasüsteemide tehnik</p>
              <p>Väikeettevõtja</p>
            </div>
          </div>
        </div>

        <div className="osakondrect">
          <div style={{ width: "20vw" }}>
            <h1 className="p-5">Ärikool</h1>
          </div>
          <div className="d-flex pt-3" style={{ gap: "1rem" }}>
            <p>Bürooassistent | </p>
            <p>Sekretär  |  </p>
            <p> Raamatupidaja |</p>
            <p> Väikeettevõtja</p>
          </div>
        </div>
        <ErialaCards/>


        <div className="spacer" />
      </div>
      <Footer />
    </div>
  );
}
export default Erialad;
