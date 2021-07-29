import {
  FETCH_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_TOPRATED_MOVIES,
  SEARCHED_MOVIE,
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      console.log("reducer");
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_TOPRATED_MOVIES:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
