import { useState } from "react";
import { Arrow } from "../assets/icons";

const erialaData = [
  {
    title: "Eriala 1 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 2 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 3 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 4 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 5 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 6 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 7 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
];
const ErialaCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = erialaData.slice(indexOfFirstItem, indexOfLastItem);
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="pagination justify-content-center  gap-4 mb-5">
        <button
          className="page-switch-btn"
          onClick={() => changePage(currentPage - 1)}
        >
          <Arrow rotation={90} />
        </button>
        <h1 style={{ marginTop: "1rem" }}>
          {currentPage}/{Math.ceil(erialaData.length / itemsPerPage)}
        </h1>
        <button
          className="page-switch-btn"
          onClick={() => changePage(currentPage + 1)}
        >
          <Arrow rotation={270} />
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
        {currentItems.map((item, index) => (
          <div
            key={index}
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
                    <p className="erialacard-btn-text m-0">{item.buttonText}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pagination justify-content-center  gap-4 my-5">
        <button
          className="page-switch-btn"
          onClick={() => changePage(currentPage - 1)}
        >
          <Arrow rotation={90} />
        </button>
        <h1 style={{ marginTop: "1rem" }}>
          {currentPage}/{Math.ceil(erialaData.length / itemsPerPage)}
        </h1>
        <button
          className="page-switch-btn"
          onClick={() => changePage(currentPage + 1)}
        >
          <Arrow rotation={270} />
        </button>
      </div>

    </div>
  );
};

export default ErialaCards;
