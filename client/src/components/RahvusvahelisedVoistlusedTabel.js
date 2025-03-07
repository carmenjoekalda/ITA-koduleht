import React from "react";

const VabariiklikudVoistlusedTabel = ({R_events}) => {
    return (
        <div className="table-area mb-4">
            <table>
                <thead>
                    <tr>
                        <th className="pe-5 ps-4">
                            <h1 className="pe-5">Nimetus</h1>
                        </th>

                        <th className="w-auto ps-2">
                            <h1>Toimumise aeg</h1>
                        </th>

                        <th className="w-auto ps-4">
                            <h1 className="pe-5">Tulemused</h1>
                        </th>

                        <th className="ps-4">
                            <h1>Juhend</h1>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {R_events.map((R_event) => (
                        <tr key={R_event.nimetus}   >
                            <td className="text-start">
                                <h3 className="ps-4 m-0 ms-3">{R_event.nimetus}</h3>
                            </td>

                            <td className="text-start">
                                <h3 className="ps-3 m-0">{R_event.toimumise_aeg}</h3>
                            </td>

                            <td className="text-start">
                                <h3 className="ps-3 m-0">{R_event.voitjad}</h3>
                            </td>

                            <td className="text-center">
                                <a href={R_event.juhend}>Link</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default VabariiklikudVoistlusedTabel;