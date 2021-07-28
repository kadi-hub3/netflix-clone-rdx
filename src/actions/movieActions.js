import { FETCH_MOVIES, SEARCHED_MOVIE } from "../actions/types";

export const fetchMovies = () => (dispatch) => {
  console.log("fetchin");
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
    .then((res) => res.json())
    .then((movies) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies,
      })
    );
};
