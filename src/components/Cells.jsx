import React, { Component } from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";
import { onDateClick } from "../actions/calendarActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Cells extends Component {
  render() {
    const { currentMonth, selectedDate } = this.props;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                  ? "selected"
                  : ""
            }`}
            key={day}
            onClick={() => this.props.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <div className="cell-icon">
              <FontAwesomeIcon onClick={() => console.log(1111)} icon="edit" />
            </div>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  }
}

const mapStateToProps = state => ({
  currentMonth: state.calendarReducer.currentMonth,
  selectedDate: state.calendarReducer.selectedDate
});

export default connect(
  mapStateToProps,
  { onDateClick }
)(Cells);
