import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Select from "./Select";

export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = {
      [name]: this.schema[name],
    };
    const { error } = Joi.validate(obj, schema);

    // console.log(error);
    // console.log(error ? error.details[0].message : null);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    // console.log(this.state);
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // gives e as argument and we are destructuring it {currentTarget} = e
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <input
        type="submit"
        disabled={this.validate()}
        className="btn btn-primary"
        value={label}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    // console.log(data);
    // console.log(data["numberInStock"]);
    return (
      <Input
        type={type}
        value={data[name]}
        label={label}
        name={name}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        value={data[name]}
        label={label}
        name={name}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}
