import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactsList';
import { Form } from './Form';
import { FilterInput } from './FilterInput';
export const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    // const componentDidMount = () => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
      // this.setState({ contacts: JSON.parse(storedContacts) });
      // }
    }
  }, []);

  useEffect(() => {
    // const componentDidUpdate = (prevProps, prevState) => {
    // const { contacts } = this.state;
    // if (prevState.contacts !== contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    // }
    // };
  }, [contacts]);

  const handleAddContact = (name, number) => {
    // const { contacts } = this.state;
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact],
    // }));
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = id => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    // }));
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilterChange = event => {
    // this.setState({ filter: event.target.value });
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    // const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  // render() {
  //   const { filter } = this.state;
  const filteredContacts = getFilteredContacts();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <Form onAddContact={handleAddContact} />
        <h2>Contacts</h2>
        <FilterInput value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
  // }
};
