import React, { Component } from 'react';
import css from '../css/Form.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      alert('Please enter name and number');
      return;
    }
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
    console.log(this.state);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={css.input}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            className={css.input}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
