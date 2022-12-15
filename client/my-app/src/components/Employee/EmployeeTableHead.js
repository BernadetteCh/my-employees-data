import React from "react";

const EmployeeTableHead = ({ sortList }) => {
  const sortEmployee = (key, method) => {
    sortList(key, method);
  };
  return (
    <thead>
      <tr>
        <th>
          FirstName
          <button
            className="sortButton"
            onClick={() => sortEmployee("firstName", "ascending")}
          >
            ⬆
          </button>
          <button
            className="sortButton"
            onClick={() => sortEmployee("firstName", "descending")}
          >
            ⬇
          </button>
        </th>
        <th>
          SecondName
          <button
            className="sortButton"
            onClick={() => sortEmployee("secondName", "ascending")}
          >
            ⬆
          </button>
          <button
            className="sortButton"
            onClick={() => sortEmployee("secondName", "descending")}
          >
            ⬇
          </button>
        </th>
        <th>
          LastName
          <button
            className="sortButton"
            onClick={() => sortEmployee("lastName", "ascending")}
          >
            ⬆
          </button>
          <button
            className="sortButton"
            onClick={() => sortEmployee("lastName", "descending")}
          >
            ⬇
          </button>
        </th>
        <th>
          Position
          <button
            className="sortButton"
            onClick={() => sortEmployee("position", "ascending")}
          >
            {" "}
            ⬆
          </button>
          <button
            className="sortButton"
            onClick={() => sortEmployee("position", "descending")}
          >
            ⬇
          </button>
        </th>
        <th>
          Level
          <button
            className="sortButton"
            onClick={() => sortEmployee("level", "ascending")}
          >
            ⬆
          </button>
          <button
            className="sortButton"
            onClick={() => sortEmployee("level", "descending")}
          >
            ⬇
          </button>
        </th>
        <th>TotalSum</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default EmployeeTableHead;
