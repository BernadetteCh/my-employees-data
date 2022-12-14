import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const fetchData = async (dataSetter, years) => {
  const response = await fetch(
    `http://localhost:8080/years-of-experience/${years}`
  );
  const data = await response.json();
  if (!response.ok) {
    console.log(`${response.status}`);
  } else {
    dataSetter(data);
  }
};
const Statistic = () => {
  const [apiData, setApiData] = useState();
  const params = useParams();
  const years = params.years;
  useEffect(() => {
    fetchData(setApiData, years);
  }, []);

  return (
    <div>
      {apiData !== undefined
        ? apiData.map((data) => {
            return (
              <div>
                {data.firstName}, years: {data.years}
              </div>
            );
          })
        : console.log("..loading")}
    </div>
  );
};
export default Statistic;
