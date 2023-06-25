import React, {Component} from "react";
import PropTypes from "prop-types";
import { Button, Form, LabelForm, Input } from './Phonebook.styled';

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
        const {name, number} = this.state;
        event.preventDefault();
        this.props.onAddContact(name, number);
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
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="User name"
                    required
                    value={value}
                    onChange={this.handleChangeContact}
                    />
                </LabelForm>
                <LabelForm>
                    Number
                    <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number"
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