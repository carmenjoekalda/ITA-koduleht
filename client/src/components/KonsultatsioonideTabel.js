import React, { useState, useEffect } from "react";

const KonsultatsioonideTabel = ({ teacher }) => {
  const [ajad, setAjad] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://siseveeb.voco.ee/veebilehe_andmed/konsultatsioonid?hoone=KPL&aasta=2024"
        );
        const data = await response.json();
        setAjad(data.konsultatsioonid);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="table-area mb-5">
      <table>
        <thead>
          <tr>
            <th style={{ width: "17rem" }}>
              <h1 className="ps-2">Õpetaja</h1>
            </th>

            <th style={{ width: "55rem" }}>
              <h1 className="ps-3">Kuupäevad</h1>
            </th>

            <th style={{ width: "17rem" }}>
              <h1 className="ps-3">Kellaaeg</h1>
            </th>

            <th style={{ width: "8rem" }}>
              <h1 className="ps-2">Ruum</h1>
            </th>
          </tr>
        </thead>

        <tbody>
          {ajad
            .filter((item) => teacher === "" || item.opetaja === teacher)
            .map((data) => (
              <tr key={data.paev + data.aeg}>
                <td>
                  <h3 className="m-0 ps-3">{data.opetaja}</h3>
                </td>

                <td>
                  <h3 className="m-0 ps-3">{data.kuupaevad.join(", ")}</h3>
                </td>

                <td>
                  <h3 className="m-0 ps-3">{data.aeg}</h3>
                </td>

                <td>
                  <h3 className="m-0 text-center">{data.ruum}</h3>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default KonsultatsioonideTabel;
