import React from "react";
import Joi from "joi-browser";
import Form from "./../common/Form";

export default class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().label("Password").min(5),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // call server
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
