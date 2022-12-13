import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Name = () => {
  const [name, setName] = useState();

  const params = useParams();
  const b = params.name;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/${b}`);
      const data = await response.json();
      setName(data);
    };

    fetchData();
  }, []);
  console.log(name);
  return (
    <div>
      {name === undefined
        ? console.log("..loading")
        : name.map((employee) => {
            return <p>{employee.firstName}</p>;
          })}
    </div>
  );
};

export default Name;
