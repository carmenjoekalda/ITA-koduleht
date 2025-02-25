import React from "react";
import "../App.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider";

function HomePage() {
  return (
      <div className="bg-light">
        <Navbar />
        <HomeSlider />
        <div className="spacer-20vh"></div>
        <div className="custom-padding">
          <h1 className="mb-3">IT Akadeemia leht</h1>
          <h4>
            Lühitutvustus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
            amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
            Vestibulum auctor ornare leo, non suscipit magna interdum eu. Ut et
            massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Ut et massa mi. Aliquam
            in hendrerit urna.
          </h4>
        </div>
        <div className="spacer-20vh"></div>
        <Footer />
      </div>
  );
}
export default HomePage;
