import React, { useState } from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Praktika.css";

function Praktika() {
  const [selectedBtn, setSelectedBtn] = useState(0);

  return (
    <div className="bg-light">
      <NavigationBar />
      <div className="spacer" />
      <div className="d-flex custom-padding">
        <div className="d-flex flex-column">
          <button
            className={
              selectedBtn === 0 ? "praktika-button-selected" : "praktika-button"
            }
            style={{ borderRadius: "10px 10px 0 0 " }}
            onClick={() => setSelectedBtn(0)}
          >
            Praktika perioodid
          </button>
          <button
            className={
              selectedBtn === 1 ? "praktika-button-selected" : "praktika-button"
            }
            onClick={() => setSelectedBtn(1)}
          >
            Praktikale kandideerimine
          </button>
          <button
            className={
              selectedBtn === 2 ? "praktika-button-selected" : "praktika-button"
            }
            onClick={() => setSelectedBtn(2)}
          >
            Erialade praktika juhendid
          </button>
          <button
            className={
              selectedBtn === 3 ? "praktika-button-selected" : "praktika-button"
            }
            style={{ borderRadius: "0 0 10px 10px" }}
            onClick={() => setSelectedBtn(3)}
          >
            Välistpraktikale kandideerimine
          </button>
          {/*the reason I rounded individual buttons instead of the box is that it clipped the corners on the bottom button in a strange way.*/}
        </div>
        <div style={{ marginLeft: "3.1875rem" }}>
          <h1 style={{ marginBottom: "2.375rem" }}>Praktika</h1>
          <p>
            Tutvustustav tekst praktika kohta. Tutvustustav tekst praktika
            kohta. Tutvustustav tekst praktika kohta. Tutvustustav tekst
            praktika kohta. Tutvustustav tekst praktika kohta. Tutvustustav
            tekst praktika kohta. Tutvustustav tekst praktika kohta.
            Tutvustustav tekst praktika kohta. Tutvustustav tekst praktika
            kohta. Tutvustustav tekst praktika kohta. Tutvustustav tekst
            praktika kohta. Tutvustustav tekst praktika kohta. Tutvustustav
            tekst praktika kohta. Tutvustustav tekst praktika kohta.
            Tutvustustav tekst praktika kohta. Tutvustustav tekst praktika
            kohta. Tutvustustav tekst praktika kohta. Tutvustustav tekst
            praktika kohta. Tutvustustav tekst praktika kohta.
          </p>
        </div>
      </div>
      <div className="spacer" />
        <div className="custom-padding">
            <h1 className="mb-2">Praktika perioodid</h1>
            <table bordered className="custom-table">
                <thead className="bg-dark">
                <tr style={{height: "5.5rem"}}>
                            <th style={{width: "18rem"}}></th>
                            <th style={{width: "100%"}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>fesfse</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>More content for column 2.</td>
                        </tr>
                    </tbody>
            </table> 
        </div>
      <div className="spacer" />


      <Footer />
    </div>
  );
}

export default Praktika;
