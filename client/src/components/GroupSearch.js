import React from "react";

const GroupSearch = ({ setGroup }) => {
  const handleChange = (e) => {
    setGroup(e.target.value);
  };

  return (
    <div className="mb-5">
      <label htmlFor="groups">Vali tunniplaan:</label>

      <div className="dropdown-area" style={{ height: "5vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexGrow: 1,
          }}
        >
          <p className="m-0 p-2">Otsi...</p>
          <select
            onChange={handleChange}
            name="groups"
            id="groups"
            className="ps-3"
            style={{ width: "10vw", height: "3vh" }}
          >
            <option value="">Vali rühm</option>
            <option value="ITA22">ITA22</option>
            <option value="ITS22">ITS22</option>
            <option value="ITA24">ITA24</option>
          </select>
        </div>
        <div
          className=" d-flex flex-row bg-light me-5 px-3 text-center"
          style={{
            height: "3vh",
            width: "8vw",
            textAlign: "center",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button className="triangle-btn left me-2"></button>

          <h3 style={{ fontSize: "2rem" }}>02-01</h3>
          <button className="triangle-btn right ms-2"></button>
        </div>
      </div>
    </div>
  );
};

export default GroupSearch;
