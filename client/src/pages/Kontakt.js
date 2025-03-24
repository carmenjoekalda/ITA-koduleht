import React, { useEffect, useState } from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Kontakt.css";
import { Circle } from "../assets/icons";
import axios from "axios";

function Kontakt() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    axios
      .get("https://siseveeb.voco.ee/veebilehe_andmed/tootajad?section=ALL")
      .then((response) => {
        setData(response.data.employees);
        setFilteredData(response.data.employees);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const Itaka = filteredData
    ? filteredData.filter((e) => e.department === "IT Akadeemia")
    : [];
  const removeContact = (fullName) => {
    setFilteredData((prevData) => {
      const updatedData = prevData.filter(
        (employee) => `${employee.firstname} ${employee.lastname}` !== fullName
      );
      console.log("Updated data after removal:", updatedData);
      return updatedData;
    });
  };

  return (
    <>
      <NavigationBar />
      <div className="custom-padding">
        <h1 style={{ paddingTop: "200px" }}>Kontaktid</h1>
        <div className="kontakt-container">
          <h2 style={{ marginTop: "63px", marginBottom: "20px" }}>
            It Akadeemia juht
          </h2>
          <div className="teacher-box">
            <div
              className="h-50 mb-4 pt-3 d-flex"
              style={{ borderBottom: "3px solid" }}
            >
              <Circle />
              <div className="ps-3 pt-3" style={{ overflow: "hidden" }}>
                <h2 className="fw-bold mb-2">It akadeemia juht</h2>
                <h4>juht</h4>
              </div>
            </div>
            <div>
              <p>kontakt</p>
              <p>Ruum</p>
            </div>
          </div>

          <div className="line" />
          <h2 className="text-center">Töötajad</h2>
          <div className="line" />

          <div
            className="d-flex flex-wrap"
            style={{ justifyContent: "space-between", gap: "7rem" }}
          >
            {Itaka && Itaka.length > 0 ? (
              Itaka.map((teacher) => (
                <div className="teacher-box" key={teacher.id}>
                  <div
                    className="mb-3 pt-4 d-flex py-3"
                    style={{
                      borderBottom: "3px solid",
                      alignItems: "center",
                      height: "65%",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: teacher.image ? "transparent" : "gray",
                        backgroundImage: teacher.image
                          ? `url(${teacher.image})`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        flexShrink: 0,
                      }}
                    ></div>
                    <div
                      className="ps-3 pt-3"
                      style={{
                        flex: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <p className="fw-bold mb-2">
                        {teacher.firstname} {teacher.lastname}
                      </p>
                      <h3>{teacher.ended_proffession}</h3>
                    </div>
                  </div>
                  <div>
                    <p>{teacher.phone}</p>
                    <p>{teacher.room}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeContact(`${teacher.firstname} ${teacher.lastname}`)
                    }
                    style={{
                      marginTop: "10px",
                      padding: "5px 10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Eemalda
                  </button>
                </div>
              ))
            ) : (
              <p>
                Tundub, et koolis enam töötajaid pole :( või siis su nett on
                lihtsalt sitt
              </p>
            )}
            <div style={{ height: "20px", width: "100%" }}></div>
          </div>
        </div>
        <div className="spacer" />
      </div>
      <Footer />
    </>
  );
}

export default Kontakt;
