import React, { useEffect, useState } from "react";

const Attendance = () => {
  const [present, setPresent] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api");
      const data = await response.json();
      console.log(data);
      setPresent(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      {present === undefined
        ? console.log("hallo")
        : present.map((data) => {
            if (data.present === false) {
              return <div>{data.firstName}</div>;
            }
          })}
    </div>
  );
};

export default Attendance;
