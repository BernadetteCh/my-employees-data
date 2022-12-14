import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const fetchData = async (dataSetter, years) => {
  const url = `http://localhost:8080/years-of-experience/${years}`;
  const response = await fetch(`${url}`);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    console.log("404 page not found");
  } else {
    dataSetter(data);
  }
};

const Statistic = () => {
  const [apiData, setApiData] = useState();

  const params = useParams();
  const years = params.years;
  console.log(years);
  useEffect(() => {
    fetchData(setApiData, years);
  }, []);

  return <div>HI from Statistic</div>;
};

export default Statistic;
