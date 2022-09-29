import React from "react";
import useScreenSize from "./useWidth";
import { Mobile } from "./components/Mobile";
import { Desktop } from "./components/Desktop";

export const App = () => {
  const { width } = useScreenSize();

  return (
    <div className="card-container">
      {width < 680 ? <Mobile /> : <Desktop />}
    </div>
  );
};
