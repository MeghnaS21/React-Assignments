import React, { useState, useEffect } from "react";
import Header from './Header';
import AddContact from './AddContact';
import './App.css'
import ContactList from './ContactList';
function App() {
  //we will use state that is react hooks
  //create contant with name contact
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  };

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

//whenever the value gets changes useeffect helps us to re-render the same

export default App;
