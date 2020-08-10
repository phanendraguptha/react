import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test",
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentwill recieve props");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update");
  }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
