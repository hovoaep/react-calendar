import * as TYPES from "../actions/types";

const initialState = {
  day: 1,
  mounth: 2,
  eventsList: ["aaa", "bbb"]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_EVENT_DAY:
    // return {
    //   ...state,
    //   currentMonth: action.payload
    // };
    case TYPES.SET_EVENT_МONTH:
    // return {
    //   ...state,
    //   currentMonth: action.payload
    // };
    case TYPES.SET_EVENT_ԼISTS:
    // return {
    //   ...state,
    //   selectedDate: action.payload
    // };
    // case ACTIVE_EMAIL:
    //   return {
    //     ...state,
    //     isActiveEmail: action.payload
    //   };
    default:
      return state;
  }
}
