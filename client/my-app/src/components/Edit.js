import React, { useState, useEffect } from "react";

const Edit = ({ employeeId }) => {
  const [data, setDat] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`http://localhost:8080/api/edit/`);
  //     const data = await response.json();

  //     if (!response.ok) {
  //       console.log(`Error: ${response.status} ${response.statusText}`);
  //     } else {
  //       setDat(data);
  //     }
  //   };
  //   fetchData();
  // }, []);
  console.log(employeeId);
  return <div>Hello from edit</div>;
};

export default Edit;
