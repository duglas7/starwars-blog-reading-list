import React, { useContext } from "react";
import { Context } from "../store/appContext";

const StarshipsId = ({ match }) => {
  const { store, actions } = useContext(Context);
  const id = match.params.id;
  return (
    <>
      <div className="container bg-starships-starwars">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card mb-3">
              <img
                src="https://www.cnet.com/a/img/zCS3dAJhSpM4Dk8Bee2Te8Uicu0=/1200x630/2020/01/09/f79a9662-35a4-4676-bbf6-b71a223e0a5c/ship-tie-razor-crest.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {store.starships.results[id - 1].name}
                </h5>
                <p className="card-text">These planets belong to star wars</p>
                <ul className="list-group">
                  <li className="list-group-item">
                    Model: {store.starships.results[id - 1].model}
                  </li>
                  <li className="list-group-item">
                    Manufacturer: {store.starships.results[id - 1].manufacturer}
                  </li>
                  <li className="list-group-item">
                    Cost in Credits:{" "}
                    {store.starships.results[id - 1].cost_in_credits}
                  </li>
                  <li className="list-group-item">
                    Length: {store.starships.results[id - 1].length}
                  </li>
                  <li className="list-group-item">
                    Max Atmosphering Speed:
                    {store.starships.results[id - 1].max_atmosphering_speed}
                  </li>
                  <li className="list-group-item">
                    Passengers: {store.starships.results[id - 1].passengers}
                  </li>
                  <li className="list-group-item">
                    Cargo Capacity:
                    {store.starships.results[id - 1].cargo_capacity}
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

export default StarshipsId;
