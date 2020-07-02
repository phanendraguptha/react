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
    // const classes =
    //   this.props.counter.value > 0
    //     ? "btn btn-secondary m-2"
    //     : "btn btn-secondary m-2 disabled";
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
