import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Erialad.css";
import { Arrow } from "../assets/icons";
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
        <div
          className="d-flex flex-row border border-dark rounded-5"
          style={{ height: "16.86vw", overflow: "hidden" }}
        >
          <div
            className="bg-dark"
            style={{ width: "20vw", flexShrink: 0 }}
          ></div>
          <div
            className="flex-grow-1 d-flex flex-column" 
            style={{ background: "#FBFBFB" }}
          >
            <div className="erialacard-top-bar"></div>
            <div className="flex-grow-1 d-flex">
              <div className="ps-5 pt-4" style={{ width: "40vw" }}>
                <h3 className="erialacard-title">Eriala (kirjeldus)</h3>
                <p className="erialacard-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                </p>
              </div>
              <div className=" flex-grow-1 d-flex align-items-center justify-content-center">
                <button className="erialacard-btn" style={{marginBottom: "1.875vw"}}>
                    <p className="erialacard-btn-text m-0">Vastuvõtt avatakse ...</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" />
      </div>
      <Footer />
    </div>
  );
}
export default Erialad;
