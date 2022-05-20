import React, { useState } from "react";
import "./EditContacts.css";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [lastName, setLastName] = useState(props.editContact.lastName);
  let [photo, setPhoto] = useState(props.editContact.photo);

  function handleSaveClick() {
    let contact = { ...props.editContact }; // сразу выводит значения в инпуты при редактировании
    contact.name = name;
    contact.lastName = lastName;
    contact.photo = photo;
    props.handleSaveEditedContact(contact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div className="editInputs">
      <input
        className="editName"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        className="editLastName"
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="LastName"
        value={lastName}
      />
      <input
        className="editPhoto"
        onChange={(e) => setPhoto(e.target.value)}
        type="text"
        placeholder="URL Photo"
        value={photo}
      />
      <button className="editBtn" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
};

export default EditContacts;
