import * as TYPES from "./types";
import dateFns from "date-fns";

export const onDateClick = day => dispatch => {
  dispatch({
    type: TYPES.SET_DAY,
    payload: day
  });
};

export const nextMonth = month => dispatch => {
  let nextMonth = dateFns.addMonths(month, 1);
  dispatch({
    type: TYPES.SET_NEXT_MONTH,
    payload: nextMonth
  });
};

export const prevMonth = month => dispatch => {
  let prevMonth = dateFns.subMonths(month, 1);
  dispatch({
    type: TYPES.SET_PREV_MONTH,
    payload: prevMonth
  });
};
