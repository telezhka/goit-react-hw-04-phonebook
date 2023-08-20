import React, { useState, useEffect } from 'react';
import css from '../css/Form.module.css';
import PropTypes from 'prop-types';

export const Form = () => {
  // state = {
  //   name: '',
  //   number: '',
  // };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { input } = event.target.value;
    // this.setState({ [name]: value });
    console.log(input);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const { name, number } = this.state;
    if (!name || !number) {
      alert('Please enter name and number');
      return;
    }
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
    console.log(this.state);
  };

  // render() {
  //   const { name, number } = this.state;
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
  // }
};
Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
