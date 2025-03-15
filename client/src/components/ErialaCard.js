const erialaData = [
  {
    title: "Eriala 1 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 1 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 1 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 1 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 1 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 1 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
  {
    title: "Eriala 1 (kirjeldus)",
    description:
      "Lorem ipsum dolor sit amet, consecin hendrerit uratttetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    buttonText: "Vastuvõtt avatakse peagi...",
  },
];

const ErialaCards = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
      {erialaData.map((item, index) => (
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

            <div className="flex-grow-1 d-flex" style={{ overflow: "hidden" }}>
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
  );
};

export default ErialaCards;
