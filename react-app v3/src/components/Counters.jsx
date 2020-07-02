import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    const {
      onDelete,
      onIncrement,
      onDecrement,
      onReset,
      counters,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
