import React, { Component, useContext } from "react";
import Point from "./compontents/Point";
import { PointsContainerStyle, AreaCont, AreaLabel } from "./index.styles";
import { Context } from "../../store/context";

const PointsContainer: React.FC = () => {
  const { state } = useContext(Context);

  return (
    <PointsContainerStyle>
      <AreaCont area="top-left">
        <AreaLabel float="top">Challengers</AreaLabel>{" "}
      </AreaCont>
      <AreaCont area="top-right">
        <AreaLabel float="top">Leaders</AreaLabel>
      </AreaCont>
      <AreaCont area="bottom-left">
        <AreaLabel float="bottom">Niche Players</AreaLabel>
      </AreaCont>
      <AreaCont area="bottom-right">
        <AreaLabel float="bottom">Visionaries</AreaLabel>
      </AreaCont>
      {state.map((pointData) => (
        <Point key={pointData.id} company={pointData} />
      ))}
    </PointsContainerStyle>
  );
};

export default PointsContainer;
