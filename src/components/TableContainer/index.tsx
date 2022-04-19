import React, { Component, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button } from "react-bootstrap";
import TRow from "./components/TRow";
import { Context } from "../../store/context";
import { ActionTypes } from "../../store/reducer";

const TableContainer: React.FC = () => {
  const { state, dispatch } = useContext(Context);

  const appendCompany = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const newCompany = {
      id: Date.now(),
      label: "Company X",
      vision: 50,
      ability: 50,
    };
    dispatch({ type: ActionTypes.addCompany, payload: newCompany });
  };
  return (
    <>
      <Button onClick={appendCompany}>Add</Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="bg-secondary mx-1 text-white">Lable</th>
            <th className="bg-secondary mx-1 text-white">Vision</th>
            <th className="bg-secondary mx-1 text-white">Ability</th>
            <th className="bg-secondary mx-1 text-white">Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.map((trow) => (
            <TRow key={trow.id} company={trow} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default TableContainer;
