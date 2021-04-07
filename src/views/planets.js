import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <div className="row flex-row flex-nowrap row-cols-1 row-cols-md-4 pt-4">
        {!!store.planet &&
          store.planet.results.map((planet, index) => (
            <div className="planets col mb-4" key={index}>
              <div className="card h-100 border-dark">
                <img
                  src={`/img/${planet.name}.jpg`}
                  className="card-img-top border-danger border-bottom"
                  alt=""
                />
                <div className="card-body bg-body-card">
                  <h5 className="card-title">{planet.name}</h5>
                  <ul className="caracteristicas">
                    <li> rotation period : {planet.rotation_period}</li>
                    <li> orbital period : {planet.orbital_period}</li>
                    <li> diameter : {planet.diameter}</li>
                    <li> climate : {planet.climate}</li>
                  </ul>
                  <div className="row justify-contet-between">
                    <div className="col-9">
                      <button type="button" className="btn btn-outline-primary">
                        <Link to={`/planets/${index + 1}`}>Learn more!</Link>
                      </button>
                    </div>
                    <div className="col-3">
                      {/*    <Favorites favorite={planet.name} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="btn-group" role="group">
        <button className="btn btn-success"
          onClick={() => {
            if (store.planet !== null && store.planet.next !== null) {
              actions.getPlanets(store.planet.next);
            }
          }}
        >
          Next
        </button>
        <button className="btn btn-danger"
          onClick={() => {
            if (store.planet !== null && store.planet.previous !== null) {
              actions.getPlanets(store.planet.previous);
            }
          }}
        >
          Previus
        </button>
      </div>
    </div>
  );
};

export default Planets;
