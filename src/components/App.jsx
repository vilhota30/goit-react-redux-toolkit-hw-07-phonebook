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
    filter: " ",
  };

  isContactUnique = (newName) => {
    return this.state.contacts.some(({name}) => name === newName);
  }

  validateName = (name) => {
    const namePattern = "/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/";
    return namePattern.test(name);
  };

  validateNumber = (number) => {
    const numberPattern = "/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/";
    return numberPattern.test(number);
  };


  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid(),
    };

    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is duplicate contact`)
      : this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
  };


  deleteContact = contactId => {
    const deletedContact = this.state.contacts.find(contact => contact.id === contactId);
    if (deletedContact) {
      const {name} = deletedContact;
      this.setState(({contacts}) => ({
        contacts: contacts.filter(contact => contact.id !== contactId),
      }));
    }
  };

  changeFilter = evt => {
    this.setState({filter: evt.currentTarget.value});
  };

  filterList = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  render () {
    const {filter} = this.state;
    const filteredContacts = this.filterList();

     return (
       <Container>
        <h1>PhoneBook</h1>
        <PhoneBook onAddContact={this.addContact}/>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        {filteredContacts.length > 0 ? (
          <ContactList 
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
          />
        ) : (
          <p>No contacts found</p>
        )}
       </Container>
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
