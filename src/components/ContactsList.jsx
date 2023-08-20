import React from 'react';
import css from '../css/ContactsList.module.css';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.listItem}>
          <span className={css.listText}>
            {contact.name}: {contact.number}
          </span>
          <button
            onClick={() => onDeleteContact(contact.id)}
            className={css.listButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
