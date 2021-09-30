import React, { useState, useEffect } from 'react';
import shortid from 'short-id';
import './App.css';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? 
    [    
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ])
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


  const handleSubmit = (name, number) => {
    if(contacts.find(contact => contact.name === name)) {
      alert(`${name} already exists`)
    } else {
      setContacts((contacts) => (
       [
          ...contacts,
          {
            id: shortid.generate(),
            name: name,
            number: number,
          },
        ]
      ))
    }
  }

  const hendleRemove = (id) => {
    setContacts(
      contacts.filter((contact) => contact.id !== id)
    );
  }

  const onFilter = (e) => {
    setFilter(e.currentTarget.value);
  }

  const hendleSearch = () => {
    const universalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(universalFilter),
    );
  };

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm  onSubmit={handleSubmit}/>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={onFilter}/>
        <ContactList contacts={hendleSearch()} onDelete={hendleRemove}/>
      </div>
    );
}

export default App;
