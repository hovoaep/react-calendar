import * as TYPES from "./types";

export const onDateClick = day => dispatch => {
  dispatch({
    type: TYPES.SET_DAY,
    payload: day
  });
};
