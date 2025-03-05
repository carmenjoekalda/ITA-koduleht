import React from "react";

const TegijaTable = ({events}) => {
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

                        <th className="flex-shrink-1">
                            <h1 className="m-0 ps-4 pe-3">Tulemused</h1>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {events.map((event) => (
                        <tr key={event.kuupaev}>
                            <td>
                                <h3 className="m-0">{event.kuupaev}</h3>
                                <h3 className="m-0">{event.aadress}</h3>
                                <h3 className="m-0">{event.klass}</h3>
                            </td>

                            <td>
                                <h3 className="m-0 fw-bold">{event.eriala}</h3>
                                <h3 className="m-0">{event.kirjeldus}</h3>
                            </td>

                            <td className="">
                                <h3 className="m-0">{event.voitjad}</h3>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TegijaTable;