import React, { useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {nanoid} from "nanoid";
import {Container} from "./App.styled";
import PhoneBook from './PhoneBook/PhoneBook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

toast.info('Welcome to Phonebook!', {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });

  // const phoneNumber = {
  //   Booknumber: [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  //   ],
  // };

  const LOCAL_STORAGE_KEY = 'contacts';


  function App() {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);


  useEffect(() => {
     const savedContactsFromStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY ));

    if (savedContactsFromStorage && savedContactsFromStorage.length > 0) {
      setContacts(savedContactsFromStorage);
    }
  }, []);


  const isContactUnique = (newName) => {
    return contacts.some(({ name }) => name === newName);

  };
    
  const addContact = (newName, number) => {
    if (isContactUnique(newName)) {
      toast.error(`${newName} is already in contacts.`, {
        theme: "colored"
      });
      return;

    }
    
    const newContact = {
      id: nanoid(),
      name: newName,
      number,
    };
    setContacts([newContact, ...contacts]);
    console.log(contacts);

  };



   
const deleteContact = contactId => {
  const deletedContactId = contacts.find(contact => contact.id === contactId);

  if (deletedContactId) {
    const {name} = deletedContactId;
    setContacts(contacts.filter(contact => contact.id !== contactId));
    toast.success(`Deleted contact: ${name}`, {
      theme: "colored"
    });
      
  }
}
 

const changeFilter = event => {
  setFilter(`${event.currentTarget.value}`);
}


const getFilterContacts = () => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
};

const filtredContacts = getFilterContacts();

  return (
      <>
       <Container>
        <h1>-Phonebook- </h1>
        <PhoneBook onAddContact={addContact}/>

        <h2>-Contacts-</h2>
        <Filter value={filter} onChange={changeFilter}/>
          {filtredContacts.length > 0 ? (
          <ContactList
            contacts={filtredContacts} onDeleteContact={deleteContact}
          />
        ) : (
          <p style={{color: "darksalmon", display: "flex", justifyContent: "center"}}>No contacts found</p>
        )}
         <ToastContainer icon={false} />
      </Container>
      </>
     );

        }

export default App;








































// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
