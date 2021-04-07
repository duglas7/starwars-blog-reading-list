import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { withRouter, Link } from "react-router-dom";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.deleteFavorites();
  }, []);
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
              width="70"
              height="39"
              alt=""
            />
          </Link>
          <Link className="nav-item" to="/characters">
            Characters
          </Link>
          <Link className="nav-item" to="/planets">
            Planets
          </Link>
          <Link className="nav-item" to="/starships">
            Starships
          </Link>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Favoritos {store.favorites.length}
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                {store.favorites.map((elemento, index) => {
                  return (
                    <div key={index} className="d-flex">
                      <p>{elemento}</p>
                      <button
                        className="btn"
                        onClick={() => actions.deleteFavorites(index)}
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                  );
                })}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
