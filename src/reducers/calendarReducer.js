import * as TYPES from "../actions/types";

const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_NEXT_MONTH:
      return {
        ...state,
        currentMonth: action.payload
      };
    case TYPES.SET_PREV_MONTH:
      return {
        ...state,
        currentMonth: action.payload
      };
    case TYPES.SET_DAY:
      return {
        ...state,
        selectedDate: action.payload
      };
    // case ACTIVE_EMAIL:
    //   return {
    //     ...state,
    //     isActiveEmail: action.payload
    //   };
    default:
      return state;
  }
}
