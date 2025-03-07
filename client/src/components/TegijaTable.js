import React from "react";

const TegijaTable = ({events, aasta}) => {
    return (
        <div className="table-area">
            <table>
                <thead>
                    <tr>
                        <th className="text-nowrap pe-5">
                            <h1 className="m-0 ps-3">Aeg ja koht</h1>
                        </th>

                        <th className="w-50">
                            <h1 className="m-0 ps-4">Kirjeldus</h1>
                        </th>

                        <th>
                            <h1 className="m-0 ps-4 pe-3">Tulemused</h1>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {events.filter((item) => aasta === '' || item.aasta === aasta).map((data) => (
                        <tr key={data.kuupaev}>
                            <td>
                                <h3 className="m-0">{data.kuupaev}</h3>
                                <h3 className="m-0">{data.aadress}</h3>
                                <h3 className="m-0">{data.klass}</h3>
                            </td>

                            <td>
                                <h3 className="m-0 fw-bold">{data.eriala}</h3>
                                <h3 className="m-0">{data.kirjeldus}</h3>
                            </td>

                            <td className="">
                                <h3 className="m-0">{data.voitjad}</h3>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TegijaTable;