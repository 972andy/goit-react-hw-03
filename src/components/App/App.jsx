import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    // Завантажуємо контакти з локального сховища, якщо є
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  // Оновлюємо LocalStorage, коли контакти змінюються
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    setFilteredContacts(contacts); // Оновлюємо відфільтрований список
  }, [contacts]);

  // Функція пошуку
  const handleSearch = (searchQuery) => {
    const normalizedQuery = searchQuery.toLowerCase();
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedQuery)
    );
    setFilteredContacts(filtered);
  };

  // Функція додавання користувача
  const addUserToContacts = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevContacts) => [...prevContacts, finalUser]);
  };

  // Функція видалення користувача
  const removeUser = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addUserToContacts={addUserToContacts} />
      <SearchBox onSearch={handleSearch} />
      <ContactList
        removeUser={removeUser}
        contacts={filteredContacts}
      />
    </div>
  );
}

export default App;



