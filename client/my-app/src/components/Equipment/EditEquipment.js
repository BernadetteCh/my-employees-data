import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Input from "../Input";

const EditEquipment = () => {
  const [equipmentData, setEquipmentData] = useState({});

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchEquipmentData = async () => {
      const response = await fetch(
        `http://localhost:8080/equipment/edit/equipment/${id}`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log(`Error: ${response.status}`);
      }
      setEquipmentData(data);
    };
    fetchEquipmentData();
  }, [id]);

  const editEquipmentData = (obj) => {
    setEquipmentData((prev) => ({
      ...prev,
      ...obj,
    }));
  };
  const editEquipment = (e) => {
    e.preventDefault();
    const response = fetch(
      `http://localhost:8080/equipment/edit/equipment/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ equipmentData }),
      }
    );
    if (!response.ok) {
      console.log(`Èrror:${response.status}`);
    }
    setEquipmentData({
      name: "",
      type: "",
      amount: "",
    });
    navigate("/");
  };

  return (
    <div>
      <h2>Edit an Equipment</h2>
      <form>
        <label className="d-block">Name</label>
        <Input
          type={"text"}
          name={"name"}
          value={equipmentData.name}
          upDateInputValue={(e) =>
            editEquipmentData({ [e.target.name]: e.target.value })
          }
        />
        <label className="d-block">Type</label>
        <Input
          type={"text"}
          name={"type"}
          value={equipmentData.type}
          upDateInputValue={(e) =>
            editEquipmentData({ [e.target.name]: e.target.value })
          }
        />
        <label className="d-block">Amount</label>
        <Input
          type={"number"}
          name={"amount"}
          value={equipmentData.amount}
          upDateInputValue={(e) =>
            editEquipmentData({ [e.target.name]: e.target.value })
          }
        />
        <Button type="submit" className="submit-button" onClick={editEquipment}>
          Edit Equipment
        </Button>
      </form>
    </div>
  );
};

export default EditEquipment;
