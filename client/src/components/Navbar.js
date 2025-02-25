import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import logo from '../assets/vocolog.png';
import '../App.scss'
function NavigationBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="header-wrapper">
      <div className="bg-light">
      <Container fluid className="custom-padding">
        <div className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center gap-3">
                <svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.15 1H14.2C12.012 1 9.91354 1.86919 8.36637 3.41637C6.81919 4.96354 5.95 7.06196 5.95 9.25V14.2H1V20.8H5.95V34H12.55V20.8H17.5L19.15 14.2H12.55V9.25C12.55 8.81239 12.7238 8.39271 13.0333 8.08327C13.3427 7.77384 13.7624 7.6 14.2 7.6H19.15V1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.6716 9.31017V13.0806C26.1606 12.9257 24.6826 12.5385 23.3355 11.8799L23.3272 11.8759L23.3189 11.872C22.6111 11.5419 21.936 11.1093 21.2262 10.6313L19.6718 9.58443L19.6676 11.4585C19.6645 12.8724 19.6654 14.2826 19.6663 15.6901C19.668 18.4081 19.6697 21.1166 19.6421 23.8249C19.5407 25.6271 18.9612 27.4107 17.9574 28.8762L17.9529 28.8827L17.9486 28.8893C16.3235 31.3442 13.5007 32.9356 10.6385 32.985L10.6177 32.9853L10.5969 32.9865C8.85423 33.0892 7.0891 32.5996 5.56774 31.6755C3.06547 30.1553 1.2932 27.3592 1.03023 24.3724C0.999268 23.6988 0.989104 23.037 1.0139 22.3968C1.24438 19.9587 2.42061 17.6301 4.22426 16.0551L4.22432 16.0552L4.23438 16.0462C6.08877 14.3822 8.6041 13.514 11.0261 13.7301C11.0268 14.6335 11.0119 15.521 10.9968 16.4182C10.9884 16.9166 10.9799 17.418 10.9741 17.9267C9.69702 17.7988 8.35178 18.0727 7.24677 18.858C6.19499 19.5649 5.41174 20.6273 5.00075 21.8145C4.68352 22.6337 4.71865 23.536 4.7434 24.1716C4.74745 24.2755 4.75121 24.3723 4.75312 24.4604L4.7544 24.5195L4.76263 24.5781C5.15116 27.341 7.71141 29.7469 10.617 29.5056C12.519 29.4692 14.2785 28.3414 15.2328 26.7387L15.2416 26.724L15.2498 26.709C15.2693 26.6736 15.2906 26.6356 15.3133 26.5951C15.5416 26.1882 15.9113 25.5295 15.9369 24.763C16.0363 22.89 16.0345 21.0112 16.0326 19.1616C16.0319 18.4819 16.0313 17.8061 16.0357 17.136L16.0357 17.1315C16.0397 15.0783 16.0388 13.0302 16.0378 10.985C16.0362 7.65794 16.0346 4.33842 16.0548 1.01697C16.7506 1.01126 17.4398 1.01035 18.1321 1.00943C18.594 1.00882 19.0572 1.00821 19.5245 1.00617C19.7937 3.0483 20.6117 5.0991 22.1325 6.61513C23.6619 8.17549 25.6974 8.96222 27.6716 9.31017Z" fill="white" stroke="black" strokeWidth="2"/>
                </svg>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 24.8333C21.55 24.8333 24.8333 21.55 24.8333 17.5C24.8333 13.4499 21.55 10.1667 17.5 10.1667C13.4499 10.1667 10.1667 13.4499 10.1667 17.5C10.1667 21.55 13.4499 24.8333 17.5 24.8333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 24.8333V10.1667C1 5.10406 5.10406 1 10.1667 1H24.8333C29.8959 1 34 5.10406 34 10.1667V24.8333C34 29.8959 29.8959 34 24.8333 34H10.1667C5.10406 34 1 29.8959 1 24.8333Z" stroke="black" strokeWidth="2"/>
                  <path d="M27.5833 7.43592L27.6025 7.41463" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            
            <div className="d-flex align-items-center">
              <span className="fw-normal me-4 fs-5">ENG</span>
              <div className="position-relative" style={{ width: "300px" }}>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control rounded-pill border"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="position-absolute" style={{right: "15px", top: "50%", transform: "translateY(-50%)"}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"/>
                    <line x1="16" y1="16" x2="20" y2="20" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-dark">
      <Container fluid className="custom-padding">
      <div className="d-flex align-items-center py-2 justify-content-between">
      <img src={logo} alt="Logo" className="vocologo"/>
            <div className="d-flex ms-auto">
              <a href="#tunniplaan">Tunniplaan</a>
              <a href="#konsultatsioonid">Konsultatsioonid</a>
              <a href="#praktika">Praktika</a>
              <a href="#erialad">Erialad</a>
              <a href="#kutse">Kutsemeistrivõistlused</a>
              <a href="#tunnustused">Tunnustused</a>
              <a href="#kontaktid">Kontaktid</a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NavigationBar;