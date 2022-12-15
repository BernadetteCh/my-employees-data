import React, { useEffect, useState } from "react";

const fetchData = async (dataSetter) => {
  const url = "http://localhost:8080/positions";
  const response = await fetch(`${url}`);
  const data = await response.json();
  dataSetter(data);
};
const Positions = () => {
  const [positionsData, setPositionsData] = useState();

  useEffect(() => {
    fetchData(setPositionsData);
  });

  return (
    <div>
      {positionsData === undefined
        ? console.log("..loading")
        : positionsData.map((position, index) => {
            return (
              <li key={index}>
                {position.name}
                <strong>
                  Salary:<span>{position.salary}</span>
                </strong>
                <strong>Overbudget:</strong>
                <span>{position.overbudget}</span>
              </li>
            );
          })}
    </div>
  );
};

export default Positions;
