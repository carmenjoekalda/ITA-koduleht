import React from "react";
import { useParams } from "react-router-dom";
import ErialaData from "../assets/ErialaData";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ErialaTutvustus.css";
function ErialaTutvustus() {
  const { id } = useParams();
  const eriala = ErialaData[id];
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
      </div>
      <Footer />
    </div>
  );
}
export default ErialaTutvustus;
