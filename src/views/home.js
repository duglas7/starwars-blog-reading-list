import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Characters from "./characters";
import Planets from "./planets";
import Starships from "./starships";

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.addFavorites();
    actions.deleteFavorites();
  }, []);
  return (
    <>
      <div className="container-fluid p-0">
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
          <Characters />
        </div>
      </div>
      <hr />
      <div className="container-fluid p-0">
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
          <Planets />
        </div>
      </div>
      <hr />
      <div className="container-fluid p-0">
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
          <Starships />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
