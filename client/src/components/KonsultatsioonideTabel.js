import React from "react";

const KonsultatsioonideTabel = ({ ajad, teacher }) => {

    return (
        <div className="table-area mb-5">
            <table>
                <thead>
                    <tr>
                        {/* <th style={{ width: "17.5rem", border: "1px solid black" }}> */}
                        <th style={{ width: "17rem"}}>
                            <h1 className="ps-2">Õpetaja</h1>
                        </th>

                        <th style={{ width: "55rem"}}>
                            <h1 className="ps-3">Kuupäevad</h1>
                        </th>

                        <th style={{ width: "17rem"}}>
                            <h1 className="ps-3">Kellaaeg</h1>
                        </th>

                        <th style={{ width: "8rem"}}>
                            <h1 className="ps-2">Ruum</h1>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {ajad.filter((item) => teacher === '' || item.teacher === teacher).map((data) => (
                        <tr key={data.date}>
                            <td>
                                <h3 className="m-0 ps-3">{data.teacher}</h3>
                            </td>

                            <td>
                                <h3 className="m-0 ps-3">{data.date}</h3>
                            </td>

                            <td>
                                <h3 className="m-0 ps-3">{data.time}</h3>
                            </td>

                            <td>
                                <h3 className="m-0 text-center">{data.room}</h3>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
)};

export default KonsultatsioonideTabel;