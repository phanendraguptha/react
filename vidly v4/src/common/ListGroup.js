import React, { Component } from "react";

export default class ListGroup extends Component {
  render() {
    const {
      items,
      textProperty,
      valueProperty,
      selectedItem,
      onItemSelect,
    } = this.props;
    return (
      <React.Fragment>
        <ul className="list-group">
          {items.map((item) => (
            <li
              key={item[valueProperty]}
              className={
                selectedItem === item
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onItemSelect(item)}
            >
              {item[textProperty]}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
