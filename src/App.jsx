import "./App.css";
import "modern-normalize";

import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import phoneList from "./PhoneList.json";

const localStorageKey = "contacts";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactFromStorage = window.localStorage.getItem(localStorageKey);
    if (contactFromStorage) {
      return JSON.parse(contactFromStorage);
    } else {
      return phoneList;
    }
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const getFiltratedList = () => {
    const searchableLine = search?.toLowerCase();
    if (searchableLine) {
      return contacts.filter((contact) => {
        return contact?.name.toLowerCase().includes(searchableLine);
      });
    } else {
      return contacts;
    }
  };

  const addNewContact = (contact) => {
    setContacts((contacts) => {
      return [...contacts, contact];
    });
  };

  const deleteContact = (id) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div className="mainBlock">
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox searchField={search} searchChange={setSearch} />
      <ContactList contacts={getFiltratedList()} onDelete={deleteContact} />
    </div>
  );
}

export default App;
