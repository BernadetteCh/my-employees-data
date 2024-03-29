import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Input from "../Input";
import Option from "../Option";

const EditEmployee = () => {
  const [data, setData] = useState([]);
  const selectPosition = [
    {
      position: "intern",
    },
    { position: "junior-developer" },
    { position: "senior-developer" },
  ];

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const url = `http://localhost:8080/api/edit/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}`);
      if (!response.ok) {
        console.log(`${response.status}`);
      } else {
        const data = await response.json();
        setData(data);
      }
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
    const response = await fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    if (!response.ok) {
      console.log(`Error:${response.status} ${response.statusText}`);
    }
    navigate("/");
  };

  return (
    <div className="ms-5 mt-5">
      <h2>Edit an Employee</h2>
      <form>
        <label className="d-block">FirstName:</label>
        <Input
          type={"text"}
          name={"firstName"}
          value={data.firstName}
          upDateInputValue={(e) =>
            editEmployeeData({
              [e.target.name]: e.target.value,
            })
          }
        />
        <label className="d-block">SecondName:</label>
        <Input
          type={"text"}
          name={"secondName"}
          value={data.secondName}
          upDateInputValue={(e) =>
            editEmployeeData({
              [e.target.name]: e.target.value,
            })
          }
        />
        <label className="d-block">LastName:</label>
        <Input
          type={"text"}
          name={"lastName"}
          value={data.lastName}
          upDateInputValue={(e) =>
            editEmployeeData({
              [e.target.name]: e.target.value,
            })
          }
        />
        <label className="d-block">Position</label>
        <Input
          type={"text"}
          name={"position"}
          value={data.position}
          upDateInputValue={(e) =>
            editEmployeeData({
              [e.target.name]: e.target.value,
            })
          }
        />
        <select
          name="level"
          className="d-block mt-5"
          onChange={(e) =>
            editEmployeeData({ [e.target.name]: e.target.value })
          }
        >
          <option defaultValue={data.level}>Select</option>
          {selectPosition.map((position, index) => {
            return (
              <Option
                key={index}
                value={position.position}
                name={position.position}
                option={position.position}
              />
            );
          })}
        </select>
        <Button type="submit" className="d-block mt-5" onClick={editEmployee}>
          Edit
        </Button>
      </form>
    </div>
  );
};

export default EditEmployee;
