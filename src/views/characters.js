import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container pl-0 ml-5">
      <div className="row">
        <div className="col-7"></div>
        <div className="col mt-4">
          <h4 className="text-white">Characters</h4>
        </div>
        <div className="col"></div>
      </div>
      <div className="row flex-row flex-nowrap row-col-5 row-col-5-sm-2 row-col-sm-4 pt-4 ">
        {!!store.character &&
          store.character.results.map((character, index) => {
            return (
              <div className="people col-3 mb-4" key={index}>
                <div className="card h-100 border-dark bg-dark text-white">
                  <img
                    src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/03/Star-Wars-The-Bad-Batch-2-scaled.jpeg?fit=2560%2C1630&ssl=1"
                    className="card-img-top border-danger border-bottom"
                    alt=""
                  />
                  <div className="card-body bg-body-card">
                    <h5 className="card-title">{character.name} </h5>
                    <ul className="caracteristicas">
                      <li> height : {character.height}</li>
                      <li> mass : {character.mass}</li>
                      <li> hair color : {character.hair_color}</li>
                      <li> gender : {character.gender}</li>
                    </ul>
                    <div className="container">
                      <div className="row">
                        <div className="col-8">
                          <button
                            type="button"
                            className="LearnMore btn btn-outline-primary"
                          >
                            <Link to={`/characters/${index + 1}`}>
                              Learn more!
                            </Link>
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            href="#"
                            className="btn btn-outline-warning like-button"
                            onClick={() => actions.addFavorites(character.name)}
                          >
                            <i className="far fa-heart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="btn-group" role="group">
        <button
          className="btn btn-success"
          onClick={() => {
            if (store.character !== null && store.character.next !== null) {
              actions.getCharacters(store.character.next);
            }
          }}
        >
          Next
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (store.character !== null && store.character.previous !== null) {
              actions.getCharacters(store.character.previous);
            }
          }}
        >
          Previus
        </button>
      </div>
    </div>
  );
};

export default Characters;
