import React from "react";
import NavigationBar from "./Navbar";
import Footer from "./Footer";
import "./Kontakt.css";
import { Circle } from "../assets/icons";

function Kontakt() {
  const teachers = [
    {
      name: "Peeter peterson",
      role: "Õpetaja",
      contact: "kontakt",
      room: "Ruum",
    },
    { name: "Mari", role: "Õpetaja", contact: "mari kontakt", room: "105" },
    { name: "Peeter", role: "Õpetaja", contact: "kontakt", room: "Ruum" },
    { name: "Mari", role: "Õpetaja", contact: "mari kontakt", room: "105" },
    { name: "Peeter", role: "Õpetaja", contact: "kontakt", room: "Ruum" },
    { name: "Mari", role: "Õpetaja", contact: "mari kontakt", room: "105" },
    { name: "Peeter", role: "Õpetaja", contact: "kontakt", room: "Ruum" },
    { name: "Mari", role: "Õpetaja", contact: "mari kontakt", room: "105" },
    { name: "Peeter", role: "Õpetaja", contact: "kontakt", room: "Ruum" },
    { name: "Mari", role: "Õpetaja", contact: "mari kontakt", room: "105" },
    { name: "Peeter", role: "Õpetaja", contact: "kontakt", room: "Ruum" },
    { name: "Mari", role: "Õpetaja", contact: "mari kontakt", room: "105" },
    { name: "Peeter", role: "Õpetaja", contact: "kontakt", room: "Ruum" },
    { name: "Mari", role: "Õpetaja", contact: "mari kontakt", room: "105" },
  ];
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
          <h2 className="text-center"> Tootajad</h2>
          <div className="line" />

          <div
            className="d-flex flex-wrap"
            style={{ justifyContent: "space-between", gap: "7rem" }}
          >
            {teachers.map((teacher, index) => (
              <div className="teacher-box">
                <div
                  className="h-50 mb-4 pt-3 d-flex"
                  style={{ borderBottom: "3px solid" }}
                >
                  <Circle />
                  <div className="ps-3 pt-3">
                    <h2 className="fw-bold mb-2">{teacher.name}</h2>
                    <h3>{teacher.role}</h3>
                  </div>
                </div>
                <div>
                  <p>kontakt</p>
                  <p>Ruum</p>
                </div>
                <div className="line mt-5" />
              </div>
            ))}
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
