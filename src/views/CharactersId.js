import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CharactersId = ({ match }) => {
  const { store, actions } = useContext(Context);
  const id = match.params.id;
  return (
    <>
      <div className="container bg-starwars">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card mb-3">
              <img
                src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/03/Star-Wars-The-Bad-Batch-2-scaled.jpeg?fit=2560%2C1630&ssl=1"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {store.character.results[id - 1].name}
                </h5>
                <p className="card-text">
                  These characters belong to star wars
                </p>
                <ul className="list-group">
                  <li className="list-group-item">
                    Gender: <ins></ins>
                    {store.character.results[id - 1].gender}
                  </li>
                  <li className="list-group-item">
                    Height: {store.character.results[id - 1].height}
                  </li>
                  <li className="list-group-item">
                    Mass: {store.character.results[id - 1].mass}
                  </li>
                  <li className="list-group-item">
                    Hair Color: {store.character.results[id - 1].hair_color}
                  </li>
                  <li className="list-group-item">
                    Skin Color: {store.character.results[id - 1].skin_color}
                  </li>
                  <li className="list-group-item">
                    Eye Color: {store.character.results[id - 1].eye_color}
                  </li>
                  <li className="list-group-item">
                    Birth Year: {store.character.results[id - 1].birth_year}
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

export default CharactersId;
