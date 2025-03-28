import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Accordion } from "react-bootstrap";
import { Arrow } from "../assets/icons";
import "./ErialaTutvustus.css";

function ErialaTutvustus() {
  const { id } = useParams();
  const [eriala, setEriala] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeKeys, setActiveKeys] = useState([]);


  useEffect(() => {
    const fetchXMLData = async () => {
      try {
        const response = await axios.get(
          "https://siseveeb.voco.ee/veebivormid/oppekavad/xml"
        );
        const xmlText = response.data;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        const oppekavas = xmlDoc.getElementsByTagName("oppekava");

        let foundEriala = null;
        for (let i = 0; i < oppekavas.length; i++) {
          const oppekava = oppekavas[i];
          const oppekavaNimetus =
            oppekava.getElementsByTagName("oppekava_nimetus")[0]?.textContent;
          const oppekavaKood =
            oppekava.getElementsByTagName("oppekava_kood")[0]?.textContent;
          const strukt =
            oppekava.getElementsByTagName("struktuuriuksus")[0]?.textContent;

          const vastuvotuReklaamInfo = oppekava.getElementsByTagName(
            "vastuvotu_reklaam_info"
          )[0];
          
          const getElementContent = (element) => {
            if (!element) return "";
            return element.textContent || "";
          };
          
          let kirjeldus = "";
          if (vastuvotuReklaamInfo) {
            const kirjeldusElement = vastuvotuReklaamInfo.getElementsByTagName("kirjeldus")[0];
            if (kirjeldusElement) {
              kirjeldus = getElementContent(kirjeldusElement);
            }
          }
          
          const pilt =
            vastuvotuReklaamInfo?.getElementsByTagName("pildi_url")[0]
              ?.textContent;

          const vastuvotutingimused = getElementContent(
            oppekava.getElementsByTagName("vastuvotutingimused")[0]
          );
          const oskused = getElementContent(
            oppekava.getElementsByTagName("oskused")[0]
          );
          const praktikavoimalus = getElementContent(
            oppekava.getElementsByTagName("praktikavoimalus")[0]
          );
          const eelisedtooturul = getElementContent(
            oppekava.getElementsByTagName("eelisedtooturul")[0]
          );
          const opiedasi = getElementContent(
            oppekava.getElementsByTagName("opiedasi")[0]
          );

          if (oppekavaKood === id && strukt === "IT Akadeemia") {
            foundEriala = {
              oppekavaNimetus,
              oppekavaKood,
              strukt,
              kirjeldus,
              pilt,
              vastuvotutingimused,
              oskused,
              praktikavoimalus,
              eelisedtooturul,
              opiedasi,
            };
            break;
          }
        }

        if (foundEriala) {
          console.log("Raw Eriala Data:", foundEriala);
          
          setEriala(foundEriala);
        } else {
          setError("Eriala not found.");
        }
      } catch (error) {
        console.error("Error fetching or parsing XML:", error);
        setError("Error fetching or parsing XML data.");
      } finally {
        setLoading(false);
      }
    };

    fetchXMLData();
  }, [id]);

  function handleAccordion(index) {
    setActiveKeys((prevKeys) =>
      prevKeys.includes(index)
        ? prevKeys.filter((key) => key !== index)
        : [...prevKeys, index]
    );
  }

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!eriala) return <h1>Sorry, this eriala does not exist :(</h1>;

  return (
    <div>
      <NavigationBar />
      <div className="custom-padding bg-light">
        <div style={{ height: "100px" }}></div>
        <p style={{ marginBottom: "37px", fontSize:"5rem" }}>{eriala.oppekavaNimetus}</p>
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
          <div
            className="bg-dark"
            style={{
              width: "40%",
              backgroundImage: `url(${eriala.pilt})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex-grow-1 d-flex flex-column align-items-center">
            <div className="vajalikud-materjalid-top" />
            <div className="flex-grow-1">
              <h1 className="mt-5 mb-0 pb-4" >Vajalikud materjalid</h1>
              <button className="vajalikud-materjalid-btn mb-3 mt-0" style={{color: "white"}}>
                Õppekava PDF
              </button>
              <button className="vajalikud-materjalid-btn" style={{color: "white"}}>
                Rakenduskava PDF
              </button>
            </div>
          </div>
        </div>


        <h1 className="p-0 mb-2 mt-0 pt-0">{eriala.oppekavaNimetus}</h1>
        
        <div style={{fontSize: "2rem"}} dangerouslySetInnerHTML={createMarkup(eriala.kirjeldus)} />

        <Accordion alwaysOpen >
          {[
            { title: "Vastuvõtutingimused", body: eriala.vastuvotutingimused },
            { title: "Oskused", body: eriala.oskused },
            { title: "Praktikavõimalus", body: eriala.praktikavoimalus },
            { title: "Eelised tööturul", body: eriala.eelisedtooturul },
            { title: "Õpi edasi", body: eriala.opiedasi },
          ].map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header onClick={() => handleAccordion(index)}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  {item.title}
                  <div>
                    {activeKeys.includes(index) ? (
                      <Arrow rotation={180} />
                    ) : (
                      <Arrow />
                    )}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="ps-5 ms-5" dangerouslySetInnerHTML={createMarkup(item.body)} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <div className="spacer"></div>
      <Footer />
    </div>
  );
}

export default ErialaTutvustus;