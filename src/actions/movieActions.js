import {
  FETCH_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_TOPRATED_MOVIES,
  SEARCHED_MOVIE,
} from "../actions/types";

export const fetchMovies = () => (dispatch) => {
  console.log("fetchin");
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=636c2a5775bc858d533ffec5b0eb61d9"
  )
    .then((res) => res.json())
    .then((movies) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies.results,
      })
    );
};

export const fetchUpcomingMovies = () => (dispatch) => {
  console.log("fetchin trend");

  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=636c2a5775bc858d533ffec5b0eb61d9"
  )
    .then((res) => res.json())
    .then((movies) =>
      dispatch({
        type: FETCH_UPCOMING_MOVIES,
        payload: movies.results,
      })
    );
};

export const fetchTopRatedMovies = () => (dispatch) => {
  console.log("fetchin top rated");
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=636c2a5775bc858d533ffec5b0eb61d9"
  )
    .then((res) => res.json())
    .then((movies) =>
      dispatch({
        type: FETCH_TOPRATED_MOVIES,
        payload: movies.results,
      })
    );
};
