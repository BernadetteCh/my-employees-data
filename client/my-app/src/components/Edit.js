import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Button from "react-bootstrap/Button";

const Edit = () => {
  const [data, setData] = useState([]);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      const response = await fetch(`http://localhost:8080/api/edit/${id}`);
      const data = await response.json();

      if (!response.ok) {
        console.log(`Error: ${response.status} ${response.statusText}`);
      }
      setData(data);
    };
    fetchData();
  }, [id]);

  const editEmployeeData = (obj) => {
    setData((prev) => ({
      ...prev,
      ...obj,
    }));
  };

  const editEmployee = async (e) => {
    e.preventDefault();
    const response = fetch(`http://localhost:8080/api/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    if (!response.ok) {
      console.log(`Error:${response.status} ${response.statusText}`);
    }
  };

  return (
    <div className="ms-5 mt-5">
      <h2>Edit an Employee</h2>
      <form>
        <label className="d-block">FirstName:</label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={(e) =>
            editEmployeeData({ [e.target.name]: e.target.value })
          }
        ></input>
        <label className="d-block">SecondName:</label>
        <input
          type="text"
          name="secondName"
          value={data.secondName}
          onChange={(e) =>
            editEmployeeData({ [e.target.name]: e.target.value })
          }
        ></input>
        <label className="d-block">LastName:</label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={(e) =>
            editEmployeeData({ [e.target.name]: e.target.value })
          }
        ></input>
        <label className="d-block">Position</label>
        <input
          type="text"
          name="position"
          value={data.position}
          onChange={(e) =>
            editEmployeeData({ [e.target.name]: e.target.value })
          }
        ></input>
        <select
          name="level"
          className="d-block mt-5"
          onChange={(e) =>
            editEmployeeData({ [e.target.name]: e.target.value })
          }
        >
          <option defaultValue={data.level}>Select</option>
          <option value="intern">Intern</option>
          <option value="junior-developer">Junior-Developer</option>
          <option value="senior-developer">Senior-Developer</option>
        </select>
        <Button type="submit" className="d-block mt-5" onClick={editEmployee}>
          Edit
        </Button>
      </form>
    </div>
  );
};

export default Edit;
