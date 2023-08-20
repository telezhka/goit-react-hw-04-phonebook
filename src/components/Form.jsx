import React, { useState } from 'react';
import css from '../css/Form.module.css';
import PropTypes from 'prop-types';

export const Form = ({ onAddContact }) => {
  // state = {
  //   name: '',
  //   number: '',
  // };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
    // name = event.target.value;
    // this.setState({ [name]: value });
    console.log(name);
  };
  const handleChangeNumber = event => {
    setNumber(event.target.value);
    // number = event.target.value;
    // this.setState({ [name]: value });
    console.log(number);
  };
  const handleSubmit = event => {
    event.preventDefault();
    // const { name, number } = this.state;
    if (!name || !number) {
      alert('Please enter name and number');
      return;
    }
    onAddContact(name, number);
    // this.setState({ name: '', number: '' });
    setName('');
    setNumber('');
    // console.log(this.state);
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
          onChange={handleChangeName}
          className={css.input}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
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
