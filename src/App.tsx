import React, { useReducer, useEffect } from "react";
import "./App.css";
import PointsContainer from "./components/pointsContainer";
import TableContainer from "./components/TableContainer";
import { initialState, reducer } from "./store/reducer";
import { Context } from "./store/context";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("companies", JSON.stringify(state));
    }, 500);

    return () => clearTimeout(timer);
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <PointsContainer />
            </div>
            <div className="col-7">
              <TableContainer />
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
