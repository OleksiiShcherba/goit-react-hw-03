import "./App.css";
import "modern-normalize";

import { useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const phoneList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(phoneList);
  const [search, setSearch] = useState("");

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
    <>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox searchField={search} searchChange={setSearch} />
      <ContactList contacts={getFiltratedList()} onDelete={deleteContact} />
    </>
  );
}

export default App;
