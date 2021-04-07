const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: null,
      planet: null,
      starships: null,
      favorites: [],
    },
    actions: {
      getCharacters: (url, options = {}) => {
        fetch(url, options)
          .then((resp) => resp.json())
          .then((data) => setStore({ character: data }))
          .catch((error) => console.warn(error));
      },

      getPlanets: (url, options = {}) => {
        fetch(url, options)
          .then((resp) => resp.json())
          .then((data) => setStore({ planet: data }))
          .catch((error) => console.warn(error));
      },

      getStarships: (url, options = {}) => {
        fetch(url, options)
          .then((resp) => resp.json())
          .then((data) => setStore({ starships: data }))
          .catch((error) => console.warn(error));
      },

      addFavorites: (favorito) => {
        const store = getStore();
        const { favorites } = store;
        favorites.push(favorito);
        setStore({
          favorites: favorites,
        });
      },

      deleteFavorites: (index) => {
        const store = getStore();
        const { favorites } = store;
        favorites.splice(index, 1);
        setStore({
          favorites: favorites,
        });
      },
    },
  };
};
export default getState;
