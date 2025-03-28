import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchXMLData = async () => {
      try {
        const response = await axios.get('https://test.voco.ee/veebivormid/oppekavad/xml');
        const xmlText = response.data;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        const oppekavas = xmlDoc.getElementsByTagName('oppekava');
        const allData = [];
        for (let i = 0; i < oppekavas.length; i++) {
          const oppekava = oppekavas[i];
          const oppekavaNimetus = oppekava.getElementsByTagName('oppekava_nimetus')[0]?.textContent;
          const oppekavaKood = oppekava.getElementsByTagName('oppekava_kood')[0]?.textContent;
          allData.push({
            oppekavaNimetus,
            oppekavaKood,
          });
        }
        setData(allData);
      } catch (error) {
        console.error('Error fetching or parsing XML:', error);
      }
    };

    fetchXMLData();
  }, []);

  return (
    <div>
      <h1>Oppekava Data</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <p><strong>Oppekava Nimetus:</strong> {item.oppekavaNimetus}</p>
            <p><strong>Oppekava Kood:</strong> {item.oppekavaKood}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Test;
