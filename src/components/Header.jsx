import React, { Component } from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";
import { nextMonth, prevMonth } from "../actions/calendarActions";

class Header extends Component {
  render() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div
            className="icon"
            onClick={() => this.props.prevMonth(this.props.currentMonth)}
          >
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.props.currentMonth, dateFormat)}</span>
        </div>
        <div
          className="col col-end"
          onClick={() => this.props.nextMonth(this.props.currentMonth)}
        >
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMonth: state.calendarReducer.currentMonth,
  selectedDate: state.calendarReducer.selectedDate
});

export default connect(
  mapStateToProps,
  { nextMonth, prevMonth }
)(Header);
