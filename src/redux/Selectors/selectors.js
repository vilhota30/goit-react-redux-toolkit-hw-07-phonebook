import {createSelector} from "@reduxjs/toolkit";

export const contactsSelect = state => state.contacts;

export const filterSelect = state => state.filter;

export const filteredContactsSelect = createSelector([contactsSelect, filterSelect], (contacts, filterValue) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase().trim()))
});

