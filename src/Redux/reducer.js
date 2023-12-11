import { ERROR, LOADING, SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  data: [],
  error: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: false,
      };

    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};
