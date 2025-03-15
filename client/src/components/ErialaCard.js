import { useState } from "react";
import { Arrow } from "../assets/icons";
import ErialaData from "../assets/ErialaData";
import { Link } from "react-router-dom";

const ErialaCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ErialaData.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (ErialaData.length === 0) return;

  return (
    <div>
      <div className="pagination justify-content-center gap-4 mb-5">
        <button
          className="page-switch-btn"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Arrow rotation={90} />
        </button>
        <h1 style={{ marginTop: "1rem" }}>
          {currentPage}/{Math.ceil(ErialaData.length / itemsPerPage)}
        </h1>
        <button
          className="page-switch-btn"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === Math.ceil(ErialaData.length / itemsPerPage)}
        >
          <Arrow rotation={270} />
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
        {currentItems.map((item, index) => {
          const globalIndex = indexOfFirstItem + index;

          return (
            <Link to={`/erialad/${globalIndex}`} key={globalIndex}>
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
                  <div
                    className="erialacard-top-bar"
                    style={{ position: "sticky", top: 0, zIndex: 1 }}
                  ></div>

                  <div
                    className="flex-grow-1 d-flex"
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="ps-5 pt-4"
                      style={{ width: "40vw", overflow: "hidden" }}
                    >
                      <h3 className="erialacard-title">{item.title}</h3>
                      <p
                        className="erialacard-text"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                      <button
                        className="erialacard-btn"
                        style={{ marginBottom: "1.875vw" }}
                      >
                        <p className="erialacard-btn-text m-0">
                          {item.buttonText}
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="pagination justify-content-center gap-4 mt-5">
        <button
          className="page-switch-btn"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Arrow rotation={90} />
        </button>
        <h1 style={{ marginTop: "1rem" }}>
          {currentPage}/{Math.ceil(ErialaData.length / itemsPerPage)}
        </h1>
        <button
          className="page-switch-btn"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === Math.ceil(ErialaData.length / itemsPerPage)}
        >
          <Arrow rotation={270} />
        </button>
      </div>
    </div>
  );
};

export default ErialaCards;
