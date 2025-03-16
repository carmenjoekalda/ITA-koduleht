import React, { act } from "react";
import { useParams } from "react-router-dom";
import ErialaData from "../assets/ErialaData";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ErialaTutvustus.css";
import { Accordion } from "react-bootstrap";
import { Arrow } from "../assets/icons";
import { useState } from "react";
function ErialaTutvustus() {
  const { id } = useParams();
  const eriala = ErialaData[id];
  const [activeKeys, setActiveKeys] = useState([]);
  function handleAccordion(id) {
    if (activeKeys.includes(id)) {
      setActiveKeys(activeKeys.filter((key) => key !== id));
    } else {
      setActiveKeys([...activeKeys, id]);
    }
  }
  if (!eriala) {
    return <h1>sorry, eriala pole :(</h1>;
  }

  return (
    <div>
      <NavigationBar />
      <div className="custom-padding bg-light">
        <div style={{ height: "208px" }}></div>
        <h1 style={{ marginBottom: "37px" }}>{eriala.title}</h1>
        {/*erialapilt/vajalikud materjalid */}
        <div
          className="d-flex"
          style={{
            height: "25rem",
            background: "#EEE",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "8rem",
          }}
        >
          <div className="bg-dark" style={{ width: "40%" }}></div>
          <div className="flex-grow-1 d-flex flex-column align-items-center">
            <div className="vajalikud-materjalid-top" />
            <div className=" flex-grow-1">
              <h1 className="mt-5">Vajalikud materjalid</h1>
              <button className="vajalikud-materjalid-btn mb-3">
                Õppekava PDF
              </button>
              <button className="vajalikud-materjalid-btn">
                Rakenduskava PDF
              </button>
            </div>
          </div>
        </div>

        <div style={{ height: "126px" }} />

        <h1 className="p-0 mb-4">{eriala.title}</h1>
        <h2 className="mb-5 fw-bold">
          Keskhariduse baasil | Koolipõhine | 1a ja 6 kuud
        </h2>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
          ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
          augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
        </p>
        <div className="spacer" />
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0" onClick={() => handleAccordion(0)}>
            <Accordion.Header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Vastuvõtutingimused
                <div>
                  {activeKeys.includes(0) ? (
                    <Arrow rotation={180} />
                  ) : (
                    <Arrow />
                  )}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
              imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              interdum eu.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" onClick={() => handleAccordion(1)}>
            <Accordion.Header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Oskused
                <div>
                  {activeKeys.includes(1) ? (
                    <Arrow rotation={180} />
                  ) : (
                    <Arrow />
                  )}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
              imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              interdum eu.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" onClick={() => handleAccordion(2)}>
            <Accordion.Header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                praktikavõimalus
                <div>
                  {activeKeys.includes(2) ? (
                    <Arrow rotation={180} />
                  ) : (
                    <Arrow />
                  )}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
              imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              interdum eu.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" onClick={() => handleAccordion(3)}>
            <Accordion.Header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Eelised tööturul
                <div>
                  {activeKeys.includes(3) ? (
                    <Arrow rotation={180} />
                  ) : (
                    <Arrow />
                  )}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
              imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              interdum eu.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" onClick={() => handleAccordion(4)}>
            <Accordion.Header>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Õpi edasi
                <div>
                  {activeKeys.includes(4) ? (
                    <Arrow rotation={180} />
                  ) : (
                    <Arrow />
                  )}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
              imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              interdum eu.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="spacer" />

        
      </div>
      <Footer />
    </div>
  );
}
export default ErialaTutvustus;
