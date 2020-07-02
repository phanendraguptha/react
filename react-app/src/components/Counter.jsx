import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      tags: ["tag1", "tag2"],
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // css styles
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  // for number
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  // for number background color
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // handling increment
  handleIncrement() {
    let count = this.state.count;
    this.setState({ count: count + 1 });
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
