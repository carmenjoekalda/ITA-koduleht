import React from 'react';

const getWeekDates = (offset) => {
    const currentDate = new Date();
    
    currentDate.setDate(currentDate.getDate() + offset * 7);

    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1); 
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); 


    const startDate = startOfWeek.toLocaleDateString();
    const endDate = endOfWeek.toLocaleDateString();

    return `${startDate} - ${endDate}`;
};

const GroupSelector = ({ selectedGroup, onGroupChange, weekOffset, setWeekOffset, groups }) => {
    const weekDates = getWeekDates(weekOffset);
    
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
                        {groups?.map((group) => (
                            <option key={group} value={group}>
                                {group}
                            </option>
                        ))}
                    </select>
                </div>
                <div
                    className="d-flex flex-row bg-light me-5 px-3 text-center"
                    style={{
                        height: "3vh",
                        width: "16vw",
                        textAlign: "center",
                        borderRadius: "5px",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <button className="triangle-btn left me-2" onClick={() => setWeekOffset(weekOffset - 1)}></button>
                    <h4 style={{ fontSize: "2rem" }}>
                        {weekDates}
                    </h4>
                    <button className="triangle-btn right ms-2" onClick={() => setWeekOffset(weekOffset + 1)}></button>
                </div>
            </div>
        </div>
    );
};

export default GroupSelector;
