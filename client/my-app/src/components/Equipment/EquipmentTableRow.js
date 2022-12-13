import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Input from "../Input";
import { Link } from "react-router-dom";

const EquipmentTableRow = ({
  equipment,
  equipments,
  myKey,
  updateEquipmentData,
}) => {
  const [displayCommentField, setDisplayCommentField] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [comment, setComment] = useState("");

  const fetchComment = async (id) => {
    if (id !== undefined) {
      const url = `http://localhost:8080/equipment/comment/${id}`;
      const response = await fetch(`${url}`);
      const data = await response.json();
      setComment(data[0].comment);
    }
  };

  const deleteEquipment = async () => {
    console.log(equipment._id);
    const url = `http://localhost:8080/equipment/delete/${equipment._id}`;
    const response = await fetch(`${url}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      console.log(`Èrror:${response.status}`);
    } else {
      const data = await response.json();
      updateEquipmentData(data);
    }
  };
  const toggleInputField = () => {
    setDisplayCommentField(
      (displayCommentField) => !displayCommentField,
      fetchComment(equipment._id)
    );
  };
  const upDateInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const saveComment = async () => {
    const url = `http://localhost:8080/equipment/comment/${myKey}`;
    const response = await fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ comment: inputValue }),
    });

    if (!response.ok) {
      console.log(`Error:${response.status}`);
    }
  };
  if (displayCommentField == true) {
    console.log(comment);
    return (
      <tr>
        <td onClick={toggleInputField}>
          {equipment.name}
          <Input
            type={"text"}
            value={inputValue}
            placeholder={comment}
            autoFocus={"on"}
            upDateInputValue={upDateInputValue}
          />
          <Button onClick={saveComment}>Save Comment</Button>
        </td>
        <td>{equipment.type}</td>
        <td>{equipment.amount}</td>
        <td>
          <Link to={`/edit/equipment/${equipment._id}`}>Edit</Link> |
          <Button onClick={deleteEquipment}>Delete</Button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td onClick={toggleInputField}>{equipment.name}</td>
        <td>{equipment.type}</td>
        <td>{equipment.amount}</td>
        <td>
          <Link to={`/edit/equipment/${equipment._id}`}>Edit</Link> |
          <Button onClick={deleteEquipment}>Delete</Button>
        </td>
      </tr>
    );
  }
};
export default EquipmentTableRow;
