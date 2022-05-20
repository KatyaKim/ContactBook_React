import "./App.css";

import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContacts from "./components/EditContacts/EditContacts";

const App = () => {
  let [contacts, setContacts] = useState([]); // setContact - меняет состояние; ([])- начальное состояние
  let [editContact, setEditContact] = useState({}); // setEditContact - меняет состояние
  let [isEdit, setIsEdit] = useState(false); // setIsEdit - меняет состояние

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts]; //распаковываем в новую переменную, чтобы сохранить
    newContactsArray.push(newContact);

    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    // создается только в родительском объекте
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });

    setContacts(newContactsArray);
    setIsEdit(false);
  }

  return (
    <div className="App">
      <AddContact handleNewContact={handleNewContact} />

      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}

      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
};

export default App;
