import React, {Component} from "react";
import PropTypes from "prop-types";
import { Button, Form, LabelForm, Input } from './PhoneBook.styled';

class PhoneBook extends Component {
    state = {
        name: " ",
        number:" ",
    }

    
    handleChangeContact = event => {
        const { name, value } = event.currentTarget; 
        this.setState({
            [name]:value,
        });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.onAddContact(this.state);
        this.resetForm();
    
    };
    
     resetForm = () => {
         this.setState({
             name: " ",
             number: " ",
         });
     };
    
    render () {
        const {name, number} = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <LabelForm>
                    Name
                    <Input
                    type="text"
                    name="name"
                    placeholder="user name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleChangeContact}
                    />
                </LabelForm>
                <LabelForm>
                    Number
                    <Input
                    type="tel"
                    name="number"
                    placeholder="user number"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleChangeContact}
                    />
                </LabelForm>
                 <Button type="submit">Add contact</Button>
            </Form>
        );
    };
};

PhoneBook.propType = {
    onAddContact: PropTypes.func.isRequired,
};

export default PhoneBook;