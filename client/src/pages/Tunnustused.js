import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchIcon } from "../assets/icons";
import tunnustus from "../assets/tunnustus.png";
import edasi from "../assets/edasi nool.png";
import tagasi from "../assets/tagasi nool.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Tunnustused.scss";

const Tunnustused = () => {
  const navigate = useNavigate();

  const tunnustused = [
    {
      title: "Sündmuse nimetus",
      date: "06.12.24",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      image: tunnustus,
    },
    {
      title: "Sündmuse nimetus",
      date: "06.12.24",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      image: tunnustus,
    },
    {
      title: "Sündmuse nimetus",
      date: "06.12.24",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      image: tunnustus,
    },
    {
      title: "Sündmuse nimetus",
      date: "06.12.24",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      image: tunnustus,
    },
  ];

  const [activeButton, setActiveButton] = React.useState(1);

  return (
    <div>
      <Navbar />
      <div className="custom-padding">
        <div className="spacer"></div>
        <div className="tunnustuste-page">
          <div className="d-flex flex-row justify-content-between mb-5">
            <h1>Tunnustused</h1>
            <div className="position-relative">
              <input
                type="text"
                className="search ps-2"
                style={{ transform: "translate(32px)" }}
              ></input>
              <SearchIcon
                height="2rem"
                width="2rem"
                style={{ transform: "translate(-12px, -2px)" }}
              />
            </div>
          </div>

          <div className="tunnustused-container">
            {tunnustused.map((tunnustus, index) => (
              <Link
                to={`/tunnustus`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div
                  className="tunnustus d-flex align-items-start my-4"
                  key={index}
                >
                  <img
                    src={tunnustus.image}
                    alt="tunnustus"
                    className="px-3 py-2"
                  />
                  <div className="d-flex flex-column pe-3">
                    <div className="d-flex flex-row justify-content-between pt-3">
                      <h4 className="m-0">{tunnustus.title}</h4>
                      <p>{tunnustus.date}</p>
                    </div>
                    <h3 className="m-0" style={{ width: "90%" }}>
                      {tunnustus.description}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="spacer"></div>
          <div className="line mb-5"></div>
          <div className="d-flex justify-content-center align-items-center buttons">
            <img src={tagasi} alt="tagasi" onClick={() => setActiveButton(1)} />
            <button
              className={activeButton === 1 ? "active-button" : ""}
              onClick={() => setActiveButton(1)}
            >
              1
            </button>
            <button
              className={activeButton === 2 ? "active-button" : ""}
              onClick={() => setActiveButton(2)}
            >
              2
            </button>
            <button>...</button>
            <img src={edasi} alt="edasi" onClick={() => setActiveButton(2)} />
          </div>
          <div className="spacer"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tunnustused;
