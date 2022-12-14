import React, { useState, useEffect } from "react";
import "../App.css";

const fetchEmployeeEquipmentList = async (dataSetter) => {
  const url = `http://localhost:8080/api`;
  const response = await fetch(`${url}`);
  const data = await response.json();
  dataSetter(data);
};

const EquipmentEmployeeList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchEmployeeEquipmentList(setData);
  }, []);
  return (
    <div>
      {data === undefined ? (
        console.log("..loading")
      ) : (
        <ul>
          {data.map((data) => {
            return (
              <li key={data._id}>
                {data.firstName} <strong>Equipment:</strong>
                <span>{data.equipment.name}</span>
                <strong>Amount:</strong>
                <span>{data.amount}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default EquipmentEmployeeList;
