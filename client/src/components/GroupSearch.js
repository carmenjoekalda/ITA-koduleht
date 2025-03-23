import React from "react";

const getDateRange = (offset) => {
  const today = new Date();
  const startOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay() + 1 + offset * 7)
  );
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); 
  const options = { day: "2-digit", month: "2-digit" }; 
  const startDate = startOfWeek.toLocaleDateString("en-GB", options); 
  const endDate = endOfWeek.toLocaleDateString("en-GB", options); 

  return `${startDate} - ${endDate}`;
};
const GroupSelector = ({
  selectedGroup,
  onGroupChange,
  weekOffset,
  setWeekOffset,
}) => {
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
            onChange={onGroupChange}
            name="groups"
            id="groups"
            className="ps-3"
            style={{ width: "10vw", height: "3vh" }}
            value={selectedGroup}
          >
            <option value="">Vali rühm</option>
            <option value="ITA22">ITA22</option>
            <option value="ITS22">ITS22</option>
            <option value="ITA24">ITA24</option>
          </select>
        </div>
        <div
          className="d-flex flex-row bg-light me-5 px-3 text-center"
          style={{
            height: "4vh",
            width: "12vw",
            textAlign: "center",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            className="triangle-btn left me-2"
            onClick={() => setWeekOffset(weekOffset - 1)}
          ></button>

          <h3 style={{ fontSize: "2rem" }}>{getDateRange(weekOffset)}</h3>
          <button
            className="triangle-btn right ms-2"
            onClick={() => setWeekOffset(weekOffset + 1)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default GroupSelector;
