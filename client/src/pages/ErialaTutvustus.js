import React from "react";
import { useParams } from "react-router-dom";
import ErialaData from "../assets/ErialaData";

function ErialaTutvustus() {
  const { id } = useParams();
  const eriala = ErialaData[id];
  if (!eriala) {
    return <h1>sorry, eriala pole :(</h1>;
  }
  return (
    <div>
        <h1>
            {eriala.title}
        </h1>
    </div>
  )
}
export default ErialaTutvustus;
