import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import Input from "../components/Input";

const Edit = () => {
  const [data, setData] = useState([]);
  // const [editData, setEditData] = useState({
  //   firstName: "",
  //   secondName: "asdf",
  //   lastName: "asdf",
  //   position: "asdf",
  //   level: "asdf",
  // });

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/edit/${id}`);
      const data = await response.json();

      if (!response.ok) {
        console.log(`Error: ${response.status} ${response.statusText}`);
      }
      setData(data);
      //setEditData(data);
    };
    fetchData();
  }, [id]);

  const editEmployeeData = (obj) => {
    setData((prev) => ({
      ...prev,
      ...obj,
    }));
  };

  // function updateForm(value) {
  //   return setEditData((prev) => {
  //     return { ...prev, ...value };
  //   });
  // }

  const editEmployee = async (e) => {
    e.preventDefault();
    const response = fetch(`http://localhost:8080/api/edit/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    console.log(response.status);

    // if (!response.ok) {
    //   console.log(`Error:${response.status} ${response.statusText}`);
    // }
  };

  return (
    <div className="ms-5 mt-5">
      <h2>Edit an Employee</h2>
      <form>
        <label className="d-block">FirstName:</label>
        {/* <Input
          type={"text"}
          name={"firstName"}
          value={data.firstName}
          upDateInputValue={(e) =>
            editEmployeeData({
              [e.target.name]: e.target.value,
            })
          }
        /> */}
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
        {/* <Input
          type={"text"}
          name={"lastName"}
          value={data.lastName}
          upDateInputValue={(e) =>
            editEmployeeData({
              [e.target.name]: e.target.value,
            })
          }
        /> */}
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={(e) =>
            editEmployeeData({ [e.target.name]: e.target.value })
          }
        ></input>
        <label className="d-block">Position</label>
        {/* <Input
          type={"text"}
          name={"position"}
          value={data.position}
          upDateInputValue={(e) =>
            editEmployeeData({
              [e.target.name]: e.target.value,
            })
          }
        /> */}
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
          <option value="intern" name="intern">
            Intern
          </option>
          <option value="junior-developer" name="junior-developer">
            Junior-Developer
          </option>
          <option value="senior-developer" name="senior-developer">
            Senior-Developer
          </option>
        </select>
        <Button type="submit" className="d-block mt-5" onClick={editEmployee}>
          Edit
        </Button>
      </form>
    </div>
  );
};

export default Edit;
