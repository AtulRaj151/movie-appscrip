import { AdD_SEARCH_RESULT } from "../action/actionTypes";

const initialStates = {
  search: [],
};
export function search(state = initialStates, action) {
  switch (action.type) {
    case AdD_SEARCH_RESULT:
      if (action.movie === undefined) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        search: action.movie,
      };
    default:
      return state;
  }
}
