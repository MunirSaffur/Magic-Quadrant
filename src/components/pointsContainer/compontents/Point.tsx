import React, { Component, useState, useContext } from "react";
import { PointItem, PointLabel } from "./points.styles";
import { Company } from "../../../store/reducer";

interface CompanyProps {
  company: Company;
}

const Point: React.FC<CompanyProps> = ({ company }) => {
  return (
    <>
      <PointItem
        style={{ bottom: `${company.ability}%`, left: `${company.vision}%` }}
      >
        <PointLabel>{company.label}</PointLabel>
      </PointItem>
    </>
  );
};
export default Point;
