import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const fetchData = async (dataSetter, years, setError) => {
  const response = await fetch(
    `http://localhost:8080/years-of-experience/${years}`
  );

  if (!response.ok) {
    console.log(response.status);
    setError(`${response.status}`);
  } else {
    const data = await response.json();
    dataSetter(data);
  }
};
const Statistic = () => {
  const [apiData, setApiData] = useState();
  const [error, setError] = useState();
  const params = useParams();
  const years = params.years;
  useEffect(() => {
    fetchData(setApiData, years, setError);
  }, []);
  console.log(error);

  if (error === "404") {
    return <div>404 Page not found</div>;
  } else {
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
  }
};
export default Statistic;
