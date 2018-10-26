import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Modal extends Component {
  state = {
    show: false,
    text: "",
    list: ["aaa", "bbb"]
  };

  showNewEventFileds = () => {
    this.setState({ show: true });
  };
  onAddNewEvent = () => {
    if (!this.state.text) return false;
    let list = this.state.list;
    list.push(this.state.text);
    this.setState({ text: "", list });
  };
  render() {
    const list = this.state.list ? (
      this.state.list.map(item => {
        return (
          <li key={item}>
            {item}
            <span>
              <FontAwesomeIcon icon="edit" onClick={} />
              <FontAwesomeIcon icon="trash" />
            </span>
          </li>
        );
      })
    ) : (
      <li>Loading</li>
    );
    return (
      <div>
        <button className="close-modal" onClick={this.props.closeModal}>
          <FontAwesomeIcon icon="times" />
        </button>
        <div className="modal">
          <div className="modal-content">
            <h3>12 septmeber</h3>
            <div className="event-container">
              <div className="event">
                <h4>Events</h4>
                <ul className="event-lists">{list}</ul>
              </div>
              <div className="add-new-event">
                <button onClick={this.showNewEventFileds}>Add new Event</button>
              </div>
              {this.state.show && (
                <div>
                  <input
                    type="text"
                    onChange={e => this.setState({ text: e.target.value })}
                    value={this.state.text}
                  />
                  <button onClick={this.onAddNewEvent}>Add new Event</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show" />
      </div>
    );
  }
}

export default Modal;
