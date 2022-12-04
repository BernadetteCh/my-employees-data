import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Edit = () => {
  const [data, setDat] = useState([]);
  const params = useParams();
  const id = params.id.toString();

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      const response = await fetch(`http://localhost:8080/api/edit/${id}`);
      const data = await response.json();

      if (!response.ok) {
        console.log(`Error: ${response.status} ${response.statusText}`);
      } else {
        setDat(data);
      }
    };
    fetchData();
  }, [params.id]);

  return <div>Hello from edit</div>;
};

export default Edit;
