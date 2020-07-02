import React, { Component } from "react";

class Counter extends Component {
  // css styles
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  // for number
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  // for number background color
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div className="m-2">
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
