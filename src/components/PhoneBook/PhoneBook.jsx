import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-hot-toast';
import { addDataContacts } from "redux/Operations/operations";
import { selectContacts } from "redux/Selectors/selectors";
import { Button, Form, LabelForm, Input } from './PhoneBook.styled';
import { BiMessageAdd } from "react-icons/bi";

 function PhoneBook() {
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
         event.preventDefault();

         const form = event.currentTarget;
         const name = form.elements.name.value;
         const number = form.elements.phonenumber.value;
         
        const isNotUnique = contacts.some(contact => contact.name === name);

          if (isNotUnique) {
            return toast.error(`"${name}" is already in contacts.`);
        }

        dispatch(
           addDataContacts({
            name,
            number,
           })
            );
        form.reset();
    };
    
        return (
            <Form onSubmit={handleSubmit}>
                <LabelForm>
                    Name
                    <Input
                    type="text"
                    name="name"
                    placeholder="Iruna"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    // required
                    />
                </LabelForm>
                <LabelForm>
                    Number
                    <Input
                    type="tel"
                    name="phonenumber"
                    placeholder="+3801678598"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    // required
                    />
                </LabelForm>
                <Button type="submit">Add contact<BiMessageAdd/></Button>
            </Form>
        );
};

PhoneBook.propType = {
    onAddContact: PropTypes.func.isRequired,
};

export default PhoneBook;