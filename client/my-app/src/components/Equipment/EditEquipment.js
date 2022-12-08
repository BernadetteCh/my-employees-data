import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

const EditEquipment = () => {
  return (
    <div>
      <h2>Edit an Equipment</h2>
      <form>
        <label className="d-block">Name</label>
        <Input type={"text"} name="name" value={""} upDateInputValue={""} />
        <label className="d-block">Type</label>
        <Input type={"text"} name={"type"} value={""} upDateInputValue={""} />
        <label className="d-block">Amount</label>
        <Input
          type={"number"}
          name={"amount"}
          value={""}
          upDateInputValue={""}
        />
        {/* <Button type="submit" className="submit-button" onClick={saveData}>
          Create new Equipment
        </Button> */}
      </form>
    </div>
  );
};

export default EditEquipment;
