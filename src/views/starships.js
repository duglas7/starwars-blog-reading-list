import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Starships = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container pl-0 ml-5">
      <div className="row">
        <div className="col-7"></div>
        <div className="col mt-4">
          <h4 className="text-white">Starships</h4>
        </div>
        <div className="col"></div>
      </div>
      <div className="row flex-row flex-nowrap row-cols-1 row-cols-md-4 pt-4">
        {!!store.starships &&
          store.starships.results.map((starships, index) => (
            <div className="planets col mb-4" key={index}>
              <div className="card h-100 border-dark bg-dark text-white">
                <img
                  src="https://www.cnet.com/a/img/zCS3dAJhSpM4Dk8Bee2Te8Uicu0=/1200x630/2020/01/09/f79a9662-35a4-4676-bbf6-b71a223e0a5c/ship-tie-razor-crest.jpg"
                  className="card-img-top border-danger border-bottom"
                  alt=""
                />
                <div className="card-body bg-body-card">
                  <h5 className="card-title">{starships.name}</h5>
                  <ul className="caracteristicas">
                    <li> model : {starships.model}</li>
                    <li> manufacturer : {starships.manufacturer}</li>
                    <li> Cost in Credits : {starships.cost_in_credits}</li>
                    <li> clicargo capacitye : {starships.cargo_capacity}</li>
                  </ul>
                  <div className="row justify-contet-between">
                    <div className="col-9">
                      <button type="button" className="btn btn-outline-primary">
                        <Link to={`/starships/${index + 1}`}>Learn more!</Link>
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        href="#"
                        className="btn btn-outline-warning like-button"
                        onClick={() => actions.addFavorites(starships.name)}
                      >
                        <i className="far fa-heart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="btn-group" role="group">
        <button
          className="btn btn-success"
          onClick={() => {
            if (store.starships !== null && store.starships.next !== null) {
              actions.getStarships(store.starships.next);
            }
          }}
        >
          Next
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (store.starships !== null && store.starships.previous !== null) {
              actions.getStarships(store.starships.previous);
            }
          }}
        >
          Previus
        </button>
      </div>
    </div>
  );
};

export default Starships;
