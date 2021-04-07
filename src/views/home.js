import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Characters from "./characters";
import Planets from "./planets";
import Starships from "./starships";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <h1>Home</h1>
      <hr />
      <h2>Personajes</h2>
      <Characters />
      <hr />
      <h2>Planetas</h2>
      <hr />
      <Planets />
      <h2>Starships</h2>
      <Starships />
      <hr />
    </>
  );
};

export default Home;
