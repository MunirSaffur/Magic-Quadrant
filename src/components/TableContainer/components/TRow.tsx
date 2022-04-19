import React, { Component, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";
import { Company, ActionTypes } from "../../../store/reducer";
import { Context } from "../../../store/context";

interface TableItemProps {
  company: Company;
}

const TRow: React.FC<TableItemProps> = ({ company }) => {
  const { dispatch } = useContext(Context);

  const deleteTableRow = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();

    dispatch({ type: ActionTypes.deleteCompany, payload: id });
  };

  const dataUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "checkbox") {
      dispatch({
        type: ActionTypes.updateCompany,
        payload: { ...company, checked: !company.checked },
      });
      return;
    }

    dispatch({
      type: ActionTypes.updateCompany,
      payload: { ...company, [e.target.name]: e.target.value },
    });
  };

  return (
    <tr>
      <td>
        <Form.Control
          type="text"
          name="label"
          value={company.label}
          onChange={dataUpdate}
        />
      </td>
      <td>
        <Form.Control
          type="number"
          name="vision"
          max="100"
          min="0"
          value={company.vision}
          onChange={dataUpdate}
        />
      </td>
      <td>
        <Form.Control
          type="number"
          name="ability"
          max="100"
          min="0"
          value={company.ability}
          onChange={dataUpdate}
        />
      </td>
      <td>
        <Button
          variant="secondary"
          onClick={(e) => deleteTableRow(e, company.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default TRow;
