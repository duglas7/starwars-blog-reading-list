import React, { useContext } from "react";
import { Context } from "../store/appContext";

const PlanetsId = ({ match }) => {
  const { store, actions } = useContext(Context);
  const id = match.params.id;
  return (
    <>
      <div className="container bg-planet-starwars">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card mb-3">
              <img
                src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {store.planet.results[id - 1].name}
                </h5>
                <p className="card-text">These planets belong to star wars</p>
                <ul className="list-group">
                  <li className="list-group-item">
                    Rotation Period: <ins></ins>
                    {store.planet.results[id - 1].rotation_period}
                  </li>
                  <li className="list-group-item">
                    Diameter: {store.planet.results[id - 1].diameter}
                  </li>
                  <li className="list-group-item">
                    Climate: {store.planet.results[id - 1].climate}
                  </li>
                  <li className="list-group-item">
                    Gravity: {store.planet.results[id - 1].gravity}
                  </li>
                  <li className="list-group-item">
                    Terrain: {store.planet.results[id - 1].terrain}
                  </li>
                  <li className="list-group-item">
                    Surface Water: {store.planet.results[id - 1].surface_water}
                  </li>
                  <li className="list-group-item">
                    Population: {store.planet.results[id - 1].population}
                  </li>
                </ul>
                <p className="card-text">
                  <small className="text-muted mx-auto">
                    SWAPI The Star Wars API
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default PlanetsId;
