import React, { useState } from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Praktika.css";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

function Praktika() {
  const [selectedBtn, setSelectedBtn] = useState(0);

  const [rows, setRows] = useState([
    { group: "IS23", period: "27.01.2025 - 04.05.2025" },
    { group: "IS24", period: "14.04.2025 - 08.06.2025" },
    { group: "ITA21", period: "11.11.2024 - 13.04.2025" },
    { group: "ITA22", period: "14.04.2025 - 15.06.2025" },
    { group: "ITS21", period: "11.11.2024 - 13.04.2025" },
    { group: "ITS22", period: "11.11.2024 - 02.02.2025" },
    { group: "KTO", period: "24 03.02 2025 - 31.08 2025" },
    { group: "UX23", period: "11.11.2024 - 22.12.2024" },
    { group: "UX24", period: "31.03 2025 - 08.06 2025" },
    { group: "VS23", period: "27.01.2025 - 04.05.2025" },
    { group: "VS24", period: "07.04.2025 - 11.05.2025" },
    { group: "Ärikool", period: "2024-2025" },
  ]);
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
          {/* praktika perioodid */}

          {selectedBtn === 0 && (
            <div>
              <p className="mb-4 p-0 fw-bold" style={{ fontSize: "4rem" }}>
                Praktika ja õppimine välismaal
              </p>
              <p>
                Oleme rahvusvahelisusele avatud haridusasutus ja aktiivne
                partner koostööprojektides. Alates 2016. aastast liitusime
                õpirände hartaga ning 2021. aastal omistati Tartu Rakenduslikule
                Kolledžile Erasmus+ õpirände akrediteering, mis tähendab, et
                perioodil 2021 – 2027 saab kool lihtsustatud korras toetust uute
                õpirännete rahastamiseks.
              </p>
              <h2 className="fw-bold my-4">Mis on õpiränne?</h2>
              <p>
                Õpiränne tähendab välismaal toimuvat praktikaperioodi või koos
                grupiga õppetöö sooritamist mõnes meie partnerkoolis välismaal.
                Välispraktikale saavad kandideerida kõik VOCO õpilased,
                sõltumata erialast või õppevormist. Sõltumata sellest, kas lähed
                välismaale praktikale või õppima, tasub Erasmus+ programm kõik
                sõidu, elamise ja toitlustuskulud ning lisaks ka taskuraha kogu
                õpirände vältel. Meie õppuritele on õpiränne tasuta! Praktika
                välismaal on võrdsustatud siinse ettevõttepraktikaga, seega saad
                erialase praktika sooritatud. Samuti arvestatakse EKAPid
                välismaal õppimise aja eest.
              </p>
              <h2 className="fw-bold my-4">
                Mida teha, et välismaale praktikale või õppima minna?
              </h2>
              <p>
                Kõigepealt palume Sul oma huvist märku anda, et teaksime
                õpirändeid kavandada. Selleks mõtle läbi miks, kuna ja millises
                riigis sooviksid oma praktikat teha. Tartu Rakenduslikul
                Kolledžil on koostööpartnerid peaaegu kõigis Euroopa riikides.
                Vaata kaarti SIIT. Soovitame juba ette välispraktika planeerida
                oma praktikaperioodiga samale ajale. Ja loomulikult kõige
                tähtsam – mõtle, mis on Su praktika eesmärk ja mida soovid
                välispraktika raames teha!
              </p>
              <h2 className="fw-bold my-4">
                Palun esita õpirändele minekuks sooviavaldus hiljemalt 30.
                novembriks (kui soovid välispraktikat teha 2025 aasta
                kevadsemestril) SIIN
              </h2>
              <p>
                Seejärel võtab meie rahvusvaheliste suhete koordinaator Sinuga
                ühendust, et täpsustada välispraktika tingimusi. Ta otsib
                vastuvõtvad partnerid õpirännete korraldamiseks ja kui koos
                vastuvõtjaga on leitud sobiv praktikakoht ja aeg, siis tuleb
                täita ametlik välispraktika avaldus ning muud dokumendid.
                Enamasti korraldatakse ka enne praktikale minekut online
                kohtumine ja mõistagi on soovitav leida aega, et vastuvõtva
                riigi kultuuri ja keelega tutvuda.
              </p>
            </div>
          )}
          {/* Praktikale kandideerimine */}

          {selectedBtn === 1 && (
            <div className="prakkand">
              <h1>Praktikale kandideerimine</h1>
              <p>
                Vajalik informatsioon ja joonised praktikale kandideerimiseks.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales. Quisque
                sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>
              <div className="praktika-img">
                <img src={pic1}></img>
                <div>
                  <p> Foro konta infot</p>
                  <p>Foto avaldaja</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
              <div className="praktika-img">
                <img src={pic2}></img>
                <div>
                  <p> Foto konta infot</p>
                  <p>Foto avaldaja</p>
                </div>
              </div>
              <div className="praktika-img">
                <img src={pic2}></img>
                <div>
                  <p> Foto konta infot</p>
                  <p>Foto avaldaja</p>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet.
              </p>
              <div className="d-flex flex-column">
                <a> vajalikud lingid</a>
                <a> vajalikud lingid</a>
                <a> vajalikud lingid</a>
              </div>
            </div>
          )}
          {/* Erialade praktika juhendid */}

          {selectedBtn === 2 && (
            <div>
              <h1>Erialade praktika juhendid</h1>
              <table bordered className="custom-table">
                <thead>
                  <tr>
                    <th style={{ width: "17.5rem", border: "1px solid black" }}>
                      Õppegrupp
                    </th>
                    <th className="praktika-top-container">
                      <p className="praktika-top-text mt-3">
                        Erialade praktika juhendid
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index} style={{ height: "4rem" }}>
                      <td className="col1">{row.group}</td>
                      <td className="col2">Link</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* Välistpraktikale kandideerimine */}

          {selectedBtn === 3 && (
            <div className="prakkand">
              <h1>Välistpraktikale kandideerimine</h1>
              <div className="d-flex flex-column mb-5">
                <h2>Juhendid</h2>
                <a href="x"> Juhend</a>
                <a href="x"> Juhend</a>
                <a href="x"> Juhend</a>
              </div>
              <h2>Välistpraktika</h2>
              <p>
                Vajalik informatsioon ja joonised välis praktikale
                kandideerimiseks. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              </p>
              <div className="praktika-img">
                <img src={pic1}></img>
                <div>
                  <p> Foro konta infot</p>
                  <p>Foto avaldaja</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
              <div className="praktika-img">
                <img src={pic3}></img>
                <div>
                  <p> Foto konta infot</p>
                  <p>Foto avaldaja</p>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="spacer" />
      {selectedBtn === 0 && (
        <div className="custom-padding">
          <h1 style={{ marginBottom: "2.4375rem" }}>Praktika perioodid</h1>
          <table bordered className="custom-table">
            <thead>
              <tr>
                <th style={{ width: "17.5rem", border: "1px solid black" }}>
                  Õppegrupp
                </th>
                <th className="praktika-top-container">
                  <select className="year-box">
                    <option value="2025/2026">2025/2026</option>
                    <option value="2024/2025">2026/2027</option>
                    <option value="2023/2024">2027/2028</option>
                  </select>
                  <p className="praktika-top-text mt-3">Praktika perioodid</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ height: "4rem" }}>
                  <td className="col1">{row.group}</td>
                  <td className="col2">{row.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="spacer" />

      <Footer />
    </div>
  );
}

export default Praktika;
