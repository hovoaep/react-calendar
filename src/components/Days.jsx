import React, { Component } from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";

class Days extends Component {
  render() {
    const dateFormat = "dddd";
    let startDate = dateFns.startOfWeek(this.props.currentMonth);

    const days = [];

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return (
      <div>
        <div className="days row">{days}</div>;
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMonth: state.calendarReducer.currentMonth
});

export default connect(mapStateToProps)(Days);
