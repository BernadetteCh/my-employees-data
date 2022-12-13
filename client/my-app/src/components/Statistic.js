import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Statistic = () => {
  const params = useParams();
  const name = params.name;
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/showStatistic/${name}`
      );
      const data = await response.json();
      console.log(data);
      setApiData(data);
    };
    fetchData();
  }, []);
  const statistic = () => {
    return (
      <ul>
        {apiData.map((data, index) => {
          return (
            <li key={index}>
              {
                <div>
                  <strong>Name: {data.firstName}</strong>
                  <strong>
                    Date of creation:<span>{data.date}</span>
                  </strong>
                </div>
              }
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      Hi from Statistic
      <div>
        {apiData === undefined ? console.log("...loading") : statistic()}
      </div>
    </div>
  );
};

export default Statistic;
