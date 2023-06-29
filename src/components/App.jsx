import React, {Component} from "react";
import {nanoid} from "nanoid";
import {Container} from "./App.styled";
import PhoneBook from './PhoneBook/PhoneBook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state= {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

   addContact = contact => {
    const namePhone = this.state.contacts.find(
      ({ name }) => contact.name === name
    );
    if (namePhone) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };
  

  deleteContact = contactId => {
    
      this.setState(({contacts}) => ({
        contacts: contacts.filter(contact => contact.id !== contactId),
      }));

  };

   changeFilter = ({ currentTarget: { value } }) => {
     this.setState({ filter: value });
   };

  filterList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render () {
     const { filter } = this.state;
     const filteredContacts = this.filterList();
     return (
      <>
       <Container>
        <h1>-Phonebook- </h1>
        <PhoneBook onAddContact={this.addContact}/>

        <h2>-Contacts-</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
          {filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts} onDeleteContact={this.deleteContact}
          />
        ) : (
          <p>No contacts found</p>
        )}
      </Container>
      </>
     );
  }
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
